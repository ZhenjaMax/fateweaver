import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import authRoutes from './auth/auth.routes';
import './auth/passport'; // Initialize passport strategy

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(helmet()); // Secure HTTP headers
app.use(morgan('dev')); // Logger
app.use(express.json()); // Parse JSON bodies
app.use(passport.initialize()); // Initialize Passport

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Fateweaver API' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
