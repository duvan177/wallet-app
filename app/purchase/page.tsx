'use client';
import React from 'react';
import { Button, Card, Input, Typography, Form, Row, Col, InputNumber , Space, Divider } from 'antd';
import Image from 'next/image';
import walletBg from "@/public/wallet01.jpg";
import { useRouter } from 'next/navigation';
import { ButtonBack } from '@/components/ButtonBack';
import { useWallet } from '@/hooks/useWallet';
import { useSessionId } from '@/store/sessionId';
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
export default function Purchase() {
  const router = useRouter();
  const [form] = Form.useForm();
  const { purchaseWallet, loadingService } = useWallet();
  const sessionId = useSessionId((state) => state.sessionId);

  const onFinish = async (data: FormValues) => await purchaseWallet(data);

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
            <Col xs={24} sm={24} md={12} style={{ padding: 20 }}>
              <ButtonBack />

              <Space />
              <Typography.Title level={3}>
                Pagar compra enviada
              </Typography.Title>
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
                  {
                    !sessionId ? ( <Button
                    loading={loadingService}
                    type="primary"
                    htmlType="submit"
                  
                  >
                    Pagar
                  </Button>) : <> </>
                  }
                 
                </Form.Item>
              </Form>
              <Divider />
              {sessionId && (
                <div >
                  <p>
                    * Revisa tu correo electrónico para obtener el token de
                    confirmación. 
                  </p>
                  <Button
                    style={{
                      background:"#c3ff4e"
                    }}
                    onClick={() => router.push("/confirm-payment")}
                  >
                  Ir a confirmar Pago
                  </Button>
                </div>
              )}
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
