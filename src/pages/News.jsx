import React, { useState } from 'react';
import moment from 'moment';
import { Avatar, Card, Col, List, Row, Select, Typography } from 'antd';
import { Loding } from '../components';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title, Paragraph } = Typography;
const { Option } = Select;
const DemoImg = '/demo.png';

const News = ({ smplified }) => {
  const newsCount = smplified ? 6 : 50;
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: newsCount,
  });

  if (!cryptoNews?.value) return <Loding />;

  return (
    <>
      <Row gutter={[16, 16]}>
        {!smplified && (
          <Col xs={24} className="cryptocurrency-search">
            <Select
              showSearch
              placeholder="Select a Crypto"
              defaultValue="Cryptocurrency"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexof(input.toLowerCase()) >= 0
              }
              style={{
                width: 250,
              }}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin, i) => (
                <Option key={i} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
      </Row>
      <Row gutter={[16, 16]}>
        {cryptoNews.value.map((news, i) => (
          <Col key={i} xs={24} lg={12}>
            <a href={news.url} target="_blank" rel="noreferrer">
              <Card hoverable className="news-list-card">
                <List.Item>
                  <div className="entry-thumb">
                    <img
                      src={news?.image?.thumbnail?.contentUrl || DemoImg}
                      alt={news.name}
                    />
                  </div>
                  <div className="card-content">
                    <Title level={5}>{news.name}</Title>
                    <Paragraph>
                      {news.description > 100
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                    </Paragraph>
                    <div className="card-content-info">
                      <div className="provider-details">
                        <Avatar
                          src={
                            news?.provider[0]?.image?.thumbnail?.contentUrl ||
                            DemoImg
                          }
                        />
                        <Text style={{ marginLeft: '10px' }}>
                          {news.provider[0]?.name}
                        </Text>
                      </div>

                      <Text style={{ marginLeft: '10px' }}>
                        {moment(news.datePublished).startOf('ss').fromNow()}
                      </Text>
                    </div>
                  </div>
                </List.Item>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
