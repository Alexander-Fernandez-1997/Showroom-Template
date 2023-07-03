import { Preferences } from "mercadopago";
const mercadopago = require("mercadopago");

export const getMercadoId = async (
  items: any[],
  slug: string
): Promise<string> => {
  mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_TOKEN,
  });

  const preference: Preferences = {
    items: items,
    back_urls: {
      success: `http://localhost:3000/order/${slug}/completed`,
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
  };

  const mercadoId = await mercadopago.preferences
    .create(preference)
    .then(function (response: any) {
      return response.body.id;
    })
    .catch(function (error: any) {
      console.log(error);
      throw error;
    });

  return mercadoId;
};
