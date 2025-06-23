export function getAllStud(req, res) {
  res.status(200).send("fetch student data");
}
export function createStud(req, res) {
  res.status(200).json({ message: "create student data successfully!" });
}
export function updateStud(req, res) {
  res.status(200).json({ message: "update student data successfully!" });
}
export function deleteStud(req, res) {
  res.status(200).json({ message: "delete student data successfully!" });
}
