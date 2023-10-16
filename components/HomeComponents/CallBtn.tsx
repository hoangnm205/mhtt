"use client";

import { CustomerServiceOutlined, PhoneOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const CallBtn = () => {
  return (
    <FloatButton
      shape="circle"
      type="primary"
      icon={<PhoneOutlined />}
      onClick={() => window.open("tel:0986453145", "_self")}
    />
  );
};

export default CallBtn;
