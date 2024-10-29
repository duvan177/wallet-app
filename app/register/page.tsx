'use client';
import React, { useState } from 'react';
import { Button, Card, Input, Typography, Form, Row, Col } from 'antd';
import Image from 'next/image';
import walletR from '@/public/walletR.jpg';
import { cardStyle } from '@/constants/cardStyle';

export default function Register() {
  const [form] = Form.useForm();

  const onFinish = (data:any) => {
    console.log(data);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card hoverable style={cardStyle} >
        <Row gutter={0} align="middle">
          <Col
            
            xs={24}
            sm={24}
            md={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Image
              src={walletR}
              alt="wallet"
              layout="responsive"
              objectFit="cover"
              width={359}
              height={400}
            />
          </Col>
          <Col xs={24} sm={24} md={12} style={{ padding: 25 }}>
            <Typography.Title level={3}>Registro de usuario</Typography.Title>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Documento"
                name="document"
                rules={[{ required: true, message: 'El documento es obligatorio' }]}
              >
                <Input placeholder="Número documento" />
              </Form.Item>
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'El nombre es obligatorio' }]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'El email es obligatorio' },
                  { type: 'email', message: 'Email inválido' },
                ]}
              >
                <Input placeholder="Correo" />
              </Form.Item>
              <Form.Item
                label="Celular"
                name="phone"
                rules={[{ required: true, message: 'El celular es obligatorio' }]}
              >
                <Input placeholder="Celular" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Registrar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
