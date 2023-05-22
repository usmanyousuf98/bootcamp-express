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
  console.log("newRecipenewRecipe", recipes.length);

  recipe.id = recipes.length + 1; // Not a robust incrementor mechanism; don't use in production!
  recipes.push(recipe);

  const newRecipe = new activitySchema({
    id: recipe.id,
    name: recipe.name,
    description: recipe.description,

    duration: Date.now(),
    date: Date(),
  });
  await newRecipe.save(); // fs.writeFile(recipesFilePath, JSON.stringify(recipes));

  return recipe;
};

const update = async (updated) => {
  // const recipes = await getAll();

  //updated.id = parseInt(id);

  //   const updatedRecipes = recipes.map((recipe) => {
  //     return recipe.id === parseInt(id) ? updated : recipe;

  //   });
  const filter = { id: updated.id };
  await activitySchema.findOneAndUpdate(filter, updated); //fs.writeFile(recipesFilePath, JSON.stringify(updatedRecipes));

  return updated;
};

const remove = async (id) => {
  // const recipes = await getAll();
  // const newRecipes = recipes
  //   .map((recipe) => {
  //     return recipe.id === parseInt(id) ? null : recipe;
  //   })
  //   .filter((recipe) => recipe !== null);

  await usersSchema.deleteOne({ id }); //fs.writeFile(recipesFilePath, JSON.stringify(newRecipes));
};

module.exports = {
  getAll,
  get,
  save,
  update,
  remove,
};
