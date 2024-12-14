import express from 'express';
import UserRoutes from './Business/user/user.routes';

const app = express();

app.use(express.json());

// Routes Students
app.use('/user', UserRoutes);

export default app;