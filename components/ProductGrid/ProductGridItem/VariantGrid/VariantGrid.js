import React from "react";
import { SVariantGrid, SVariantGridItem } from "./styles";

import { colorData } from "../../../../utils/colorData";

const colorArray = colorData.reduce((r, v) => {
    return r.concat(v.RGB.join(","));
}, []);

const VariantGrid = () => {
    return (
        <SVariantGrid style={{ gridTemplateColumns: `repeat(${colorArray.length}, 1fr)` }}>
            {colorArray.map((rgb, index) => (
                <SVariantGridItem
                    key={index}
                    style={{ background: `rgb(${rgb})` }}
                ></SVariantGridItem>
            ))}
        </SVariantGrid>
    );
};

export default VariantGrid;
