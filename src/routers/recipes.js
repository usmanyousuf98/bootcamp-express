const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const { getAll, get, save, update, remove } = require("../controllers/recipes");

router
  .route("/")
  // .get(auth.authenticate(), getAll)
  .post(save);
router.route("/").get(getAll);

router
  .route("/:id")
  .get(get)
  // .put(auth.authenticate(), update)
  .delete(auth.authenticate(), remove);

router
  .route("/create")
  .post(save)
  // .get(get)
  //.put(auth.authenticate(), update)
  .delete(remove);

router.route("/update").put(update);
module.exports = router;
