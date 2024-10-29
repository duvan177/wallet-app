'use client';
import React, { useState } from 'react';
import { Button, Card, Input, Typography, Form, Row, Col, InputNumber } from 'antd';
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
      <Card hoverable style={cardStyle} bodyStyle={{ padding: 0 }}>
        <Row gutter={0} align="middle">
          <Col xs={24} sm={24} md={12} style={{ padding: 25 }}>
            <Typography.Title level={3}>Recarga tu wallet</Typography.Title>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Documento"
                name="document"
                rules={[
                  { required: true, message: "El documento es obligatorio" },
                ]}
              >
                <Input placeholder="Número documento" />
              </Form.Item>

              <Form.Item
                label="Celular"
                name="phone"
                rules={[
                  { required: true, message: "El celular es obligatorio" },
                ]}
              >
                <Input placeholder="Celular" />
              </Form.Item>
              <Form.Item
                label="Cantidad"
                name="amount"
                rules={[
                  { required: true, message: "Cantidad a recargar" },
                  {
                    type: "number",
                    max: 1000,
                    message: "Cantidad maxima 1000"
                  }
                ]}
              >
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  placeholder='Cantidad a recargar'
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Recargar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
