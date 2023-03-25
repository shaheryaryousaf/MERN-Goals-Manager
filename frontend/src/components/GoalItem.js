import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goal/goalSlice";

// Import Bootstrap
import Button from "react-bootstrap/PlaceholderButton";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal_item">
      <div className="d-flex justify-content-between align-items-center">
        <h4>{goal.text}</h4>
        <span className="deleteBtn" onClick={() => dispatch(deleteGoal(goal._id))}>
          Delete
        </span>
      </div>
      <p className="text-secondary mb-0">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </p>
    </div>
  );
};

export default GoalItem;
