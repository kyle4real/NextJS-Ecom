import React from "react";
import { SCategory, SCollection, SPageHead, SPageHeadContent } from "./styles";

const PageHead = ({ pageHeadData }) => {
    return (
        <SPageHead>
            <SPageHeadContent>
                <SCategory>{pageHeadData.category}</SCategory>
                <SCollection>{pageHeadData.collection}</SCollection>
            </SPageHeadContent>
        </SPageHead>
    );
};

export default PageHead;
