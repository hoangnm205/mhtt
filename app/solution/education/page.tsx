import LayoutFooter from "@/components/LayoutFooter";
import LayoutHeader from "@/components/LayoutHeader";
import Image from "next/image";
import LayoutContainer from "@/components/LayoutContainer";
import Images from "@/public/images";

const prosPoints: { id: string; title: string; description?: string }[] = [
  {
    id: "1",
    title: "TIỆN LỢI:",
    description:
      "Thiết bị hỗ trợ dạy học tất cả trong một. Có thể cài đặt được các phần mềm hỗ trợ giảng dạy, được trang bị bút và bảng trắng thuận tiện cho việc dạy học, có thể phát video, hình ảnh, nhạc, …dạy trẻ em thu hút sự chú ý và khơi dậy sự hứng thú của trẻ.",
  },
  {
    id: "2",
    title: "KHÔNG BỤI:",
    description:
      "Giáo viên và học sinh có thể viết trực tiếp trên màn hình tương tác thông minh mà không tạo ra bụi. Rất an toàn cho sức khỏe.",
  },
  {
    id: "3",
    title: "TƯƠNG TÁC:",
    description:
      "Màn hình tương tác thông minh tất cả trong một cho phép giảng dậy tương tác giữa giáo viên và học sinh hiệu quả hơn.",
  },
  {
    id: "4",
    title:
      "Đặc biệt, Thông qua một số phần mềm và thiết bị ngoại vi số hóa trực tiếp bài giảng của giáo viên tại lớp học.",
  },
];

const solutions = [
  {
    id: "1",
    image: Images.img_education_2,
    content: "Nguồn tài liệu phong phú cung cấp giải pháp giảng dạy tốt nhất",
  },
  {
    id: "2",
    image: Images.img_education_3,
    content: "Trình chiếu sách giáo khoa điện tử đồng bộ các môn học",
  },
  {
    id: "3",
    image: Images.img_education_6,
    content:
      "Trực tiếp thu phát bài giảng trực tuyến tại không gian lớp học. Hỗ trợ số hóa bài giảng",
  },
  {
    id: "4",
    image: Images.img_education_5,
    content:
      "Cho phép bài đặt các phần mềm ứng dụng (App) để hỗ trợ hoạt động giảng dạy",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      <div className="flex-1 bg-[#e9e9e9] py-8">
        <LayoutContainer>
          <div className="h-full bg-white px-12 py-4">
            <div className="py-2 border-x-0 border-t-0 border-b border-solid border-red-600 text-base">
              Chương trình giáo dục
            </div>
            <div className="text-center text-3xl font-bold mt-4 text-[#333]">
              Dạy học tương tác
            </div>
            <Image
              src={Images.img_education_1}
              alt="education_1"
              className="my-8"
            />
            <div className="font-bold text-2xl text-[#333] mt-16">
              Ưu điểm so với bảng đen truyền thống
            </div>
            <div className="mt-8">
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
            <div className="font-bold text-2xl text-[#333] mt-16">
              Nguồn tài liệu phong phú cung cấp giải pháp giảng dạy tốt nhất
            </div>
            <div className="mt-8 grid grid-cols-2 gap-16">
              {solutions.map((item) => (
                <div key={item.id}>
                  <div className="h-72 bg-[#e9e9e9] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt="img"
                      className="object-contain max-h-72"
                    />
                  </div>
                  <div className="text-xl text-center mt-2">{item.content}</div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <div className="w-1/2 mx-auto">
                <div className="h-72 bg-[#e9e9e9] flex items-center justify-center">
                  <Image
                    src={Images.img_education_7}
                    alt="img"
                    className="object-contain max-h-72"
                  />
                </div>
                <div className="text-xl text-center mt-2">
                  <div>Chia sẻ không dây, tương tác đa màn hình</div>
                  <div>Tương tác 20 điểm chạm đồng thời</div>
                  <div>Giảng dạy tương tác - Giáo dục - Giải trí</div>
                  <div>Viết bằng mép bút thông minh, mượt mà</div>
                  <div>Trang bị chức năng viết bảng trắng</div>
                  <div>
                    Giảng dạy trên thiết bị di động được đồng bộ trên mã QR và
                    lưu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>
      <LayoutFooter />
    </div>
  );
}
