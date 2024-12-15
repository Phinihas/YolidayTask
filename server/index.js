import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// Routes
app.get('/api/projects', async (req, res, next) => {
  try {
    const data = await readFile(join(process.cwd(), 'data', 'projects.json'), 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});