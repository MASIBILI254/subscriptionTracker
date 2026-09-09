import {Router} from 'express';

const userRouter = Router();

userRouter.get('/profile', (req, res) => {
    res.send({body:'User profile route'});
});
//get all users
userRouter.get('/', (req, res) => {
    res.send({body:'Get all users route'});
});
//get user by id
userRouter.get('/:id', (req, res) => {
    res.send({body:`Get user by id route with id ${req.params.id}`});
});
//update user by id
userRouter.put('/:id', (req, res) => {
    res.send({body:`Update user by id route with id ${req.params.id}`});
});
//delete user by id
userRouter.delete('/:id', (req, res) => {
    res.send({body:`Delete user by id route with id ${req.params.id}`});
});

export default userRouter;