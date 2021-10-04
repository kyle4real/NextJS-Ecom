import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productActions } from "../app/slices/productSlice";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import Pagination from "../components/UI/Pagination/Pagination";

const Products = ({ productArray }) => {
    const dispatch = useDispatch();
    const { products, pagination } = useSelector((state) => state.product);
    const { currentPage, perPage } = pagination;

    useEffect(() => {
        console.log(productArray);
        dispatch(productActions.replaceProducts(productArray));
    }, [dispatch, productArray]);

    let uiProducts = useMemo(() => {
        let lastIndex = currentPage * perPage;
        let firstIndex = lastIndex - perPage;
        return products.slice(firstIndex, lastIndex);
    }, [products, currentPage, perPage]);

    return (
        <div>
            <PageLayout>
                <ProductGrid productArray={uiProducts} />
                <Pagination
                    totalCount={products.length}
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
