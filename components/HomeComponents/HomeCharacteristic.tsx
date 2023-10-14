import Image from "next/image";

interface Props {
  type: string;
  image: any;
  subTitle: string;
  title?: string;
  details: string[];
}

const HomeCharacteristic = (props: Props) => {
  const { type, image, subTitle, title, details } = props;
  return (
    <div className="md:grid grid-cols-2 gap-16 px-6">
      {type === "left" && (
        <Image src={image} alt="img" className="rounded-2xl" />
      )}
      <div className="md:hidden">
        {type === "right" && (
          <Image src={image} alt="img" className="rounded-2xl" />
        )}
      </div>
      <div className="mt-6 md:mt-0">
        <div className="text-[#8D3032] text-lg xl:text-2xl font-bold">
          {subTitle}
        </div>
        {title && (
          <div className="text-[#8D3032] text-lg xl:text-2xl font-bold uppercase mt-3">
            {title}
          </div>
        )}
        <div className="w-20 h-1 bg-[#3d3938] my-5"></div>
        {details.map((item, index) => (
          <div
            key={item}
            className={`text-[#7c8d93] ${index > 0 ? "mt-1" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="hidden md:inline-block">
        {type === "right" && (
          <Image src={image} alt="img" className="rounded-2xl" />
        )}
      </div>
    </div>
  );
};

export default HomeCharacteristic;
