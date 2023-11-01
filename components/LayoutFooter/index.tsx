import Image from "next/image";
import Link from "next/link";
import Images from "@/public/images";

const LayoutFooter = () => {
  return (
    <div className="bg-grayFooter">
      <div className="max-w-[1200px] mx-auto hidden xl:block">
        {/* <div className="footer1 py-4 grid grid-cols-6 gap-8">
          <div className="col-span-4 grid grid-cols-4 gap-8">
            <div>
              <Image src={Images.img_brand_logo} alt="brand-logo" />
              <div className="mt-6 flex items-center">
                <Image src={Images.ic_phone} alt="ic-phone" />
                <span className="text-grayText ml-4">400-8910-950</span>
              </div>
              <div className="mt-2 flex items-center">
                <Image src={Images.ic_fax} alt="ic-phone" />
                <span className="text-grayText ml-4">0755-33182699</span>
              </div>
            </div>
            <div className="text-grayText">
              <div className="uppercase text-xl font-bold text-white">
                product
              </div>
              <div className="mt-6">
                <Link href="/">Interactive Flat Panel</Link>
              </div>
              <div className="mt-2">
                <Link href="/">PCAP Smart Blackboard</Link>
              </div>
              <div className="mt-2">
                <Link href="/">Commercial Display</Link>
              </div>
              <div className="mt-2">
                <Link href="/">Accessories</Link>
              </div>
            </div>
            <div className="text-grayText">
              <div className="uppercase text-xl font-bold text-white">
                contents
              </div>
              <div className="mt-6">
                <Link href="/">Products</Link>
              </div>
              <div className="mt-2">
                <Link href="/">Solution</Link>
              </div>
              <div className="mt-2">
                <Link href="/">Contact us</Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-8">
            <div>
              <Image src={Images.img_brand_qr} alt="brand-ar" />
              <div className="mt-2 text-center text-white">QR Scan</div>
            </div>
            <div className="col-span-2 flex items-baseline">
              <Image src={Images.ic_global} alt="ic_global" />
              <span className="text-2xl text-white font-bold ml-2">
                Service Hotline: 400-8910-950
              </span>
            </div>
          </div>
        </div> */}
        {/* <hr /> */}
        <div className="footer2 py-4 text-grayText text-xs">
          <div>Công ty Cổ phần Edusing Việt Nam</div>
          <div className="mt-1">
            Địa chỉ: L2A, 02, Toà R6, KĐT Vinhomes Royal City, Số 72 Nguyễn
            Trãi, P. Thượng Đình, Q. Thanh Xuân, TP. Hà Nội, Việt Nam
          </div>
          <div className="mt-1">Mã số thuế: 0109336382</div>
          <div className="mt-1">SĐT: 091 216 5811</div>
        </div>
      </div>
      <div className="block xl:hidden px-2 py-3">
        <div className="w-20 mx-auto">
          <Image
            src={Images.img_brand_logo}
            alt="brand-logo"
            className="mx-auto"
          />
        </div>

        <div className="flex items-center justify-center mt-6 mb-4">
          <Image src={Images.ic_phone} alt="ic-phone" />
          <span className="text-grayText ml-4">0986 - 453 - 145</span>
        </div>
        {/* <div className="flex items-center justify-center mt-2 mb-4">
          <Image src={Images.ic_fax} alt="ic-phone" />
          <span className="text-grayText ml-4">0755-33182699</span>
        </div> */}
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
      </div>
    </div>
  );
};

export default LayoutFooter;
