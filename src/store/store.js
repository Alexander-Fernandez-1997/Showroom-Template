import create from "zustand";
import { persist } from "zustand/middleware";
const useCart = create(
  persist(
    (set, get) => ({
      total: 0,
      totalqty: 0,
      cartContent: [],
      addTocart: (params) => {
        set((state) => ({
          totalqty: state.totalqty + 1,
          total: state.total + parseFloat(params.price),
          cartContent: [...state.cartContent, params],
        }));
      },
      updatecart: ({ params, mycart }) => {
        set((state) => ({
          totalqty: state.totalqty + 1,
          total: state.total + parseFloat(params.price),
          cartContent: mycart,
        }));
      },
      reloadCart: () => {
        set((state) => ({
          totalqty: state.totalqty,
          total: state.total,
          cartContent: state.cartContent,
        }));
      },
      clearCart: () => set({ totalqty: 0, total: 0, cartContent: [] }),
      removeFromCart: (params) =>
        set((state) => ({
          total: state.total - params.price * params.quantity,
          totalqty: state.totalqty - params.quantity,
          cartContent: state.cartContent.filter(
            (item) => item.id !== params.id
          ),
        })),

      updateQty: ({ qty, id }) => {
        const mycart = get().cartContent;
        const index = mycart.findIndex((item) => item.id === id);
        const item = mycart[index];
        const newqty = parseInt(qty);
        const newprice = parseFloat(item.price);
        const oldqty = parseInt(item.quantity);
        const oldprice = parseFloat(item.price);
        const newtotal = get().total;

        if (newqty === 0) {
          // use the remove function to remove the item from the cart
          get().removeFromCart(item);
        } else if (newqty > oldqty) {
          mycart[index].quantity = newqty;
          set((state) => ({
            totalqty: state.totalqty + (newqty - oldqty),
            total: state.total + newprice * (newqty - oldqty),
            cartContent: mycart,
          }));
        } else if (newqty < oldqty) {
          mycart[index].quantity = newqty;
          set((state) => ({
            totalqty: state.totalqty - (oldqty - newqty),
            total: state.total - oldprice * (oldqty - newqty),
            cartContent: mycart,
          }));
        }
        // if the cart length is 0 use the clearCart function to reset the cart
        if (get().cartContent.length === 0) {
          get().clearCart();
        }
      },
    }),
    { name: "cart" }
  )
);
export default useCart;
