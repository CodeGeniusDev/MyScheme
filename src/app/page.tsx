import React from "react";
// import Container from "@/components/Container";
import Carousel from "@/components/Carousel";
import FindScheme from "@/components/FindScheme";
import FAQ from "@/components/FAQ";
import SchemeTabs from "@/components/SchemeTabs";
import ProcessSteps from "@/components/ProcessSteps";
import About from "@/components/About";
// Import images
import img1 from "/public/images/banner/1.jpg";
import img2 from "/public/images/banner/2.jpg";
import img3 from "/public/images/banner/3.jpg";
import img4 from "/public/images/banner/4.jpg";
import img5 from "/public/images/banner/5.jpg";
import img6 from "/public/images/banner/6.jpg";

const carouselImages = [
  { src: img1, link: "/schemes/1" },
  { src: img2, link: "/schemes/2" },
  { src: img3, link: "/schemes/3" },
  { src: img4, link: "/schemes/4" },
  { src: img5, link: "/schemes/5" },
  { src: img6, link: "/schemes/6" },
];

const page = () => {
  return (
    <>
      <Carousel images={carouselImages} autoSlideInterval={5000} />
      {/* <Container> */}
        <About />
        <FindScheme />
        <SchemeTabs />
        <ProcessSteps />
        <FAQ limit={3} />
      {/* </Container> */}
    </>
  );
};

export default page;
