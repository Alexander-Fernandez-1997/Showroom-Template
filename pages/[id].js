import { CustomProduct } from "../components/product/CustomProduct";

export default function Ropa({ clothe }) {
  return (
    <>
      <CustomProduct clothe={clothe}></CustomProduct>
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
