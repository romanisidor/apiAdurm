
import {Router} from 'express'

//Database connection
import { connect } from '../database';
import { ObjectID } from 'mongodb'

const router = Router();

//Obtener todos los datos de la colección tasks
router.get('/', async (req, res) =>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
});

//Postear un solo dato (Una tarea)

router.post('/', async (req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req. body.description
    };
    const result = await db.collection('tasks').insertOne(task);
    res.json(result.ops[0]);
})

//Obtener un solo dato de la BD 
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    res.json(result);
})

//eliminar datos
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({_id:  ObjectID(id)});
    res.json({
        message:  `Task ${id} eliminado.`,
        result
    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedTask = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    await db.collection('tasks').updateOne({_id:  ObjectID(id)}, {$set: updatedTask});
    res.json({
        message: `Task con el ${id} actualizado`
    })
})


export default router;