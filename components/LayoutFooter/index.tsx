import Image from "next/image";
import Link from "next/link";
import Images from "@/public/images";

const LayoutFooter = () => {
  return (
    <div className="bg-grayFooter">
      <div className="max-w-[1200px] mx-auto hidden xl:flex items-center justify-between">
        <div className="footer2 py-4 text-grayText text-xs">
          <div>Công ty Cổ phần Edusing Việt Nam</div>
          <div className="mt-1">
            Địa chỉ: L2A, 02, Toà R6, KĐT Vinhomes Royal City, Số 72 Nguyễn
            Trãi, P. Thượng Đình, Q. Thanh Xuân, TP. Hà Nội, Việt Nam
          </div>
          <div className="mt-1">Mã số thuế: 0109336382</div>
          <div className="mt-1">SĐT: 091 216 5811</div>
        </div>
        <div className="w-[150px]">
          <Image src={Images.img_bo_cong_thuong} alt="bo_cong_thuong" />
        </div>
      </div>
      <div className="block xl:hidden px-2 py-3">
        <div className="w-20 mx-auto mb-3">
          <Image
            src={Images.img_brand_logo}
            alt="brand-logo"
            className="mx-auto"
          />
        </div>
        <hr />
        <div className="footer2 py-4 text-grayText text-xs">
          <div className="text-center">Công ty Cổ phần Edusing Việt Nam</div>
          <div className="mt-1 text-center">
            Địa chỉ: L2A, 02, Toà R6, KĐT Vinhomes Royal City, Số 72 Nguyễn
            Trãi, P. Thượng Đình, Q. Thanh Xuân, TP. Hà Nội, Việt Nam
          </div>
          <div className="mt-1 text-center">Mã số thuế: 0109336382</div>
          <div className="mt-1 text-center">SĐT: 091 216 5811</div>
        </div>
        <div className="mx-auto w-[150px]">
          <Image src={Images.img_bo_cong_thuong} alt="bo_cong_thuong" />
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;
