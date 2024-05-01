import express from "express";
import {addCourse, getAll} from "./src/coursesModule.js";

const app = express();
const port = 3000;

app.use(express.json())

app.use("/addnewcourse", express.static("public"))

app.post("/add", async (req, res) => {
  const {name, count, startYear} = req.body
  if (name === undefined || count === undefined || startYear === undefined) {
    return res.status(400).send("missing data")
  }
  const course = await addCourse(name, count, startYear)
  if (course === null) {
    return res.status(400).send(`course (${name}) already exists`)
  }
  return res.send(course)
})

app.get("/all", async (req, res) => {
  return res.send(await getAll())
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
});
