import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function getAssignmentsForCourse(courseId, searchText) {
  if (searchText) {
    return model.find({
      course: courseId,
      title: { $regex: searchText, $options: "i" },
      description: { $regex: searchText, $options: "i" },
    });
  }
  return model.find({ course: courseId });
}

export function getAssignmentById(assignmentId) {
  return model.findById(assignmentId);
}

export function createAssignment(assignment) {
    const newAssign = { ...assignment, _id: uuidv4() };
    return model.create(newAssign);
}


export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}

export function getAllAssignments() {
  return model.find();
}

export function deleteAssignmentsForCourse(courseId) {
  return model.deleteMany({ course: courseId });
}