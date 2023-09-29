export default function appendToEachArrayValue(array, appendString) {
  let newArr = [];
  for (let idx of array) {
    let value = idx;
    newArr.push(`${appendString}${value}`);
  }

  return array;
}
