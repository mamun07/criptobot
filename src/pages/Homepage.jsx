import React from 'react';
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

const Homepage = () => {
  return (
    <Row>
      <Col span={24}>
        <Typography>
          <Title>Welcome to Home page</Title>
        </Typography>
      </Col>
    </Row>
  );
};

export default Homepage;
