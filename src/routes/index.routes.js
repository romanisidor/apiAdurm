import { Router } from 'express';

const router = Router();

router.get('/', (req, res ) => {
    res.send('ADURM API is working!');
});

export default router;