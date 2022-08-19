import { ObjectId } from "mongodb";
import { BackToTop } from "../components/BackToTop";
import { CustomProduct } from "../components/CustomProduct";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { connectToDatabase } from "../utils/db";

export default function Ropa({ prenda }) {
  const { _id, name, category, image, description } = prenda[0];
  return (
    <>
      <Navbar></Navbar>
      <CustomProduct
        id={_id}
        name={name}
        category={category}
        image={image}
        description={description}
      ></CustomProduct>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const { db } = await connectToDatabase();
  const clothes = await db.collection("clothes").find().toArray();
  return {
    fallback: "blocking",
    paths: clothes.map((clothe) => ({ params: { id: clothe._id.toString() } })),
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const { db } = await connectToDatabase();
  const clothes = await db
    .collection("clothes")
    .find({ _id: ObjectId(id) })
    .toArray();
  const prenda = JSON.parse(JSON.stringify(clothes));
  return {
    props: { prenda },
    revalidate: 10,
  };
};
