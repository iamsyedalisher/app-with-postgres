
const { create } = require('../models/task');
const task = require('../task.controller');
var taskrouter = require("express").Router();

taskrouter.post("/create", task.createtask);

taskrouter.get("/", task.findAll);

taskrouter.get("/published", task.findAllPublished);

taskrouter.get("/:id", task.findOne);

taskrouter.put("/:id", task.update);

taskrouter.delete("/:id", task.delete);

taskrouter.delete("/", task.deleteAll);

module.exports = taskrouter