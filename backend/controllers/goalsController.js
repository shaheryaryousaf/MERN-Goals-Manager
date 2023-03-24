// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.json({ message: "Get Goals" });
};

// @desc    Create Goal
// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
  res.json({ message: "Create Goal" });
};

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
};

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {getGoals, createGoal, updateGoal, deleteGoal}