import React, { useState } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { Loding } from '../components';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = ({ smplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: smplified ? 6 : 12,
  });

  console.log(cryptoNews);

  if (!cryptoNews?.value) return <Loding />;

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
