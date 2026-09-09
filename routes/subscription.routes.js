import {Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/all', (req, res) => {
    res.send({body:'Get all subscriptions route'});
});
subscriptionRouter.get('/:id', (req, res) => {
    res.send({body:`Get subscription by id route with id ${req.params.id}`});
});

export default subscriptionRouter;