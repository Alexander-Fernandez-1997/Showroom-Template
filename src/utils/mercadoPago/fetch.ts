import { simplePost } from "utils/simpleFetch";

export const mercadoFetch = async (slug: string) => {
  const preference = await simplePost("payments/mercadopago", { slug: slug });

  return preference;
};
