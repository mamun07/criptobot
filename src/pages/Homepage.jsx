import React from 'react';
import { NavLink } from 'react-router-dom';
import millify from 'millify';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

// Data from API
import { useGetCryptosQuery } from '../services/cryptoApi';

import { Criptocurrencies, News } from './index';
import { Loding } from '../components';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(8);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loding />;

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title> Welcome to Crypto Bot</Typography.Title>
        </Col>
        <Col xs={24} md={5}>
          <Card hoverable>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
              precision={0}
              valueStyle={{ color: '#336d00' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} md={5}>
          <Card hoverable>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} md={5}>
          <Card hoverable>
            <Statistic
              title="Total MarketCap"
              value={millify(globalStats.totalMarketCap)}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} md={5}>
          <Card hoverable>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} md={4}>
          <Card hoverable>
            <Statistic
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Top 10 Cryptocurrencies"
            extra={<NavLink to="/criptocurrencies">Show More</NavLink>}
          >
            <Criptocurrencies smplified />
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Latest Cryptocurrencies News"
            extra={<NavLink to="/news">Show More</NavLink>}
          >
            <News smplified />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
