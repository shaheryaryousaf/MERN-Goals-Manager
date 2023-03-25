import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getGoals, reset } from "../features/goal/goalSlice";
import { useNavigate } from "react-router-dom";

import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    // This function will clear the goals state if user leaves the dashboard and goes to another page
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      <h1>Welcome {user && user.name}</h1>
      <p>Welcome to your Goals Dashboard</p>
      <Row>
        <Col md={5}>
          <GoalForm />
        </Col>
        <Col md={7}>
          {goals.map((goal, index) => {
            return <GoalItem key={index} goal={goal} />;
          })}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
