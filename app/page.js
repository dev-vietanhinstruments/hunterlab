import Image from "next/image";
import Header from './../components/Header/index';
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex bg-slate-200 flex-col">
      <Header />
      <Carousel />
      <div>heloooo</div>
    </div>
  );
}
