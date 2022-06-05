import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import millify from 'millify';

import { Avatar, Card, Col, Row, Typography } from 'antd';

// Data from API
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Loding } from '../components';

const { Title, Paragraph } = Typography;

const Criptocurrencies = ({ smplified }) => {
  const count = smplified ? 8 : 100;
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
          <Col key={currency.uuid} xs={24} md={6}>
            <NavLink to={`/cripto/${currency.uuid}`}>
              <Card
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
              >
                <Title>{millify(currency.price)}</Title>
                <Paragraph>Rank: {currency.rank}</Paragraph>
                <Paragraph>Change: {millify(currency.change)}</Paragraph>
                <Paragraph>Market Cap: {millify(currency.marketCap)}</Paragraph>
              </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Criptocurrencies;
