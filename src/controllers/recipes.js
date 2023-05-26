const activitySchema = require("../../db/schemas/activitySchema");
const service = require("../services/recipes");

const recipeExists = async (req, res, next) => {
  const { id } = req.body;
  const recipe = await service.get(id);

  if (recipe === undefined) {
    const err = new Error("Recipe not found");
    err.statusCode = 404;
    next(err);
  } else {
    res.locals.recipe = recipe;
    next();
  }
};

const getAll = async (req, res, next) => {
  try {
    res.json({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    res.json({ data: res.locals.recipe });
  } catch (error) {
    next(error);
  }
};

const save = async (req, res, next) => {
  try {
    const { name, description, activityType, duration, date } = req.body;

    const newRecipe = {
      name,
      description,
      activityType,
      duration,
      date,
    };

    res.status(201).json({ data: await service.save(newRecipe) });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id, name, description, activityType, duration, date } = req.body;

    const updated = await service.update({
      id,
      name,
      description,
      activityType,
      duration,
      date,
    });

    res.json({ data: updated });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log("api id", req.body);
    await service.remove(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  get: [recipeExists, get],
  save,
  update: [update],
  remove: [remove],
};
