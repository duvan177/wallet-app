'use client';
import React from 'react';
import { Button, Card, Input, Typography, Form, Flex } from 'antd';
import { useWallet } from '@/hooks/useWallet';
import { ButtonBack } from '@/components/ButtonBack';
import { cardStyle } from '@/constants/cardStyle';
type FormValues = {
  token: string;
};

export default function LoadWallet() {
  const [form] = Form.useForm();
  const { confirmPayment , loadingService  } = useWallet();
  const onFinish = async (data: FormValues) => await confirmPayment(data);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card hoverable style={cardStyle}>
        <Flex gap="middle" align="start" vertical>
          <ButtonBack />
        </Flex>
        <Flex gap="middle" align="center" vertical>
          <Typography.Title level={3}>Confirmar Pago</Typography.Title>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Codigo de confirmación"
              name="token"
              rules={[{ required: true, message: "Codigo de confirmación" }]}
            >
              <Input.OTP length={6} />
            </Form.Item>

            <Form.Item>
              <Button loading={loadingService} type="primary" htmlType="submit">
                Confirmar
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Card>
    </div>
  );
}
