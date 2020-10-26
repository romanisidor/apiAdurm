import express, {json} from 'express';
const cors = require('cors');

const app = express();

//Routes
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

//Settings

//Es importante instalar el módulo de CORS para poder hacer peticiones desde otros sitios
app.use(cors());

app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(json());

//Routes
app.use(IndexRoutes);
app.use('/aduanas', TaskRoutes);

export default app;