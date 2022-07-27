import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'build/')));

app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(5000, ()=>{
  console.log('server started')
})