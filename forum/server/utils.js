export const harvestColumns = function (data) {
    const keys = []
    for (let key of Object.keys(data)) {
        if (data[key] !== '') {
            keys.push(key);
        }
    }
    return keys;
}

export const harvestValues = function (data) {
    const values = []
    for (let value of Object.values(data)) {
        if (value !== '') {
            values.push(value);
        }
    }
    return values;
}


export const harvestKeyValues = function (data) {
    const keyValues = {}
    for (let key of Object.keys(data)) {
        if (data[key] !== '') {
            keyValues[key] = data[key];
        }
    }
    return keyValues;
}

export const idToInt = function (data) {
    for (let i = 0; i < data.length; i++) {
        data[i].id = parseInt(data[i].id);
    }
    return data;
}

export const valStr = function (values, noDot) {
    let v = ' (';
    for (let i =0 ; i < values.length; i++) {
        if ( i !== 2) {
            v += "'" + values[i] + "'";
        } else {
            v += values[i];

        }
        if (i !== values.length - 1) {
            v += ', ';
        }
    }
    if (noDot) {
        v += ') ';

    } else {
        v += '), '; 
    }
    return v;
}