/**
 *
 * @param {*} obj
 * @returns Json object with the id key removed
 */
function removeIdToJson(obj) {
  let newObj = {};
  delete Object.assign(newObj, obj).id;
  return JSON.stringify(newObj);
}

function formatCurrency(amount) {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export { removeIdToJson, formatCurrency };
