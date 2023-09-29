export default function createIteratorObject(report) {
  let allEmps = [];
  for (const item of Object.values(report.allEmps)) {
    allEmps = [
      ...allEmps,
      ...item
    ];
  }
  return allEmps;
}
