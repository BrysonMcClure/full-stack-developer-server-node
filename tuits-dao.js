import tuitsModel from './tuits-model.js';

export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tuit) =>  {
    tuit.likes = 0;
    tuit.dislikes = 0;
    tuit.postedBy = {username : 'anonymous'};
    return tuitsModel.create(tuit);
}
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

export default {findAllTuits, createTuit, deleteTuit, updateTuit};