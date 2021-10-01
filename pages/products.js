import React from "react";

const Products = ({ products }) => {
    console.log(products);
    return (
        <div>
            {products.map(({ slug }, index) => (
                <h3 key={index}>{slug}</h3>
            ))}
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products?sort=slug&limit=all");
    const data = await res.json();

    return {
        props: { products: data.data },
    };
};

export default Products;
