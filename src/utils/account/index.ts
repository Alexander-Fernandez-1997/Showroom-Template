export const getAccountLinks = (id: string) => {
  return [
    { tittle: "Account", href: `/account/${id}` },
    { tittle: "Profile", href: `/account/${id}/profile` },
    { tittle: "Addresses", href: `/account/${id}/addresses` },
    { tittle: "Orders", href: `/account/${id}/orders` },
  ];
};
