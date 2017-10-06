/**
 * Freezes an object passed on to it and its sub properties. Avoid unexpected mutations
 * @param obj
 * @returns {any}
 */
function deepFreeze(obj): any {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj.hasOwnProperty(prop)
      && obj[prop] !== null
      && (typeof obj[prop] === 'object')
      && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop])
    }
  });
  return obj;
}

export default function freezeState(store) {
  return next => action => {
    const result = next(action);
    const state = store.getState();
    deepFreeze(state);
    return result;
  }

}
