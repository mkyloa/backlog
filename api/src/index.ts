import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, W2orld!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});