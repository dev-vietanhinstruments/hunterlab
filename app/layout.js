import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingButton } from './../components/Button/index';
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thiết bị HunterLab - Phân phối bởi Việt Anh",
  description: "HunterLab tự tin là nhà sản xuất hàng đầu trong trong việc sản xuất và cung cấp các thiết bị đo màu. Tìm hiểu thêm về các giải pháp của HunterLab và nhận hỗ trợ tư vấn thêm từ Việt Anh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{
      children}
      <FloatingButton href="https://zalo.me/0916424731" className="p-0 bg-white">
        <Image
          src="/logo-zalo.svg"
          alt='zalo'
          width={64}
          height={64}
          className='size-14 lg:size-16'
        />
      </FloatingButton>
      </body>
    </html>
  );
}
