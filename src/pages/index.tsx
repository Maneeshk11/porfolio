import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
// import SideBar from "@/components/navbar/sidebar";
import ContentPage from "@/components/contentPage/ContentPage";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageLocation, setPageLocation] = useState<string>("0")
  const [navi, setNavi] = useState<number>(0)

  useEffect(() => {
    setNavi((prevNavi) => {
      const nextNavi = currentPage - 1;
      const newPosition = `calc(-${nextNavi}*(100vw))`;
      setPageLocation(newPosition);
      return nextNavi;
    });
  }, [currentPage])

  return (
    <div className={`${inter.className} flex flex-col w-screen relative h-screen overflow-x-hidden`}>
      <RiArrowLeftSLine onClick={() => {
      }} className="text-7xl absolute top-1/2 z-50 left-0 cursor-pointer" />

      <Navbar setOpen={setOpenSidebar} setCurrentPage={setCurrentPage} />
      {/* <SideBar /> */}

      <ContentPage pageLoc={pageLocation} />

      <RiArrowRightSLine className="text-7xl absolute top-1/2 z-50 right-0 cursor-pointer" />
    </div>
  );
}

