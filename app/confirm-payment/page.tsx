'use client';
import React, { useState } from 'react';
import { Button, Card, Input, Typography, Form, Row, Col, InputNumber, Flex } from 'antd';
import Image from 'next/image';
import * as yup from 'yup';
// import api from '../services/api';
import walletR from '@/public/walletR.jpg';



const cardStyle = {
  maxWidth: 720,
  width: '100%',
  margin: '0 auto',
};

export default function LoadWallet() {
  const [message, setMessage] = useState('');
  const [form] = Form.useForm();

  const onFinish = (data:any) => {
    console.log(data);
    // Lógica para enviar los datos al backend
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px", // Añadimos padding para pantallas pequeñas
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card hoverable style={cardStyle} bodyStyle={{ padding: 25 }}>
        <Flex  gap="middle" align="center" vertical  >
            <Typography.Title level={3}>Confirmar Pago</Typography.Title>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Codigo de confirmación"
                name="token"
                rules={[
                  { required: true, message: "Codigo de confirmación" },
                ]}
              >
                <Input.OTP length={6}  />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Confirmar
                </Button>
              </Form.Item>
            </Form>
        </Flex>
      </Card>
    </div>
  );
}
