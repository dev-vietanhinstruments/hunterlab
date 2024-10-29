import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingButton } from './../components/Button/index';
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hunterlab-vietanh.vercel.app"),
  title: {
    default: "Thiết bị HunterLab - Phân phối bởi Việt Anh",
    template: '%s | Thiết bị HunterLab - Phân phối bởi Việt Anh',
  },
  description: "HunterLab tự tin là nhà sản xuất hàng đầu trong trong việc sản xuất và cung cấp các thiết bị đo màu. Tìm hiểu thêm về các giải pháp của HunterLab và nhận hỗ trợ tư vấn thêm từ Việt Anh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{
      children}
      <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 flex flex-col gap-2 items-end">
      <FloatingButton href="https://zalo.me/0916424731" className="p-0 bg-white relative w-fit">
        <Image
          src="/logo-zalo.svg"
          alt='zalo'
          width={64}
          height={64}
          className='size-12'
        />
      </FloatingButton>
      <FloatingButton href="tel:0916424731" className="p-0 bg-primary relative px-4 py-2">
      <svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-6 inline-block text-white'>
								<path
									fillRule='evenodd'
									d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
									clipRule='evenodd'
								/>
							</svg>
              <span className='text-white text-sm pl-2'>0916424731</span>
      </FloatingButton>
      </div>
      </body>
    </html>
  );
}
