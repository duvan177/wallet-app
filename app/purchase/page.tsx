'use client';
import React, { useState } from 'react';
import { Button, Card, Input, Typography, Form, Row, Col, InputNumber, Flex , Space } from 'antd';
import Image from 'next/image';
import * as yup from 'yup';
// import api from '../services/api';
import walletBg from "@/public/wallet01.jpg";
import { useRouter } from 'next/navigation';
import { ButtonBack } from '@/components/ButtonBack';
import walletBg02 from "@/public/walletR.jpg";
const gridStyle: React.CSSProperties = {
  padding: "0",
  maxWidth: 720,
  width: "100%",
};
export default function Purchase() {
  const router = useRouter();
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Card hoverable >
      <Card.Grid style={gridStyle}>
        <Row gutter={0} align="middle">
          <Col xs={24} sm={24} md={12} style={{ padding: 20 }}>
        
              <ButtonBack />
   
        <Space/>
            <Typography.Title level={3}>Pagar compra enviada</Typography.Title>
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
                    message: "Cantidad maxima 1000",
                  },
                ]}
              >
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  placeholder="Cantidad a recargar"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Pagar
                </Button>
              </Form.Item>
            </Form>
            <Typography.Text type="danger">{message}</Typography.Text>
            
            {/* {true && (
              <div>
                <p>
                  Revisa tu correo electrónico para obtener el token de
                  confirmación.
                </p>
                <Button type="primary"  onClick={() => router.push("/confirm-payment")}>
                  Confirmar Pago
                </Button>
              </div>
            )} */}

          </Col>
          <Col xs={24} sm={24} md={12} >
            <Image
              src={walletBg}
              alt="wallet"
              layout="responsive"
              width={500}
              height={500}
            />
            </Col>
        </Row>
        </Card.Grid>
      </Card>
    </div>
  );
}
