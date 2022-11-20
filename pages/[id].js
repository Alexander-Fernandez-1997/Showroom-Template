import { CustomProduct } from "../components/product/CustomProduct";
import { Reviews } from "../components/product/Reviews";
import { simpleFetch } from "../utils/simpleFetch";

export default function Ropa({ clothe }) {
  return (
    <>
      <CustomProduct clothe={clothe}></CustomProduct>
      <Reviews reviews={clothe[2].rows}></Reviews>
    </>
  );
}

export const getStaticPaths = async (ctx) => {
  const clothesJson = await simpleFetch("clothes");

  return {
    fallback: "blocking",
    paths: clothesJson.map((clothe) => ({
      params: { id: clothe.id.toString() },
    })),
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const clothe = await simpleFetch(`clothes/${id}`);

  return {
    props: {
      clothe,
    },
  };
};
