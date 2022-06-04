import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const News = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} md={4}>
        <Card title="Total 24h Volume">
          <Typography.Paragraph>Latest News</Typography.Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default News;
