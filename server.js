import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(path.resolve(__dirname, '../build/')));

app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

app.listen(5000, ()=>{
  console.log('server started')
})