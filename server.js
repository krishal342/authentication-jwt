import express from 'express';

import  config  from './config/config.js';
import authRouter from './routes/auth.router.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API route
app.use('/auth', authRouter);
app.use(errorMiddleware);

// Server Listening
app.listen(config.PORT, ()=>{
    console.log(`Server is running on port ${config.PORT}`);
})