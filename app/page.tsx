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
    title: "Interactive Flat Panel",
    image: Images.img_home_product_ir,
    content: "Professional IFPD for Education/Collaboration",
  },
  {
    id: "product-2",
    title: "Commercial Display for E-Sports",
    image: Images.img_home_product_commercial,
    content:
      "Professional high fresh UHD display improve better gaming experiences.",
  },
  {
    id: "product-3",
    title: "LG PCAP IN-CELL Smart Blackboard",
    image: Images.img_home_product_board,
    content:
      "Combine tradional and interactive teaching perfectly to improve education environment.",
  },
  {
    id: "product-4",
    title: "Accessories",
    image: Images.img_home_product_accessories,
    content: "Make more possibilities to your interactive display.",
  },
];

const statisticContent = [
  {
    id: "statistic-1",
    number: 50000,
    description:
      "50000㎡ production area to promise fast delivery and high quality",
  },
  {
    id: "statistic-2",
    number: 15,
    description: "15 years in LED panel fields optimize supply chain",
  },
  {
    id: "statistic-3",
    number: 200,
    description: "200 team members provide professional support",
  },
  {
    id: "statistic-4",
    number: 1500,
    description: "1500+ finished projects, experienced in display field",
  },
];

const characteristicContent = [
  {
    id: "charac-1",
    type: "left",
    subTitle: "0 Bonded IR Interactive Flat Panel",
    title: "THE INTERACTIVE DISPLAY",
    details: [
      "0 bonded design, display vivid",
      "High efficient Android 11.0",
      "Better connectivity with Wi-Fi 6",
    ],
    image: Images.img_home_charac_1,
  },
  {
    id: "charac-2",
    type: "right",
    subTitle: "Education Interactive Panel",
    title: "HIGH EFFICIENT COLLABORATION SOLUTION",
    details: [
      "Eye protection 4K LED panel",
      "3mm/8mm fine writing",
      "Abundant education whiteboard app.",
      "Share to cloud, easy to save",
      "Wireless connection, or 3 in 1 USB-C",
    ],
    image: Images.img_home_charac_2,
  },
  {
    id: "charac-3",
    type: "left",
    subTitle: "LG PCAP IN-CELL Smart Blackboard",
    details: [
      "LG IN-CELL PCAP touch panel",
      "No air-gap vivid display and smooth writing",
      "Chalk or finger writing",
      "NFC control",
    ],
    image: Images.img_home_charac_3,
  },
];

const partnerContent = [
  {
    id: "partner-1",
    image: Images.img_partner_1,
  },
  {
    id: "partner-2",
    image: Images.img_partner_2,
  },
  {
    id: "partner-3",
    image: Images.img_partner_3,
  },
  {
    id: "partner-4",
    image: Images.img_partner_4,
  },
  {
    id: "partner-5",
    image: Images.img_partner_5,
  },
  {
    id: "partner-6",
    image: Images.img_partner_6,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
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
            <div className="text-4xl font-bold text-center">Partners</div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-8 mt-6">
              {partnerContent.map((item) => (
                <div key={item.id}>
                  <PartnerItem image={item.image} />
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </div>
      <LayoutFooter />
    </div>
  );
}
