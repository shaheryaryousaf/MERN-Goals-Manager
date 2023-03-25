import { useState, useEffect } from "react";

// Import Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Import Link
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
    navigate("/");
  };

  return (
    <Row className="auth_form">
      <Col md={5} className="m-auto">
        <Card>
          <Card.Body className="p-4">
            <h2 className="mb-3">Login Here</h2>
            <p className="mb-3">Please login to access account</p>
            <Form onSubmit={onSubmit} className="mb-4">
              <Form.Group className="mb-3">
                <Form.Control
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter your Email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
            <p className="text-center mb-0 auth_link">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
