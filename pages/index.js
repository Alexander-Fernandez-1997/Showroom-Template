import { connectToDatabase } from "../utils/db";
import { Navbar } from "../components/Navbar";
import { SectionSlide } from "../components/SectionSlide";
import { IndexBanner } from "../components/IndexBanner";
import { IndexCarousel } from "../components/IndexCarousel";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function Home({ clothesJson }) {
  return (
    <>
      {/* Header */}

      <Navbar></Navbar>
      {/* Slider */}
      <SectionSlide></SectionSlide>
      {/* Banner */}
      <IndexBanner></IndexBanner>

      {/* Product */}
      <IndexCarousel clothesJson={clothesJson}></IndexCarousel>
      {/* Footer */}
      <Footer></Footer>
      {/* Back to top */}
      <BackToTop></BackToTop>
    </>
  );
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();
  const clothes = await db
    .collection("clothes")
    .find()
    .sort({ _id: -1 })
    .limit(7)
    .toArray();
  const clothesJson = JSON.parse(JSON.stringify(clothes));
  return {
    props: { clothesJson },
    revalidate: 120,
  };
}
