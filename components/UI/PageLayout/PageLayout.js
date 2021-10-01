import React, { Fragment } from "react";
import PageHead from "./PageHead/PageHead";
import { SPage } from "./styles";

const PageLayout = ({ children, pageHeadData }) => {
    return (
        <Fragment>
            {pageHeadData && <PageHead pageHeadData={pageHeadData} />}
            <SPage>{children}</SPage>
        </Fragment>
    );
};

PageLayout.defaultProps = {
    pageHeadData: null,
};

export default PageLayout;
