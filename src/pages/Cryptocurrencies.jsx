import React, { useState, useEffect } from 'react';
import millify from 'millify';

import { Avatar, Card, Col, Row, Typography } from 'antd';

// Data from API
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Loding } from '../components';

const { Title, Paragraph } = Typography;

const Cryptocurrencies = ({ smplified }) => {
  const count = smplified ? 12 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loding />;

  return (
    <>
      {!smplified && (
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} lg={12}>
            <div className="cryptocurrency-search">
              <input
                type="text"
                placeholder="Search Cryptocurrency"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      )}
      <Row gutter={[16, 16]}>
        {cryptos?.map((currency) => (
          <Col key={currency.uuid} xs={24} md={4}>
            <a
              href={currency.coinrankingUrl}
              alt={currency.name}
              target="_blank"
              rel="noreferrer"
            >
              <Card
                size="small"
                title={currency.name}
                extra={
                  <Avatar
                    src={currency.iconUrl}
                    alt={currency.name}
                    className="crypto-icon"
                    style={{ maxWdth: '100%' }}
                  />
                }
                hoverable
                style={{ background: '#fafafa' }}
              >
                <Title>{millify(currency.price)}</Title>
                <Paragraph>Rank: {currency.rank}</Paragraph>
                <Paragraph>Change: {millify(currency.change)}</Paragraph>
                <Paragraph>Market Cap: {millify(currency.marketCap)}</Paragraph>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
