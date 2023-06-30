export const mercadoPagoPay = (key: string, id: string) => {
  // let checkout: any;
  if (typeof window !== "undefined") {
    const script2 = document.createElement("script");
    script2.innerHTML = `
      const mp = new MercadoPago('${key}', {
        locale: 'es-AR'
      });

      const checkout = mp.checkout({
        preference: {
          id: '${id}'
        },
      });
      `;
    document.body.appendChild(script2);
  }
  // if (typeof checkout !== "undefined") {
  //   checkout.open();
  // }
};
