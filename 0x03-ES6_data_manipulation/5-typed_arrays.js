export default function createInt8TypedArray(length, position, value) {
  const arrBuffer = new ArrayBuffer(length);
  const valBuffer = new DataView(arrBuffer);

  try {
    valBuffer.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return valBuffer;
}
