import { useState } from "react";

import { useDispatch } from "react-redux";
import { createGoal } from "../features/goal/goalSlice";

// Import Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Add Goal
      </Button>
    </Form>
  );
};

export default GoalForm;
