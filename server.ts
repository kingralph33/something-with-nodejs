import express, {Express, Request, Response} from "express";
const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! My name is Ralph and I am married and have a daughter and I am married and have a daughte. I love them')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
