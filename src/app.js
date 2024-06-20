import express from 'express';
import morgan from 'morgan'
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import configRoutes from './routes/config.routes';
import personalRoutes from './routes/personal.routes';
import proyectRoutes from './routes/proyect.routes'
import documentRoutes from './routes/document.routes'
import unitRoutes from './routes/unit.routes';
import { createRoles, createProviders, createTables} from './libs/initialSetup';
import { authJwt } from "./middlewares";
import cors from 'cors';

const app = express()
//createRoles()
//createProviders()
//createTables()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());

app.get('/home',authJwt.verifyToken ,(req, res)=>{
    res.json('Bienvenido')
})

app.use('/auth',authRoutes)
app.use('/users', userRoutes)
app.use('/config', configRoutes)
app.use('/personal', personalRoutes)
app.use('/proyect', proyectRoutes)
app.use('/document', documentRoutes)
app.use('/unit', unitRoutes)


export default app;

// 6673341bcff49cdb5e8bc5ea   proyect  667336b3626e16203e82db09

