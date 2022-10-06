//import posts from "./tuits.js";
import tuitsDAO from "../tuits-dao.js";
//import tuitsDAO from "../tuits-dao.js"
//let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDAO.createTuit(newTuit);
    res.json(insertedTuit);
}
const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDAO.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}
const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDAO.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDAO.findAllTuits();
    res.json(tuits);
}


