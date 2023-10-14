import Image from "next/image";
import Images from "@/public/images";

interface Props {
  contentData: {
    id: string;
    title: string;
    content?: string;
    image: any;
  };
}

const ProductContent = ({ contentData }: Props) => {
  return (
    <div className="bg-white hover:shadow-2xl h-full cursor-pointer">
      <div className="p-8">
        <div className="w-full flex items-center">
          <Image src={contentData.image} alt="" className="w-full" />
        </div>
        <div className="mt-8">
          <div className="font-bold text-center xl:text-lg">
            {contentData.title}
          </div>
          {contentData.content && (
            <div className="text-center text-grayText text-xs mt-4">
              {contentData.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
