// import { ClothesGrid } from "../../components/categories/ClothesGrid";
// import { simpleFetch } from "../../utils/simpleFetch";

// export default function Showroom({ clothesJson }) {
//   return (
//     <>
//       <ClothesGrid clothesJson={clothesJson}></ClothesGrid>
//     </>
//   );
// }
export default function Showroom() {
  return (
    <>
      <h1>hola</h1>
    </>
  );
}
// // server side props (SSR)
// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const clothesJson = await simpleFetch(`search/${id}`);

//   return {
//     props: { clothesJson },
//   };
// }
