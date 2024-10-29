"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  Form,
  Flex,
  notification,
} from "antd";
import {
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { useWallet } from "@/hooks/useWallet";
import {cardStyle} from '@/constants/cardStyle';
export default function Home() {

  const [form] = Form.useForm();
  const {
    loadingService,
    currentlyValue,
    getCurrentlyValueWallet,
    messageError,
    
  } = useWallet();
    const [api, contextHolder] = notification.useNotification();

  const onFinish = async (data: any) => {

    await getCurrentlyValueWallet(data);
    
  };

  React.useEffect(() => {
    if (messageError) {
      api.error({
        message: "Error",
        description: messageError,
      });
    }
  }
  ,[messageError]);



  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {contextHolder}
      <Card hoverable style={cardStyle} bodyStyle={{ padding: 0 }}>
        <Flex justify="space-between">
          <Flex
            vertical
            align="center"
            justify="space-between"
            style={{ padding: 32, width: 350 }}
          >
            <Typography.Title level={3}>tu wallet</Typography.Title>
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
              <Flex gap={10}>
                <Form.Item>
                  <Button 
                  href="/register"
                  size="middle">
                    Registrarme
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    loading={loadingService}
                    size="middle"
                    type="primary"
                    htmlType="submit"
                  >
                    Consultar
                  </Button>
                </Form.Item>
              </Flex>
            </Form>
          </Flex>

          <Flex
            vertical
            align="center"
            justify="center"
            style={{ padding: 10, background: "#c3ff4e", width: "90%" }}
          >
            <Typography.Title level={3}>
              Saldo actual:{" "}
              <span style={{ color: "gray" }}>
                {currentlyValue == null ? "$ #####" : `$${currentlyValue}`}
              </span>
            </Typography.Title>
            <Flex
              justify="space-between"
              gap={10}
              style={{ padding: 32, width: "100%" }}
            >
              <Button
                style={{
                  width: 160,
                }}
                href="/purchase"
                type="primary"
                icon={<VerticalAlignTopOutlined style={{ fontSize: "24px" }} />}
              >
                Pagar
              </Button>
              <Button
                style={{
                  width: 160,
                }}
                href="/load-wallet"
                icon={
                  <VerticalAlignBottomOutlined style={{ fontSize: "24px" }} />
                }
                type="primary"
              >
                Recarga tu wallet
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}
