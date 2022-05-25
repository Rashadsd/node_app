import Router from 'express';
import controller from './controllers.mjs';


const router = new Router();

router.get('/', controller.getAll)

router.post('/add', controller.create)

router.get('/getOne/:id', controller.getOne)

router.put('/update', controller.change)


export default router;
