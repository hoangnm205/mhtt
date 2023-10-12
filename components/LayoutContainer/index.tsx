import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LayoutContainer = ({ children }: Props) => {
  return <div className="max-w-[1200px] mx-auto h-full">{children}</div>;
};

export default LayoutContainer;
