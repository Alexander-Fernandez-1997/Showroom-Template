import { BackToTop } from "../components/utils/BackToTop";
import { CustomProduct } from "../components/product/CustomProduct";
import { Footer } from "../components/utils/Footer";
import { Navbar } from "../components/utils/Navbar";

export default function Ropa({ clothe }) {
  return (
    <>
      <Navbar></Navbar>
      <CustomProduct clothe={clothe}></CustomProduct>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  );
}

export const getStaticPaths = async (ctx) => {
  const clothesFetch = await fetch("http://localhost:3000/api/clothes");
  const clothesJson = await clothesFetch.json();
  return {
    fallback: "blocking",
    paths: clothesJson.map((clothe) => ({
      params: { id: clothe.id.toString() },
    })),
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const clotheFetch = await fetch("http://localhost:3000/api/clothes/" + id);
  const clothe = await clotheFetch.json();
  return {
    props: {
      clothe,
    },
  };
};
