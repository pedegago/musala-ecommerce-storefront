import React, { useState, useEffect } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import useCart from "../../hooks/useCart";

const Counter = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const { cart, add, update } = useCart();

    const { id, name, price, url, thumbnail } = product;

    useEffect(() => {
        const item = cart.find(i => i.id === id);

        setQuantity(item ? item.quantity : 0);
    }, [cart, id]);

    const addItem = () => {
        const item = { id, name, price, url, thumbnail };

        add(item);
    };

    const updateItem = e => {
        const operation = e.target.name;

        const qty = operation === "minus" ? quantity - 1 : quantity + 1;

        update(id, qty);
    };

    return (
        <div className="counter">
            {quantity === 0 ? (
                <Button color="primary" block onClick={addItem}>
                    Add <span className="d-none d-sm-inline">to cart</span>
                </Button>
            ) : (
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button outline name="minus" onClick={updateItem}>
                            –
                        </Button>
                    </InputGroupAddon>
                    <Input
                        disabled
                        value={quantity}
                        className="border-secondary bg-white text-center"
                    />
                    <InputGroupAddon addonType="append">
                        <Button outline name="plus" onClick={updateItem}>
                            +
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            )}
        </div>
    );
};

export default Counter;
