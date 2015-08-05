function neq(givenValue, queryValue) {
  if (givenValue === undefined) {
    return true;
  } else {
    return givenValue !== queryValue;
  }
}

function eq(givenValue, queryValue) {
  if (givenValue === undefined) {
    return false;
  } else {
    return givenValue === queryValue;
  }
}

function getQueryFunction(queryObj) {
  // Query array contains arrays of the format
  // [ 'attrName', 'op', 'expectedValue' ]
  // 'op' is $neq, $eq, etc.
  const queryArray = [];
  for (const attr in queryObj) {
    if (queryObj.hasOwnProperty(attr)) {
      const opObj = queryObj[attr];
      for (const op in opObj) {
        if (opObj.hasOwnProperty(op)) {
          queryArray.push([attr, op, opObj[op]]);
        }
      }
    }
  }
  const queryArrayLength = queryArray.length;
  if (queryArrayLength === 0) {
    return function() {
      return true;
    };
  } else {
    return function(obj) {
      const results = [];
      for (let i = 0; i < queryArrayLength; i++) {
        const query = queryArray[i];
        const attr = query[0];
        const op = query[1];
        const queryValue = query[2];
        const givenValue = obj[attr];
        switch (op) {
          case '$neq':
            results.push(neq(givenValue, queryValue));
            break;
          case '$eq':
            results.push(eq(givenValue, queryValue));
            break;
          default:
            results.push(true);
        }
      }
      return results.indexOf(false) === -1;
    };
  }
}

export default getQueryFunction;
