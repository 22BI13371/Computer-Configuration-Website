/**
 *
 * @param {*} obj
 * @returns Json object with the id key removed
 */
function removeIdToJson(obj) {
  let newObj = {};
  return JSON.stringify(delete Object.assign(newObj, obj).id);
}

export { removeIdToJson };
