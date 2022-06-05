import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';

const CriptoDetails = () => {
  const { coinId } = useParams();
  const [timePreiod, setTimePreiod] = useState('7d');

  return (
    <Row>
      <Col xs={24}>
        <div>UUID = {coinId} </div>
      </Col>
    </Row>
  );
};

export default CriptoDetails;
