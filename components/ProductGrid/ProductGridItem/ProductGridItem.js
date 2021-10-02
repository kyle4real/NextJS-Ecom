import React from "react";
import Image from "next/image";

import {
    SProductContent,
    SProductContent2,
    SProductGridItem,
    SProductName,
    SProductPrice,
    SProductPrice2,
    SSpaceBetween,
    STag,
    SVariantSelection,
    SVariantSelection2,
} from "./styles";

import VariantGrid from "./VariantGrid/VariantGrid";

const ProductGridItem = ({ product }) => {
    const variantOne = false;
    return (
        <SProductGridItem>
            <Image
                src={product.imgUrl}
                alt={`${product.name} vinyl design`}
                width={550}
                height={550}
                priority
            />
            <VariantGrid />
            {variantOne && (
                <SProductContent>
                    <SSpaceBetween>
                        <STag>NEW</STag>
                        <SProductPrice>${product.price.toFixed(2)}&nbsp;USD</SProductPrice>
                    </SSpaceBetween>
                    <SProductName>{product.name}</SProductName>
                    <SVariantSelection>Framed + Custom Color</SVariantSelection>
                </SProductContent>
            )}
            {!variantOne && (
                <SProductContent2>
                    <SProductName>{product.name}</SProductName>
                    <SVariantSelection2>Framed + Custom Color</SVariantSelection2>
                    <SProductPrice2>${product.price}.00 USD</SProductPrice2>
                </SProductContent2>
            )}
        </SProductGridItem>
    );
};

export default ProductGridItem;