import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    _id: String,
    shuffle_answers: Boolean,
    show_answers: Boolean,
    webcam: Boolean,
    time_limit: Number,
    multiple_attempts: Boolean,
    title: String,
    course: { type: String, ref: "CourseModel" },
    due: Date,
    until: Date,
    points: Number,
    description: String,
    displayType: String,
    assignmentGroup: String,
    submissionType: String,
    assignTo: String,
  },
  { collection: "quizzes" }
);
export default quizSchema;