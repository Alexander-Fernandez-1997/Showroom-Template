import { initMercadoPago } from "@mercadopago/sdk-react";
import { mercadoFetch } from "./fetch";

export const mercadoPagoPayment = (slug, setPreference) => {
  mercadoFetch(slug)
    .then((preference) => {
      initMercadoPago(preference.key, { locale: "es-AR" });
      console.log(preference.preferenceId);
      setPreference(preference.preferenceId);
    })
    .catch((error) => {
      console.log(error);
    });
};
