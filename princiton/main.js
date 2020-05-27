//conecting and checking conections using quickFind for dynamic  connectivity problem

function quickfind(array, p, q) {
  let index = array;
  if (index[p] === index[q]) {
    console.log("is already conected");
  } else {
    forEach(item, () => {
      index[item] = index[p];
      console.log("conected now");
    });
  }
  return "conected";
}

function quickUnion(arraym, p, q) {
  let roots = array;
  roots[p] = roots[q];
}
