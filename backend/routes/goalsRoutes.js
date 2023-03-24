const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");

router.route("/").get(getGoals).put(createGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
