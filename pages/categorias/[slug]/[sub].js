import { ClothesGrid } from "../../../components/categories/ClothesGrid";
import { simpleFetch } from "../../../utils/simpleFetch";

export default function Showroom({ categJson = [] }) {
  return (
    <>
      <ClothesGrid clothesJson={categJson.clothes || []}></ClothesGrid>
    </>
  );
}

export const getStaticPaths = async (ctx) => {
  const categJson = await simpleFetch("categories");
  const subcategJson = await simpleFetch("categories/subcategories");

  const categSlugs = categJson.map((categ) => categ.slug);
  const subcategSlugs = subcategJson.map((subcateg) => subcateg.slug);

  const paths = [];
  categSlugs.forEach((slug) => {
    subcategSlugs.forEach((sub) => {
      paths.push({ params: { slug: slug, sub: sub } });
    });
  });

  return {
    fallback: "blocking",
    paths: paths,
  };
};

export async function getStaticProps(context) {
  const { slug, sub } = context.params;
  console.log(slug, sub);
  const categJson = await simpleFetch("categories/" + slug + "/" + sub);

  return {
    props: { categJson },
    revalidate: 120,
  };
}
