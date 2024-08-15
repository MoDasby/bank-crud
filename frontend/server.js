import express from 'express';
import { join } from 'path';
const app = express();

const staticPath = join(process.cwd(), 'dist');
app.use(express.static(staticPath));

app.get('*', function(_, res) {
  const indexPath = join(staticPath, 'index.html');
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});