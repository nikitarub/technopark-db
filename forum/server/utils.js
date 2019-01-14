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

export const valStr = function (arrayOfPostObjects) {
    let resultQuery = ``;
    for (let i = 0; i < arrayOfPostObjects.length; i++) {
        const valuesInArray = harvestValues(arrayOfPostObjects[i]);
        let val = ` (`;
        // val += `(SELECT nickname FROM users WHERE nickname=${`'` + valuesInArray[0] + `'`})`;
        for (let j = 0; j < valuesInArray.length; j++) {

            // if ( j !== 2) {
                // val += "'" + valuesInArray[j] + "'";
            // } else {
            val += valuesInArray[j];
            // }
            if (j !== valuesInArray.length - 1) {
                val += ', ';
            }
        }

        resultQuery += val;
        if (i === arrayOfPostObjects.length - 1) {
            resultQuery += `) `;
        } else {
            resultQuery += `), `;
        }
    }
    return resultQuery;
}


export const constructPathString = function (pathArray) {
    let result = `{`;
    for (let i = 0; i < pathArray.length; i++) {
        result += pathArray[i];
        if (i !== pathArray.length - 1) {
            result += `, `;
        }
    }
    result += `}`;
    return result;
}

// export const construnctPrepareStatementValues = function (len) {
//     let result = ``;
//     for (let i = 0; i < len; i++) {
//         // result += `(`;
//         // for (let j = 1; j <= 8; j++) {
//         //     if (j !== 8) {
//         //         result += `$` + `${j + i * 8}, `;
//         //     } else {
//         //         result += `$` + `${j + i * 8}`;
//         //     }
//         // }

//         // if (i !== len - 1) {
//         //     result += `), `;
//         // } else {
//         //     result += `) `;
//         // }
//         result += `(`;
//         if (i !== len - 1) {
//             result += `${i+1}, `;
//         } else {
//             result += `${i+1} `;
//         }
//         result += `)`;
//     }
//     // console.log(len, result);
//     return result;
// }