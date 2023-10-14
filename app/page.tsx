import LayoutFooter from "@/components/LayoutFooter";
import LayoutHeader from "@/components/LayoutHeader";
import { Carousel } from "antd";
import Image from "next/image";
import LayoutContainer from "@/components/LayoutContainer";
import SolutionContent from "@/components/HomeComponents/SolutionContent";
import Images from "@/public/images";
import ProductContent from "@/components/HomeComponents/ProductContent";
import StatisticContent from "@/components/HomeComponents/StatisticContent";
import HomeCharacteristic from "@/components/HomeComponents/HomeCharacteristic";
import PartnerItem from "@/components/HomeComponents/ParnerItem";

const carouselContent = [
  {
    id: "carousel-1",
    content: (
      <div key="carousel-1" className="xl:h-[610px] 2xl:h-[700px] w-full">
        <Image
          src={Images.img_carousel_1}
          alt="img-1"
          className="w-full h-full"
        />
      </div>
    ),
  },
  {
    id: "carousel-2",
    content: (
      <div key="carousel-2" className="xl:h-[610px] 2xl:h-[700px] w-full">
        <Image
          src={Images.img_carousel_2}
          alt="img-2"
          className="w-full h-full"
        />
      </div>
    ),
  },
  {
    id: "carousel-3",
    content: (
      <div key="carousel-3" className="xl:h-[610px] 2xl:h-[700px] w-full">
        <Image
          src={Images.img_carousel_3}
          alt="img-3"
          className="w-full h-full"
        />
      </div>
    ),
  },
];

const productContent = [
  {
    id: "product-1",
    title: "Màn hình tương tác thông minh Esing Unso - Dòng Z",
    image: Images.img_product_1,
    // content: "Dòng sản phẩm dành cho giáo dục mầm non và giáo dục phổ thông",
  },
  {
    id: "product-2",
    title: "Màn hình tương tác thông minh Esing Unso - Dòng Q",
    image: Images.img_product_2,
    // content:
    //   "4K HD/ Bảng trắng thông minh/ Phản chiếu màn hình không dây/ Hệ thống kép/ Chế độ xem chính xác",
  },
  {
    id: "product-3",
    title: "Màn hình tương tác thông minh Esing Unso - Dòng T",
    image: Images.img_product_3,
    // content:
    //   "Combine tradional and interactive teaching perfectly to improve education environment.",
  },
  {
    id: "product-4",
    title: "Màn hình tương tác thông minh Esing Unso - Dòng ST",
    image: Images.img_product_4,
    // content: "Make more possibilities to your interactive display.",
  },
  {
    id: "product-5",
    title: "Màn hình tương tác thông minh Esing Unso - Dòng Y/SY",
    image: Images.img_product_5,
    // content: "Make more possibilities to your interactive display.",
  },
  {
    id: "product-6",
    title: "Màn hình tương tác thông minh Esing Unso - Dòng D",
    image: Images.img_product_6,
    // content: "Make more possibilities to your interactive display.",
  },
  {
    id: "product-7",
    title:
      "Màn hình tương tác thông minh Esing Unso - Dòng màn hình phẳng tương tác điện dung",
    image: Images.img_product_7,
    // content: "Make more possibilities to your interactive display.",
  },
];

const statisticContent: any[] = [
  // {
  //   id: "statistic-1",
  //   number: 50000,
  //   description:
  //     "50000㎡ production area to promise fast delivery and high quality",
  // },
  // {
  //   id: "statistic-2",
  //   number: 15,
  //   description: "15 years in LED panel fields optimize supply chain",
  // },
  // {
  //   id: "statistic-3",
  //   number: 200,
  //   description: "200 team members provide professional support",
  // },
  // {
  //   id: "statistic-4",
  //   number: 1500,
  //   description: "1500+ finished projects, experienced in display field",
  // },
];

const characteristicContent = [
  {
    id: "charac-1",
    type: "left",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title: "DÒNG Z",
    details: [
      "Dành cho giáo dục mầm non và giáo dục phổ thông",
      "Quản lý giảng dạy thú vị, hiệu quả và chất lượng",
      "Màn hình 4K, bảng trắng thông minh với nhiều chức năng phong phú",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_1,
  },
  {
    id: "charac-2",
    type: "right",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title: "Dòng Q",
    details: [
      "4K HD",
      "Bảng trắng thông minh",
      "Phản chiếu màn hình không dây",
      "Hệ thống kép",
      "Chế độ xem chính xác",
      "Chia sẻ mã QR Hội nghị từ xa",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_2,
  },
  {
    id: "charac-3",
    type: "left",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title: "Dòng T",
    details: [
      "4K HD",
      "Bảng trắng thông minh",
      "Phản chiếu màn hình không dây",
      "Hệ thống kép",
      "Cảm ứng chính xác",
      "Hội nghị từ xa",
      "Chia sẻ mã QR",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_3,
  },
  {
    id: "charac-4",
    type: "right",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title: "Dòng ST",
    details: [
      "Tích hợp camera 4K 1200W",
      "Phản chiếu màn hình không dây",
      "Hệ thống kép",
      "Hội nghị từ xa",
      "Chia sẻ mã QR",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_4,
  },
  {
    id: "charac-5",
    type: "left",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title: "Dòng Y/SY",
    details: [
      "Tích hợp camera 4K 1200W",
      "Bảng trắng thông minh",
      "Phản chiếu màn hình không dây",
      "Hệ thống kép",
      "Cảm ứng chính xác",
      "Hội nghị từ xa",
      "Chia sẻ mã QR",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_5,
  },
  {
    id: "charac-6",
    type: "right",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title: "Dòng D",
    details: [
      "4K HD",
      "Bảng trắng thông minh",
      "Phản chiếu màn hình không dây",
      "Hệ thống kép",
      "Cảm ứng chính xác",
      "Hội nghị từ xa",
      "Chia sẻ mã QR",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_6,
  },
  {
    id: "charac-7",
    type: "left",
    subTitle: "Màn hình tương tác thông minh Esing Unso",
    title:
      "Dòng màn hình phẳng tương tác điện dung - màn hình phẳng tương tác IN-CELL",
    details: [
      "Tương tác thông minh, viết mượt mà trong IN-CELL",
      "Bút, 3 cổng USB 3.0 mặt trước, Type-C đầy đủ tính năng",
      "(Mẫu T982 có cảm biến ánh sáng thông minh, khôi phục lỗ kim) ",
      "Đặt thẻ quẹt NFC làm khởi động mặc định",
      ". Phía trước 8 nhóm nút: Bật/tắt 3 trong 1, Menu, Khóa trẻ em, Bảo vệ mắt, Ghi màn hình, Âm thanh +/-, Ảnh chụp màn hình.",
      "Size 55' - 65' - 75' - 86' - 98'",
      "Giá thành: vui lòng liên hệ CSKH",
    ],
    image: Images.img_product_7,
  },
];

const partnerContent: any[] = [
  // {
  //   id: "partner-1",
  //   image: Images.img_partner_1,
  // },
  // {
  //   id: "partner-2",
  //   image: Images.img_partner_2,
  // },
  // {
  //   id: "partner-3",
  //   image: Images.img_partner_3,
  // },
  // {
  //   id: "partner-4",
  //   image: Images.img_partner_4,
  // },
  // {
  //   id: "partner-5",
  //   image: Images.img_partner_5,
  // },
  // {
  //   id: "partner-6",
  //   image: Images.img_partner_6,
  // },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      <div
        className="flex-1 flex items-center bg-gray-100"
      >
        <div className="uppercase ml-10 p-5 text-xl font-bold text-center flex-1 text-[#8D3032]">
          SẢN PHẨM ĐƯỢC HỢP TÁC NGHIÊN CỨU – PHÁT TRIỂN BỞI <br /> EDUSING VIỆT
          NAM VÀ HỌC VIỆN KHKTQS BỘ QUỐC PHÒNG VIỆT NAM
        </div>
      </div>
      <div className="flex-1">
        <Carousel autoplay>
          {carouselContent.map((item) => item.content)}
        </Carousel>
        <LayoutContainer>
          <div className="py-8 xl:py-16 lg:grid grid-cols-2">
            <div className="grid grid-cols-2">
              <SolutionContent
                bgColor="bg-[#1caca9]"
                title="Chương trình giáo dục"
                content="Khám phá các màn hình tương tác phổ biến nhất"
                moreUrl="/solution/education"
              />
              <div>
                <Image
                  src={Images.img_solution_education}
                  alt="sol_1"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <SolutionContent
                bgColor="bg-[#148dff]"
                title="Kế hoạch hội họp"
                content="Công nghệ cộng tác và kỹ thuật số nâng cao"
                moreUrl="/solution/conference"
              />
              <div>
                <Image
                  src={Images.img_solution_conference}
                  alt="sol_2"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </LayoutContainer>
        <div className="bg-gray-100 py-24 px-10 md:grid md:grid-cols-2 xl:grid-cols-4 gap-12">
          {productContent.map((item, index) => (
            <div className={index > 0 ? "mt-8 md:mt-0" : ""} key={item.id}>
              <ProductContent contentData={item} />
            </div>
          ))}
        </div>
        <Image src={Images.img_brand_factory} alt="" className="w-full" />
        <LayoutContainer>
          <div className="py-8 md:grid md:grid-cols-2 xl:grid-cols-4 gap-16">
            {statisticContent.map((item) => (
              <div key={item.id}>
                <StatisticContent
                  number={item.number}
                  description={item.description}
                />
              </div>
            ))}
          </div>
          <div>
            {characteristicContent.map((item, index) => (
              <div key={item.id} className={`${index > 0 ? "mt-16" : ""}`}>
                <HomeCharacteristic
                  type={item.type}
                  image={item.image}
                  subTitle={item.subTitle}
                  title={item.title}
                  details={item.details}
                />
              </div>
            ))}
          </div>
          <div className="my-8 xl:my-16">
            <video
              style={{ width: "100%" }}
              src="/videos/sample.mp4"
              controls
            />
          </div>
          <div className="mb-16 py-8">
            {/* <div className="text-4xl font-bold text-center">Partners</div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-8 mt-6">
              {partnerContent.map((item) => (
                <div key={item.id}>
                  <PartnerItem image={item.image} />
                </div>
              ))}
            </div> */}
          </div>
        </LayoutContainer>
      </div>
      <LayoutFooter />
    </div>
  );
}
