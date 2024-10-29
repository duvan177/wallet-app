import { Button, ButtonProps } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
export function ButtonBack(props: ButtonProps) {
  const router = useRouter();
    return (
      <Button
        onClick={() => router.push("/")}
        type="text"
        icon={<ArrowLeftOutlined />}
      >
        Regresar
      </Button>
    );
}