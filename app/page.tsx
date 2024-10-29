"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  Form,
  Row,
  Col,
  InputNumber,
  Flex
} from "antd";
import { VerticalAlignBottomOutlined  , VerticalAlignTopOutlined} from "@ant-design/icons";
import Image from "next/image";
import * as yup from "yup";
// import api from '../services/api';
import walletR from "@/public/walletR.jpg";

const cardStyle = {
  maxWidth: 720,
  width: "100%",
  margin: "0 auto",
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  const onFinish = (data: any) => {
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
        <Flex justify="space-between">
          <Flex
            vertical
            align="center"
            justify="space-between"
            style={{ padding: 32 , width:350 }}
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
 
                <Form.Item>
                  <Button 
                  style={{
                    width:140,
                    background: '#000000'
                  }}
                  type="primary" htmlType="submit">
                    Consultar
                  </Button>
                </Form.Item>
              </Form>
       
          </Flex>

          <Flex
            vertical
            align="center"
            justify="center"
            style={{ padding: 10 , background: "#c3ff4e" , width:'90%'}}
          >
            <Typography.Title level={3}>Saldo actual: <span style={{color:'gray'}}> ######</span> </Typography.Title>
               <Flex justify="space-between" gap={10} style={{ padding: 32 , width:'100%' }}>
                  <Button style={{
                    width:140,
                    background: '#000000'
                  }} type="primary" 
                  icon={   <VerticalAlignTopOutlined />}  >
                    pagar
                 
                  </Button>
                    <Button
                    style={{
                    width:140,
                       background: '#000000'
                  }}
                  icon={     <VerticalAlignBottomOutlined />}
                    type="primary"   >
                    recarga tu wallet

               
                  </Button>
               </Flex>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}
