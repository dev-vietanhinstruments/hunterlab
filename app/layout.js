import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thiết bị HunterLab - Phân phối bởi Việt Anh",
  description: "HunterLab tự tin là nhà sản xuất hàng đầu trong trong việc sản xuất và cung cấp các thiết bị đo màu. Tìm hiểu thêm về các giải pháp của HunterLab và nhận hỗ trợ tư vấn thêm từ Việt Anh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor:'#F7F7F7' }} >{children}</body>
    </html>
  );
}
