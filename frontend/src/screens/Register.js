import { useState, useEffect } from "react";

// Import Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Import Link
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Row className="auth_form">
      <Col md={5} className="m-auto">
        <Card>
          <Card.Body className="p-4">
            <h2 className="mb-3">Register Here</h2>
            <p className="mb-3">Please create an account</p>
            <Form onSubmit={onSubmit} className="mb-4">
              <Form.Group className="mb-3">
                <Form.Control
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter your Name"
                />
              </Form.Group>
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
              <Form.Group className="mb-3">
                <Form.Control
                  name="password2"
                  type="password"
                  value={password2}
                  onChange={(e) => onChange(e)}
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
            <p className="text-center mb-0 auth_link">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
