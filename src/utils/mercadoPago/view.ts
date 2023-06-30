import { initMercadoPago } from "@mercadopago/sdk-react";
import { mercadoFetch } from "./fetch";

export const mercadoPagoPayment = (slug, setPreference) => {
  const key = "TEST-3c5ade5d-fec0-4f11-b82d-a72f07315cfa";
  initMercadoPago(key, { locale: "es-AR" });
  mercadoFetch(slug).then((preference) => {
    console.log(preference.preferenceId);
    setPreference(preference.preferenceId);
  });
};
