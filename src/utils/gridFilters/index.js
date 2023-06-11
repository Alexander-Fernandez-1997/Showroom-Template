export const getFilteredClothes = (q, clothe) => {
  if (q === "") {
    return clothe;
  } else {
    return clothe.filter((cloth) =>
      cloth.name.toLowerCase().includes(q.toLowerCase())
    );
  }
};

export const sortByPrice = (variants, sort) => {
  if (sort === "Mayor precio") {
    return variants.sort((a, b) => {
      const priceA =
        a.discount === true && a.discount_price ? a.discount_price : a.price;
      const priceB =
        b.discount === true && b.discount_price ? b.discount_price : b.price;
      return priceB - priceA;
    });
  } else if (sort === "Menor precio") {
    return variants.sort((a, b) => {
      const priceA =
        a.discount === true && a.discount_price ? a.discount_price : a.price;
      const priceB =
        b.discount === true && b.discount_price ? b.discount_price : b.price;
      return priceA - priceB;
    });
  } else {
    return variants;
  }
};
