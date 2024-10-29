import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
type ButtonBackProps = {
  isBack?: boolean;
  to?: string;
};
export function ButtonBack({ isBack = false, to }: ButtonBackProps) {
  const router = useRouter();
    return (
      <Button
        onClick={() => {
          if (isBack) {
            router.back();
          } else {
            router.push(to || "/");
          }
        }}
        type="text"
        icon={<ArrowLeftOutlined />}
      >
        Regresar
      </Button>
    );
}