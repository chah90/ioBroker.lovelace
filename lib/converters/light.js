
exports.processLight = function (id, control, name, room, func, _obj) {
    const entity = this._processCommon(name, room, func, _obj, 'light');

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = {setId: null, getId: null};
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    return [entity];
};

function _getLightAdvancedState(control) {
    function getState(name) {
        const state = control.states.find(s => s.id && s.name === name);
        if (state && state.id) { // && state.type === 'boolean') { ignore type so dimmer without ON_SET will be allowed.
            return state;
        }
        return undefined;
    }

    let state = getState('ON_LIGHT');
    if (!state) {
        state = getState('ON');
    }
    if (!state) { //for dimmer, needs to be before 'SET' -> because in dimmer set is for level.
        state = getState('ON_SET');
    }
    if (!state) {
        state = getState('SET');
    }
    return state;
}

function _lightAdvancedAddState(control, state, entity) {
    let getState = control.states.find(s => s.id && s.name === 'ON_ACTUAL');
    //prevent zigbee 'available' to become getId:
    if (getState && getState.id && getState.id.indexOf('zigbee.') === 0 && getState.id.indexOf('.available') > 0) {
        getState = false;
    }
    entity.context.STATE = {setId: null, getId: null};
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.isBoolean = state.type === 'boolean';
        entity.context.STATE.getId = (getState && getState.id) ? getState.id : state.id;
        this._addID2entity(state.id, entity);
        if (getState) {
            this._addID2entity(getState.id, entity);
        }
        return true;
    } else {
        return false;
    }
}

function _lightAdvancedAddColorTemperature(control, objects, entity) {
    const iobMaxValue = 153;
    const iobMinValue = 450;

    const temperature = control.states.find(s => s.id && s.name === 'TEMPERATURE');
    if (temperature && temperature.id) {
        const tempObj = objects[temperature.id];
        const attribute = {
            attribute: 'color_temp',
            getId: temperature.id,
            setId: temperature.id,
            convert_to_kelvin: false,
            getParser: function (entity, attr, state) {
                if (!state || !state.val) {
                    entity.attributes.color_temp = 'unknown';
                    return;
                }
                let targetCt = state.val;
                if (targetCt > 1000 && !attr.convert_to_kelvin) {
                    attr.convert_to_kelvin = true;
                    this.log.warn('Need kelvin conversion for ' + temperature.id + ' and did not detect that in setup. Please set unit to "K" in object settings.');
                }
                if (attr.convert_to_kelvin) {
                    targetCt = 1e6 / targetCt;
                }
                entity.attributes.color_temp = targetCt;
            }.bind(this)
        };

        if (tempObj.common.unit === 'K') {
            attribute.convert_to_kelvin = true;
        }
        if (tempObj.common.max) {
            if (entity.attributes.iob_convert_kelvin || tempObj.common.max > 1000) { //probably kelvin in this case.
                attribute.convert_to_kelvin = true;
                entity.attributes.max_mireds = 1e6 / tempObj.common.max;
            } else {
                entity.attributes.max_mireds = tempObj.common.max;
            }
        } else {
            entity.attributes.max_mireds = iobMaxValue;
            this.adapter.log.warn(`no max value for light object '${temperature.id}' defined -> using fallback max = '${iobMaxValue}'`);
        }
        if (tempObj.common.min) {
            if (entity.attributes.iob_convert_kelvin || tempObj.common.min > 1000) { //probably kelvin in this case.
                attribute.convert_to_kelvin = true;
                entity.attributes.min_mireds = 1e6 / tempObj.common.min;
            } else {
                entity.attributes.min_mireds = tempObj.common.min;
            }
        } else {
            entity.attributes.min_mireds = iobMinValue;
            this.adapter.log.warn(`no min value for light object '${temperature.id}' defined -> using fallback min = '${iobMinValue}'`);
        }
        this.adapter.log.debug(entity.entity_id + ' ct needs kelvin conversion: ' + attribute.convert_to_kelvin);

        if (entity.attributes.min_mireds > entity.attributes.max_mireds) {
            //for kelvin conversion min and max need to be swapped.
            const max = entity.attributes.min_mireds;
            entity.attributes.min_mireds = entity.attributes.max_mireds;
            entity.attributes.max_mireds = max;
        }

        if (!entity.context.ATTRIBUTES) {
            entity.context.ATTRIBUTES = [];
        }
        entity.context.ATTRIBUTES.push(attribute);
        entity.attributes.supported_features |= 0x02;
        entity.attributes.color_temp = (entity.attributes.min_mireds + entity.attributes.max_mireds) / 2;
        this._addID2entity(temperature.id, entity);
    }
}

function _lightAdvancedAddBrightness(control, objects, entity) {
    let state = control.states.find(s => s.id && s.name === 'DIMMER');
    if (!state) {
        state = control.states.find(s => s.id && s.name === 'BRIGHTNESS');
    }
    if (!state) {
        state = control.states.find(s => s.id && s.name === 'SET');
        if (state && state.type !== 'number') { //in dimmer SET is for level for everything else it is on/off.
            state = undefined;
        }
    }
    if (state && state.id) {
        const dimmerId = state.id;
        const attribute = {
            attribute: 'brightness',
            getId: dimmerId,
            setId: dimmerId,
            max: 100,
            getParser: (entity, attr, state) => {
                state = state || {val: 0};
                entity.attributes.brightness = (state.val / attr.max) * 255;
                entity.attributes.brightness_pct = (state.val / attr.max) * 100;
            }
        };
        const obj = objects[dimmerId];
        if (obj.common.max) {
            attribute.max = obj.common.max;
        } else {
            this.adapter.log.warn(`no max value for light object '${dimmerId}' defined -> using fallback max = 100`);
        }
        entity.attributes.brightness = 0;
        if (!entity.context.ATTRIBUTES) {
            entity.context.ATTRIBUTES = [];
        }
        entity.context.ATTRIBUTES.push(attribute);
        entity.attributes.supported_features |= 0x01;
        this._addID2entity(dimmerId, entity);
    }
}

function _lightAdvancedAddHueAndSat(control, objects, entity) {
    const hue = control.states.find(s => s.id && s.name === 'HUE');
    if (hue && hue.id) {
        const attribute = {
            attribute: 'hs_color',
            getId: hue.id,
            setId: hue.id,
            max: objects[hue.id].common.max || 360,
            getParser: (entity, attr, state) => {
                state = state || {val: 0};
                entity.attributes.hs_color[0] = state.val / attr.max * 360;
            }
        };

        if (!entity.context.ATTRIBUTES) {
            entity.context.ATTRIBUTES = [];
        }
        entity.context.ATTRIBUTES.push(attribute);
        entity.attributes.supported_features |= 0x10;
        entity.attributes.hs_color = [0,100];
        this._addID2entity(hue.id, entity);
    }

    //add saturation as own attribute. Will update saturation values from ioBroker correctly.
    const sat = control.states.find(s => s.id && s.name === 'SATURATION');
    if (sat && sat.id) {
        if (!hue || !hue.id) {
            this.log.debug('Saturation present but no hue id found for ' + sat.id + '. Hue won\'t work.');
            return;
        }
        const attribute = {
            attribute: 'hs_saturation',
            getId: sat.id,
            setId: sat.id,
            max: objects[sat.id].common.max || 100,
            getParser: (entity, attr, state) => {
                state = state || {val: 0};
                entity.attributes.hs_color[1] = state.val / attr.max * 100;
            }
        };

        if (!entity.context.ATTRIBUTES) {
            entity.context.ATTRIBUTES = [];
        }
        entity.context.ATTRIBUTES.push(attribute);
        entity.attributes.supported_features |= 0x10;
        entity.attributes.hs_color = [0,100];
        this._addID2entity(sat.id, entity);
    } else if (hue && hue.id) {
        this.log.debug('Hue present but no saturation id found for ' + hue.id + '. Saturation won\'t work.');
    }
}

async function _lightAdvancedAddRGBSingle(control, objects, entity) {
    if (entity.context.ATTRIBUTES && entity.context.ATTRIBUTES.find((a) => a.attribute === 'hs_color')) {
        this.log.debug('Color already present, skip RGB color.');
        return;
    }

    const state = control.states.find(s => s.id && s.name === 'RGB');
    if (state && state.id) {
        const attribute = {
            attribute: 'hs_color',
            getId: state.id,
            setId: state.id,
            is_rgb_string: true,
            is_rgb_array: false,
            getParser: (entity, attr, state) => {
                state = state || {val: '#000000'};
                let str = (state.val || '#000000').toString();
                if (str[0] === '#') {
                    str = str.substring(1);
                }
                let r,g,b;
                if (/([0-9]){1-3},([0-9]){1-3},([0-9]){1-3}/.test(str)) {
                    this.log.debug('Have RGB decimal array.');
                    [r, g, b] = str.split(',');
                } else {
                    if (!/^[\da-fA-F]{6}/.test(str)) {
                        this.log.error('Malformed rgb string ' + str + ' expecting six hex digits.');
                        return;
                    }
                    // from rgb to hsv:
                    r = parseInt(str.substr(0, 2), 16);
                    g = parseInt(str.substr(2, 2), 16);
                    b = parseInt(str.substr(4, 2), 16);
                }
                //convert from [0-255] to [0-100]:
                r = r / 255 * 100;
                g = g / 255 * 100;
                b = b / 255 * 100;
                const hsv = _RGB2HSV(r, g, b);
                entity.attributes.hs_color = [hsv[0], hsv[1]];
                attr.value = hsv[2]; //store value in attribute.
            }
        };

        //check if current state is rgb array.
        const rgbState = await this.adapter.getForeignStateAsync(state.id);
        if (rgbState && rgbState.val) {
            attribute.is_rgb_array = /([0-9]){1-3},([0-9]){1-3},([0-9]){1-3}/.test(rgbState.val.toString());
        }

        if (!entity.context.ATTRIBUTES) {
            entity.context.ATTRIBUTES = [];
        }
        entity.context.ATTRIBUTES.push(attribute);
        entity.attributes.supported_features |= 0x10;
        entity.attributes.hs_color = [0,100];
        this._addID2entity(state.id, entity);
    }
}

function _lightAdvancedAddRGB(control, objects, entity) {
    if (entity.context.ATTRIBUTES && entity.context.ATTRIBUTES.find((a) => a.attribute === 'hs_color')) {
        this.log.debug('Color already present, skip R,G,B color.');
        return;
    }

    const redState   = control.states.find(s => s.id && s.name === 'RED');
    const greenState = control.states.find(s => s.id && s.name === 'GREEN');
    const blueState  = control.states.find(s => s.id && s.name === 'BLUE');
    const whiteState = control.states.find(s => s.id && s.name === 'WHITE');

    if (redState && redState.id && greenState && greenState.id && blueState && blueState.id) {
        //create main attribute for red:
        const attribute = {
            attribute: 'hs_color',
            getId: redState.id,
            setId: redState.id,
            is_rgb_values: true,
            max: objects[redState.id].common.max || 100,
            getParser: (entity, attr, state) => {
                state = state || {val: 0};
                const r = state.val / attr.max * 255; // ok, we get red. Now do kind of a hack, calculate RGB from current setting and change r and recaluclate HS.
                const hsv = [entity.attributes.hs_color[0], entity.attributes.hs_color[1], attribute.value || 100];
                const rgb = _HSV2RGB(hsv[0], hsv[1], hsv[2]);
                const hsv_new = _RGB2HSV(r, rgb.g, rgb.b);
                entity.attributes.hs_color = [hsv_new[0], hsv_new[1]];
                attribute.value =  hsv_new[2]; //store value in main attr.
            }
        };
        const attributeGreen = {
            attribute: 'hs_green',
            getId: greenState.id,
            setId: greenState.id,
            is_rgb_values: true,
            max: objects[greenState.id].common.max || 100,
            getParser: (entity, attr, state) => {
                state = state || {val: 0};
                const g = state.val / attr.max * 255; // ok, we get green. Now do kind of a hack, calculate RGB from current setting and change r and recaluclate HS.
                const hsv = [entity.attributes.hs_color[0], entity.attributes.hs_color[1], attribute.value || 100];
                const rgb = _HSV2RGB(hsv[0], hsv[1], hsv[2]);
                const hsv_new = _RGB2HSV(rgb.r, g, rgb.b);
                entity.attributes.hs_color = [hsv_new[0], hsv_new[1]];
                attribute.value =  hsv_new[2]; //store value in main attr.
            }
        };
        const attributeBlue = {
            attribute: 'hs_blue',
            getId: blueState.id,
            setId: blueState.id,
            is_rgb_values: true,
            max: objects[blueState.id].common.max || 100,
            getParser: (entity, attr, state) => {
                state = state || {val: 0};
                const b = state.val / attr.max * 255; // ok, we get blue. Now do kind of a hack, calculate RGB from current setting and change r and recaluclate HS.
                const hsv = [entity.attributes.hs_color[0], entity.attributes.hs_color[1], attribute.value || 100];
                const rgb = _HSV2RGB(hsv[0], hsv[1], hsv[2]);
                const hsv_new = _RGB2HSV(rgb.r, rgb.g, b);
                entity.attributes.hs_color = [hsv_new[0], hsv_new[1]];
                attribute.value =  hsv_new[2]; //store value in main attr.
            }
        };

        if (!entity.context.ATTRIBUTES) {
            entity.context.ATTRIBUTES = [];
        }
        entity.context.ATTRIBUTES.push(attribute, attributeGreen, attributeBlue);
        entity.attributes.supported_features |= 0x10;
        entity.attributes.hs_color = [0,100];
        this._addID2entity(redState.id, entity);
        this._addID2entity(greenState.id, entity);
        this._addID2entity(blueState.id, entity);

        if (whiteState && whiteState.id) {
            const whiteAttribute = {
                attribute: 'white_value',
                getId: whiteState.id,
                setId: whiteState.id,
                max: objects[whiteState.id].common.max || 100,
                getParser: (entity, attr, state) => {
                    state = state || {val: 0};
                    entity.attributes.white_value = state.val / attr.max * 255;
                }
            };
            entity.context.ATTRIBUTES.push(whiteAttribute);
            entity.attributes.supported_features |= 0x80;
            entity.attributes.white_value = 0;
            this._addID2entity(whiteState.id, entity);
        }
    }
}

//convert hsv color to rgb color values:
function _HSV2RGB(h, s, v) {
    const v_scaled = v/100;
    const s_scaled = s/100;
    const c = v_scaled * s_scaled;
    const x = c * (1 - Math.abs(((h / 60.0) % 2) - 1));
    const m = v_scaled - c;
    let r, g, b;
    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255.0);
    g = Math.round((g + m) * 255.0);
    b = Math.round((b + m) * 255.0);
    return {r: r, g: g, b: b};
}

//convert RGB values to hue and saturation (omitting value = brightness)
function _RGB2HSV(r, g, b) {
    const c_max = Math.max(r, Math.max(g, b));
    const c_min = Math.min(r, Math.min(g, b));
    const delta = c_max - c_min;

    let h;
    if (delta === 0) {
        h = 0;
    } else if (c_max === r) {
        h = 60 * (((g-b) / delta) % 6);
    } else if (c_max === g) {
        h = 60 * (((b-r) / delta) + 2);
    } else if (c_max === b) {
        h = 60 * (((r-g) / delta) + 4);
    }
    if (h < 0) {
        h += 360; //make h positive.
    }

    const s = ((c_max === 0) ? 0 : delta / c_max) * 100;
    const v = c_max / 255 * 100;
    return [h, s, v];
}

async function _setLightAdvancedAttributesToIOBStates(data, entity, user, resolve, reject) {
    function NumToHex(num) {
        let hex = Number(num).toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }

    if (data.service_data.color_temp) { //will also be false for ct = 0 -> but ct = 0 is not a useful mired value and creates issues with the conversion.
        let ct = data.service_data.color_temp;
        entity.attributes.color_temp = ct;
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        if (attr.convert_to_kelvin) {
            ct = 1e6 / ct;
        }
        await this.adapter.setForeignStateAsync(attr.setId, ct, false, {user});
    }
    if (data.service_data.brightness >= 0) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
        entity.attributes.brightness = data.service_data.brightness;
        entity.attributes.brightness_pct = data.service_data.brightness / 255;
        if (!entity.context.STATE.isBoolean) {
            entity.state = data.service_data.brightness > 0 ? 'on' : 'off';
        }
        await this.adapter.setForeignState(attr.setId, data.service_data.brightness / 255 * attr.max, false, {user});
    }
    if (data.service_data.brightness_pct >= 0) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
        entity.attributes.brightness = (data.service_data.brightness_pct / 100) * 255;
        entity.attributes.brightness_pct = data.service_data.brightness_pct;
        if (!entity.context.STATE.isBoolean) {
            entity.state = data.service_data.brightness > 0 ? 'on' : 'off';
        }
        await this.adapter.setForeignState(attr.setId, data.service_data.brightness_pct / 100 * attr.max, false, {user});
    }
    if (data.service_data.hs_color) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hs_color');
        const attr_Sat = entity.context.ATTRIBUTES.find(a => a.attribute === 'hs_saturation');
        const h = data.service_data.hs_color[0];
        const s = data.service_data.hs_color[1];
        entity.attributes.hs_color = [h,s];
        if (attr) {
            if (attr.is_rgb_string || attr.is_rgb_values) {
                //convert from hsv to rgb and set state:
                const v = attr.value || 100;
                const rgb = _HSV2RGB(h, s, v);
                if (attr.is_rgb_string) {
                    let rgbString;
                    if (attr.is_rgb_array) {
                        rgbString = rgb.r + ',' + rgb.g + ',' + rgb.b;
                    } else {
                        rgbString = '#' + NumToHex(rgb.r) + NumToHex(rgb.g) + NumToHex(rgb.b);
                    }
                    await this.adapter.setForeignStateAsync(attr.setId, rgbString, false, {user});
                } else if (attr.is_rgb_values) {
                    const attrGreen = entity.context.ATTRIBUTES.find(a => a.attribute === 'hs_green');
                    const attrBlue = entity.context.ATTRIBUTES.find(a => a.attribute === 'hs_blue');
                    //set r,g,b to single states in ioBroker. rgb is always [0-255] here (from HASS), so scale here.
                    await this.adapter.setForeignStateAsync(attr.setId, rgb.r / 255 * attr.max, false, {user});
                    await this.adapter.setForeignStateAsync(attrGreen.setId, rgb.g / 255 * attr.max, false, {user});
                    await this.adapter.setForeignStateAsync(attrBlue.setId, rgb.b / 255 * attr.max, false, {user});
                }
            } else {
                await this.adapter.setForeignStateAsync(attr.setId, h / 360 * attr.max, false, {user});
                if (attr_Sat) {
                    await this.adapter.setForeignStateAsync(attr_Sat.setId, s / 100 * attr_Sat.max, false, {user});
                } else {
                    this.log.warn('No saturation for ' + entity.context.STATE.getId + ', can only set hue.');
                }
            }
        } else if (attr_Sat) {
            this.log.warn('No hue for ' + entity.context.STATE.getId + ', can only set saturation.');
            await this.adapter.setForeignStateAsync(attr_Sat.setId, s / 100 * attr_Sat.max, false, {user});
        }
    }
    if (data.service_data.white_value >= 0) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'white_value');
        await this.adapter.setForeignStateAsync(attr.setId, data.service_data.white_value / 255 * attr.max, false, {user});
    }
}

async function _parseLightAdvancedOn(entity, command, data, user) {
    // if ON/OFF object exists
    if (entity.context.STATE.setId && entity.context.STATE.getId) {
        // read actual state
        const state = await this.adapter.getForeignStateAsync(entity.context.STATE.getId);

        // if lamp is not ON
        if (!state || !state.val) {
            // turn ON:
            await this.adapter.setForeignStateAsync(entity.context.STATE.setId, command.on, false, {user});
        }
    }
    await _setLightAdvancedAttributesToIOBStates.call(this, data, entity, user);
}

exports.processLightAdvanced = async function (id, control, name, room, func, _obj, objects) {
    const state = _getLightAdvancedState(control);
    if (state && state.id) {
        const entity = this._processCommon(name, func, room, _obj, 'light');

        //fill in on/off state id.
        await _lightAdvancedAddState.call(this, control,state, entity);

        //fill in color temperature stuff.
        await _lightAdvancedAddColorTemperature.call(this, control, objects, entity);

        //if there is a "BRIGHTNESS" control, use it to dim lamp.
        await _lightAdvancedAddBrightness.call(this, control, objects, entity);

        //add hue and sat:
        await _lightAdvancedAddHueAndSat.call(this, control, objects, entity);

        //add rgb. Will only happen, if no hue.
        await _lightAdvancedAddRGBSingle.call(this, control, objects, entity);

        //add rgb as single states. Will only happen if no hue and no rgbSingle:
        await _lightAdvancedAddRGB.call(this, control, objects, entity);

        if (!entity.context.COMMANDS) {
            entity.context.COMMANDS = [];
        }
        entity.context.COMMANDS.push({
            service: 'turn_on',
            on: true,
            setId: entity.context.STATE.setId,
            parseCommand: _parseLightAdvancedOn.bind(this)
        });
        if (!entity.context.STATE.isBoolean) {
            const stateObj = objects[state.id];
            entity.context.COMMANDS[0].on = stateObj.common.max || 100;
            entity.context.COMMANDS.push({
                service: 'turn_off',
                off: stateObj.common.min || 0,
                setId: entity.context.STATE.setId,
                parseCommand: (entity, command, data, user) => {
                    return this.adapter.setForeignStateAsync(command.setId, command.off, false, {user});
                }
            });
            entity.context.STATE.getParser = function (entity, attr, state) {
                state = state || {val: null};
                entity.state = state.val > 0 ? 'on' : 'off';
            };
        }

        return [entity];
    } else {
        this.log.debug('Could not add ' + id + ' of type ' + control.type + ' -> no on/off control found.');
        return null;
    }
};
