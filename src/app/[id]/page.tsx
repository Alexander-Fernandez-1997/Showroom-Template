import { simpleFetch } from "utils/simpleFetch";
import { CustomProduct } from "components/product/CustomProduct";
import { Reviews } from "components/product/Reviews";

interface Props {
  params: {
    id: string;
  };
}

export default async function Home({ params }: Props) {
  const clothe = await simpleFetch(`clothes/${params.id}`, "ssr");
  return (
    <>
      <CustomProduct clothe={clothe}></CustomProduct>
      <Reviews reviews={clothe.reviews} product={params.id}></Reviews>
    </>
  );
}
