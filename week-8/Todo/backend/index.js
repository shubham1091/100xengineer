import express from "express";
import { createTodo, updateTodo } from "./types";
import { Todo } from "./db";
import cors from "cors";

const corsOptions = {
  origin: process.env.FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};


const app = express();
app.use(express.json(), cors());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World 👋");
});

/**
 * Route to create a new todo item.
 *
 * @route POST /todo
 */
app.post("/todo", async (req, res) => {
  const { success, data } = createTodo.safeParse(req.body);

  if (!success) {
    res.status(400).send(data);
    return;
  }

  try {
    const task = await Todo.create({
      title: data.title,
      description: data.description,
      completed: false,
    });

    res.json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * Route to mark a todo item as completed.
 *
 * @route PUT /completed
 */
app.put("/completed", async (req, res) => {
  const { success, data } = updateTodo.safeParse(req.body);
  if (!success) {
    res.status(400).send(data);
    return;
  }

  try {
    const task = await Todo.findById(data.id);
    if (!task) {
      res.status(404).json({ success: false, error: "Todo not found" });
      return;
    }
    task.completed = true;

    await task.save();

    console.log(task);

    res.json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * Route to get all todo items.
 *
 * @route GET /todos
 */
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
