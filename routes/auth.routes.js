import {Router} from 'express';

const authRouter = Router();

authRouter.post('/login', (req, res) => {
    res.send({body:'Login route'});
});
authRouter.post('/register', (req, res) => {
    res.send({body:'Register route'});
});
authRouter.post('/logout', (req, res) => {
    res.send({body:'Logout route'});
});
export default authRouter;