import { initMercadoPago } from "@mercadopago/sdk-react";
import { mercadoFetch } from "./fetch";

export const mercadoPagoPayment = (slug, setPreference, setTotal) => {
  mercadoFetch(slug)
    .then((preference) => {
      setTotal(null);
      initMercadoPago(preference.key, { locale: "es-AR" });
      console.log(preference.preferenceId);
      setPreference(preference.preferenceId);
      setTotal(preference.total);
    })
    .catch((error) => {
      console.log(error);
    });
};
