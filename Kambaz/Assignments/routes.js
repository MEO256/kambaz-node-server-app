import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

    app.put("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const assignment = req.body;
        const status = await dao.updateAssign(aid, assignment);
        res.send(status);
    });
    

    app.delete("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const status = await dao.deleteAssignment(aid);
        res.send(status);
    });
    
    app.post("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const module = await dao.createAssignment(cid, req.body);
        res.json(module);
    });
    
  app.get("/api/courses/:cid/Assignments", async (req, res) => {
    const { cid } = req.params;
    const status = await dao.findAssignByCid(cid);
    res.send(status);
  });
}