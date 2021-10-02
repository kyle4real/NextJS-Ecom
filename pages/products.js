import React from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const Products = ({ productArray }) => {
    return (
        <div>
            <PageLayout>
                <ProductGrid productArray={productArray} />
            </PageLayout>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products?sort=slug&limit=all");
    const data = await res.json();

    return {
        props: { productArray: data.data },
    };
};

export default Products;
