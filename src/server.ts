import express from 'express';
import './lib/database/connection.js';
import userRoutes from '../src/modules/user/route.js';
import authRoutes from './modules/auth/route.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});