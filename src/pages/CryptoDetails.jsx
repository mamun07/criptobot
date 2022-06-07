import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';

const CriptoDetails = () => {
  const { coinId } = useParams();

  return (
    <Row>
      <Col xs={24}>
        <div>UUID = {coinId} </div>
      </Col>
    </Row>
  );
};

export default CriptoDetails;
