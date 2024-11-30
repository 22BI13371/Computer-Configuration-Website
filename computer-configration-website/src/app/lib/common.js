/**
 *
 * @param {*} obj
 * @returns Json object with the id key removed
 */
function removeIdToJson(obj) {
  delete obj.id;
  return JSON.stringify(obj);
}

export { removeIdToJson };
