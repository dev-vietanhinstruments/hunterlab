import Header from './../components/Header/index';
import Carousel from "@/components/Carousel";
import Footer from './../components/Footer/index';

export default function Home() {
  const banners = [
    '/banners/banner_1.png',
    '/banners/banner_2.png',
    '/banners/banner_3.png',
  ]


  return (
    <div className="flex bg-slate-200 flex-col">
      <Header />
      {/* <Carousel images={banners}/> */}
      <div>
        helololo
      </div>
      <Footer />

    </div>
  );
}
