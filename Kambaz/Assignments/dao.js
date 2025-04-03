import model from "./model.js";

export const updateAssign = (assignId, assignment) => model.updateOne({_id: assignId}, {$set: assignment});

export const deleteAssignment = (assignId) => model.deleteOne({ _id: assignId });

export const createAssignment = (cid, assignment) => {
    const newAssignment = {
        ...assignment,
        course: cid,
        _id: new Date().getTime().toString(),
    };
    return model.create(newAssignment);
}

export const findAssignByCid = (cid) => model.find({course: cid});
