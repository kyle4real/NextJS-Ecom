import React from "react";
import { useSelector } from "react-redux";
import { productActions } from "../app/slices/productSlice";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import Pagination from "../components/UI/Pagination/Pagination";

const Products = ({ productArray }) => {
    const { products } = useSelector((state) => state.product);

    return (
        <div>
            <PageLayout>
                <ProductGrid productArray={productArray} />
                <Pagination
                    totalCount={productArray.length}
                    sliceActions={productActions}
                    slice={"product"}
                />
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
