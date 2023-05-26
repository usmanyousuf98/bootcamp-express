const fs = require("fs").promises;
const path = require("path");
const usersSchema = require("../../db/schema.js");
const activitySchema = require("../../db/schemas/activitySchema.js");

console.log("recipes");

const recipesFilePath = path.join(__dirname, "../../db/recipes.json");

const getAll = async () => activitySchema.find(); //JSON.parse(await fs.readFile(recipesFilePath));

const get = async (id) => {
  const recipes = await getAll();
  return recipes.find((recipe) => recipe.id === parseInt(id));
};

const save = async (recipe) => {
  const recipes = await getAll();

  recipe.id = recipes.length + 1; // Not a robust incrementor mechanism; don't use in production!
  recipes.push(recipe);

  const newRecipe = new activitySchema({
    name: recipe.name,
    description: recipe.description,
    activityType: recipe.activityType,
    duration: recipe.duration,
    date: Date(),
  });
  await newRecipe.save(); // fs.writeFile(recipesFilePath, JSON.stringify(recipes));

  return recipe;
};

const update = async (updated) => {
  console.log("updated", updated);
  console.log("updated,id", updated.id);

  const filter = { _id: updated.id };
  await activitySchema.findOneAndUpdate(filter, updated); //fs.writeFile(recipesFilePath, JSON.stringify(updatedRecipes));

  return updated;
};

const remove = async (id) => {
  try {
    await activitySchema.findByIdAndRemove(id); //fs.writeFile(recipesFilePath, JSON.stringify(newRecipes));
  } catch (error) {
    console.log("api errpr", error);
  }
};

module.exports = {
  getAll,
  get,
  save,
  update,
  remove,
};
