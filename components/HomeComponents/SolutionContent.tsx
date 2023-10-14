"use client";

import { useRouter } from "next/navigation";
import { DoubleRightOutlined } from "@ant-design/icons";

interface Props {
  bgColor: string;
  title: string;
  content: string;
  moreUrl: string;
}

const SolutionContent = (props: Props) => {
  const router = useRouter();
  const { bgColor, title, content, moreUrl } = props;
  return (
    <div className={`${bgColor} px-2.5 py-4 xl:py-10`}>
      <div className="w-full h-full relative">
        <div className="absolute left-0 top-0 font-bold xl:text-lg text-[#8D3032]">
          {title}
        </div>
        <div className="absolute inset-0 flex items-center font-bold text-white text-lg xl:text-2xl">
          {content}
        </div>
        <div
          className={`absolute left-0 bottom-0 font-bold xl:text-lg flex border-x-0 border-t-0 border-b border-solid border-black cursor-pointer`}
          onClick={() => router.push(moreUrl)}
        >
          <span className="hover:text-red-500">Tìm hiểu thêm</span>
          <DoubleRightOutlined className="ml-6 text-red-500 xl:text-base" />
        </div>
      </div>
    </div>
  );
};

export default SolutionContent;
