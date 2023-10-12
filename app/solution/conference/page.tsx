import LayoutFooter from "@/components/LayoutFooter";
import LayoutHeader from "@/components/LayoutHeader";
import Image from "next/image";
import LayoutContainer from "@/components/LayoutContainer";
import Images from "@/public/images";

const prosPoints: { id: string; title: string; description?: string }[] = [
  {
    id: "1",
    title: "VIẾT TRÊN BẢNG TRẮNG 4K:",
    description:
      "Viết bất cứ lúc nào, ghi lại bất cứ lúc nào; Cung cấp không gian sáng tạo để thể hiện sự tự do; viết bằng bút thông minh; quyets mã QR để chia sẻ.",
  },
  {
    id: "2",
    title: "CHIA SẺ MÀN HÌNH:",
    description:
      "Kết nối không dây đa màn hình với các thiết bị thông minh đầu cuối.",
  },
  {
    id: "3",
    title: "TỔ CHỨC CÁC HỘI NGHỊ TRUYỀN HÌNH:",
    description:
      "Giao tiếp không khoảng cách tại nhiều điểm cầu khác nhau. Có thể chia sẻ bảng trắng, tài liệu, điều khiển và quản lý Hội nghị hiệu quả.",
  },
  {
    id: "4",
    title: "Đồng bộ hóa dữ liệu với các thiết bị đầu cuối",
  },
];

export default function Conference() {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      <div className="flex-1 bg-[#e9e9e9] py-8">
        <LayoutContainer>
          <div className="h-full bg-white px-12 py-4">
            <div className="py-2 border-x-0 border-t-0 border-b border-solid border-red-600 text-base">
              Kế hoạch hội họp
            </div>
            <div className="text-center text-3xl font-bold mt-4 text-[#333]">
              Hiển thị ứng dụng thiết bị trong cuộc họp
            </div>
            <Image
              src={Images.img_home_charac_1}
              alt="education_1"
              className="my-8"
            />
            <div className="font-bold text-2xl text-[#333] mt-16">
              Chức năng đặc biệt dành cho chương trình hội nghị
            </div>
            <div className="my-8">
              {prosPoints.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center ${index > 0 ? "mt-8" : ""}`}
                >
                  <div className="font-bold text-4xl">{`0${index + 1}`}</div>
                  <div
                    className={`flex-1 ml-6 ${
                      item.id === "4" ? "text-red-500" : ""
                    }`}
                  >
                    <span className="font-bold text-xl">{item.title}</span>
                    {item.description && (
                      <span className="ml-2 text-lg">{item.description}</span>
                    )}
                  </div>
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
