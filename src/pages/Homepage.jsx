import React from 'react';
import millify from 'millify';
import { Card, Col, Row, Typography } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { NavLink } from 'react-router-dom';

import { Criptocurrencies, News } from './index';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data);
  if (isFetching) return 'Loding...';

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Typography.Title> Welcome to Crypto Bot</Typography.Title>
        </Col>
        <Col xs={24} md={5}>
          <Card title="Total Cryptocurrencies">
            <Typography.Title>{globalStats.total}</Typography.Title>
          </Card>
        </Col>
        <Col xs={24} md={5}>
          <Card title="Total Exchanges">
            <Typography.Title>
              {millify(globalStats.totalExchanges)}
            </Typography.Title>
          </Card>
        </Col>
        <Col xs={24} md={5}>
          <Card title="Total MarketCap">
            <Typography.Title>
              {millify(globalStats.totalMarketCap)}
            </Typography.Title>
          </Card>
        </Col>
        <Col xs={24} md={5}>
          <Card title="Total Markets">
            <Typography.Title>
              {millify(globalStats.totalMarkets)}
            </Typography.Title>
          </Card>
        </Col>
        <Col xs={24} md={4}>
          <Card title="Total 24h Volume">
            <Typography.Title>
              {millify(globalStats.total24hVolume)}
            </Typography.Title>
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Top 10 Cryptocurrencies"
            extra={<NavLink to="/">Show More</NavLink>}
          >
            <Criptocurrencies smplified />
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Latest Cryptocurrencies News"
            extra={<NavLink to="/">Show More</NavLink>}
          >
            <News smplified />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
