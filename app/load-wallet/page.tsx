"use client";
import React from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  Form,
  Row,
  Col,
  InputNumber,
} from "antd";
import Image from "next/image";
import walletBg02 from "@/public/walletR.jpg";
import { ButtonBack } from "@/components/ButtonBack";
import { useWallet } from "@/hooks/useWallet";
const gridStyle: React.CSSProperties = {
  padding: "0",
  maxWidth: 720,
  width: "100%",
};

type FormValues = {
  document: string;
  phone: string;
  amount: number;
};

export default function LoadWallet() {
  const [form] = Form.useForm();
  const { loadWalletAmountApi, loadingService } = useWallet();
  const onFinish = async (data: FormValues) => {
    await loadWalletAmountApi(data);
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
      <Card hoverable>
        <Card.Grid style={gridStyle}>
          <Row gutter={0} align="middle">
            <Col xs={24} sm={24} md={12} style={{ padding: 25 }}>
              <Col xs={24} sm={24} md={12} style={{}}>
                <ButtonBack />
              </Col>
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
                  <Button
                    loading={loadingService}
                    type="primary"
                    htmlType="submit"
                  >
                    Recargar
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Image
                src={walletBg02}
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
