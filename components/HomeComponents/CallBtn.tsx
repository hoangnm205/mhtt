"use client";

import { CustomerServiceOutlined, PhoneOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const CallBtn = () => {
  return (
    <FloatButton
      shape="circle"
      type="primary"
      icon={<PhoneOutlined />}
      onClick={() => window.open("tel:0912165811", "_self")}
    />
  );
};

export default CallBtn;
