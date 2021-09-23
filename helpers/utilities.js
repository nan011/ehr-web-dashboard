export function createEndpoint(parts) {
  // Return a function that able to create endpoint customizely
  return (params) => {
    // Throw error if the number of parameters is not same as the number of parts
    if (params.length < parts.length) {
      throw new Error("Parameters are given too less");
    } else if (params.length > parts.length) {
      throw new Error("Parameters are given too much");
    }

    // Create endpoint from params respectively with parts
    return (
      parts.reduce((endpoint, part, index) => {
        // If the current parameter is not null or undefined
        if (params[index]) {
          return `${endpoint}/${part}/${params[index]}`;
        }

        return `${endpoint}/${part}`;
      }, "") + "/"
    );
  };
}

export function createParameter(parts) {
  return Object.keys(parts)
    .reduce(
      (parameters, parameter) =>
        parameters + `&${parameter}=${parts[parameter]}`,
      ""
    )
    .replace(/^./, "?");
}

export function isNone(object) {
  return object === undefined || object === null;
}
