import React, { Fragment } from "react";
import ProductGridItem from "./ProductGridItem/ProductGridItem";
import { SProductGrid } from "./styles";

const ProductGrid = ({ productArray }) => {
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
