import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col } from "react-bootstrap";
import { decrement, increment, reset } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Counter: {count}</h2>
          <Button
            variant="primary"
            onClick={() => dispatch(increment())}
            className="mx-2"
          >
            Increment
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch(decrement())}
            className="mx-2"
          >
            Decrement
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(reset())}
            className="mx-2"
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
