function deleteNth(arr, n) {
  let numReps = {};
  let posiciones = [];

  const result = arr.filter((element, index) => {
    numReps[element] = (numReps[element] || 0) + 1;
    if (numReps[element] <= n) {
      return posiciones.push(index);
    }
  });
  return result;
}

//best practice
function deleteNth(arr, n) {
  let numReps = {};
  return arr.filter((el, index) => {
    numReps[el] = (numReps[el] || 0) + 1;
    return numReps[el] <= n;
  });
}

function deleteNth(arr, n) {
  let numReps = {};
  return arr.filter((el) => (numReps[el] = numReps[el] + 1 || 1) <= n);
}
