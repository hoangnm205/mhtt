import Image from "next/image";

interface Props {
  image: any;
}

const PartnerItem = ({ image }: Props) => {
  return (
    <div className="p-4 hover:shadow-2xl rounded-md">
      <Image src={image} alt="" />
    </div>
  );
};

export default PartnerItem;
