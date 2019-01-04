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