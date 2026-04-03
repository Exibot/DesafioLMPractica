import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const pizzaExistente = prevCart.find(
                (item) => item.id === pizza.id,
            );
            if (pizzaExistente) {
                return prevCart.map((item) =>
                    item.id === pizza.id
                        ? { ...item, count: item.count + 1 }
                        : item,
                );
            } else {
                return [...prevCart, { ...pizza, count: 1 }];
            }
        });
    };

    const decreaseFromCart = (pizza) => {
        setCart((prevCart) => {
            const pizzaExistente = prevCart.find(
                (item) => item.id === pizza.id,
            );

            if (!pizzaExistente) return prevCart;
            if (pizzaExistente.count === 1) {
                return prevCart.filter((item) => item.id !== pizza.id);
            }
            return prevCart.map((item) =>
                item.id === pizza.id
                    ? { ...item, count: item.count - 1 }
                    : item,
            );
        });
    };

    return (
        <CartContext.Provider
            value={{ cart, setCart, addToCart, decreaseFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
