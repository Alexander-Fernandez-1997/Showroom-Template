import { useState } from "react";
import { ClothesGrid } from "../../components/categories/ClothesGrid";
import { simpleFetch } from "../../utils/simpleFetch";

export default function Showroom({ clothesJson }) {
  const [query, setQuery] = useState("");
  console.log(clothesJson);

  if (clothesJson.length === 0) {
    return (
      <div className="container mt-5 pt-5">
        <h1>No disponemos productos con ese nombre</h1>
      </div>
    );
  } else {
    return (
      <>
        <ClothesGrid
          clothesJson={clothesJson}
          query={query}
          setQuery={setQuery}
        ></ClothesGrid>
      </>
    );
  }
}

// server side props (SSR)
export async function getServerSideProps(context) {
  const { id } = context.query;
  const clothesJson = await simpleFetch(`search/${id}`);

  return {
    props: { clothesJson },
  };
}
