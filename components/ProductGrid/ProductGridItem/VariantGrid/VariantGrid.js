import React from "react";
import { SVariantGrid, SVariantGridItem } from "./styles";

var colorData = [
    {
        colorName: "royal-blue",
        CMYK: ["80", "53", "0", "0"],
        RGB: ["64", "96", "175"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "light-blue",
        CMYK: ["30", "0", "5", "0"],
        RGB: ["163", "219", "232"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "bright-blue",
        CMYK: ["90", "11", "0", "0"],
        RGB: ["0", "169", "224"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "charcoal",
        CMYK: ["0", "0", "0", "40"],
        RGB: ["133", "136", "139"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "craft",
        CMYK: ["0", "29", "54", "24"],
        RGB: ["192", "138", "89"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "cream",
        CMYK: ["0", "11", "19", "16"],
        RGB: ["214", "191", "172"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "dark-red",
        CMYK: ["0", "100", "79", "20"],
        RGB: ["167", "25", "48"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "forrest-green",
        CMYK: ["27", "0", "2", "67"],
        RGB: ["60", "83", "81"],
        CUSTOM: "RGB",
    },
    {
        colorName: "green",
        CMYK: ["70", "0", "100", "9"],
        RGB: ["63", "156", "53"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "hot-pink",
        CMYK: ["11", "79", "0", "0"],
        RGB: ["218", "57", "175"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "lavender",
        CMYK: ["43", "38", "0", "0"],
        RGB: ["143", "141", "203"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "lime-green",
        CMYK: ["32", "0", "59", "0"],
        RGB: ["165", "216", "103"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "moss-green",
        CMYK: ["10", "0", "8", "54"],
        RGB: ["105", "117", "107"],
        CUSTOM: "RGB",
    },
    {
        colorName: "orange",
        CMYK: ["0", "56", "90", "0"],
        RGB: ["255", "109", "34"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "sunset-orange",
        CMYK: ["0", "20", "35", "0"],
        RGB: ["255", "152", "56"],
        CUSTOM: "RGB",
    },
    {
        colorName: "pink",
        CMYK: ["0", "17", "10", "0"],
        RGB: ["243", "201", "211"],
        CUSTOM: "RGB",
    },
    {
        colorName: "purple",
        CMYK: ["8", "39", "0", "46"],
        RGB: ["103", "69", "113"],
        CUSTOM: "RGB",
    },
    {
        colorName: "red",
        CMYK: ["0", "79", "100", "0"],
        RGB: ["222", "56", "49"],
        CUSTOM: "RGB",
    },
    {
        colorName: "white",
        CMYK: ["0", "0", "0", "0"],
        RGB: ["255", "255", "255"],
        CUSTOM: "CMYK",
    },
    {
        colorName: "yellow",
        CMYK: ["0", "10", "100", "0"],
        RGB: ["254", "209", "0"],
        CUSTOM: "RGB",
    },
];

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
