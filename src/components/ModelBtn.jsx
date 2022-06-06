import React, { useState } from 'react';
import { PlusOutlined, SendOutlined } from '@ant-design/icons';

import { Button, Modal } from 'antd';

const ModelBtn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleRecive = () => {
    alert('Wallet Receive');
    setIsModalVisible(false);
  };
  const handleSend = () => {
    alert('Wallet Send');
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        shape="default"
        icon={<PlusOutlined />}
        size="large"
        onClick={showModal}
      >
        New Translation
      </Button>
      <Modal
        title="Cryptocurrency Translation"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleSend} type="default">
            <SendOutlined /> Send
          </Button>,
          <Button onClick={handleRecive} type="primary">
            <PlusOutlined /> Receive
          </Button>,
        ]}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          quod, iste exercitationem ipsum hic blanditiis assumenda voluptatum!
          Magni facilis cum deleniti asperiores soluta sapiente optio ullam
          minus eius architecto? Perspiciatis!
        </p>
      </Modal>
    </>
  );
};

export default ModelBtn;
