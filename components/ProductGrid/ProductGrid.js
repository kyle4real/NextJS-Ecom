import React, { Fragment } from "react";
import ProductGridItem from "./ProductGridItem/ProductGridItem";
import { SProductGrid } from "./styles";

const productArray = [
    {
        name: "2pac",
        price: 50,
    },
    {
        name: "Beatles",
        price: 50,
    },
    {
        name: "ACDC",
        price: 50,
    },
    {
        name: "Biggie",
        price: 50,
    },
];

const ProductGrid = () => {
    return (
        <SProductGrid>
            {productArray.map((product, index) => (
                <Fragment key={index}>
                    <ProductGridItem product={product} />
                </Fragment>
            ))}
        </SProductGrid>
    );
};

export default ProductGrid;
