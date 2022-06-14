const express = require("express");
const Task = require("../models/task");
const auth = require('../middleware/auth');
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/tasks", auth, async (req, res) => {
  try {
    const match = {}
    const sort = {}

     if (req.query.completed) {
      match.completed = req.query.completed === 'true';
     }

     if(req.query.sortBy) {
      const parts = req.query.sortBy.split('_');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
     }

    await req.user.populate({
      path: 'tasks',
      match,
      options: {
        limit: +req.query.limit,
        skip: +req.query.skip,
        sort
      }
    });
    res.send(req.user.tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.find({ owner: req.user._id });
    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowed = ["description", "completed"];
  const isValid = updates.every((update) => allowed.includes(update));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid Updates!" });
  }

  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update)=> task[update] = req.body[update]);
    await task.save();

    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

    if (!task) {
      return res.send(404).send();
    }

    res.send(task);
  } catch (error) {
    res.status(500), send();
  }
});

module.exports = router;
