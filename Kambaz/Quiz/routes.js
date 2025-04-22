import * as assignmentsDao from "./dao.js";

export default function QuizRoutes(app) {
  app.get("/api/courses/:courseId/quizzes/:quizId", async (req, res) => {
    const { assignmentId } = req.params;
    res.json(await assignmentsDao.getAssignmentById(assignmentId));
  });
  app.post("/api/quizzes", async (req, res) => {
    res.json(await assignmentsDao.createAssignment(req.body));
  });
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { assignmentId } = req.params;
    res.json(await assignmentsDao.updateAssignment(assignmentId, req.body));
  });
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    res.json(await assignmentsDao.getAllAssignments());
  });
  
}