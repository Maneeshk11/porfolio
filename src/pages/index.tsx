import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
// import SideBar from "@/components/navbar/sidebar";
import ContentPage from "@/components/contentPage/ContentPage";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import MouseTracker from "@/components/MouseTracker";
import Head from "next/head";

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
    <div id="ourbody" className={` ${inter.className} flex flex-col w-screen relative h-screen overflow-x-hidden`}>
      <RiArrowLeftSLine onClick={() => {
      }} className="hidden lg:block text-7xl absolute top-1/2 z-50 left-0 cursor-pointer" />
      
      <Head>
        <title>Maneesh Kolli</title>
        <meta
          name="Portfolio of Maneesh Kolli"
          content="Portfolio of Maneesh Kolli"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Vectormk.png" />
      </Head>

      <MouseTracker />
      <Navbar setOpen={setOpenSidebar} setCurrentPage={setCurrentPage} />
      {/* <SideBar /> */}

      <ContentPage pageLoc={pageLocation} />

      <video autoPlay loop muted className="absolute min-h-screen inset-0 -z-10 invert opacity-70 object-cover">
        <source src="/bg-vid.mp4"
          type="video/mp4" />
      </video>

      <RiArrowRightSLine className="hidden lg:block text-7xl absolute top-1/2 z-50 right-0 cursor-pointer" />
    </div>
  );
}

