import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination, DOTS } from "../../../hooks/usePagination";
import {
    SPagination,
    SPaginationArrow,
    SArrowLeft,
    SPaginationNumber,
    SPaginationLink,
    SArrowRight,
    SPageAmount,
    SPageAmountSpan,
} from "./styles";

const perPageOptions = ["10", "20", "50", "all"];

const checkPerPageActive = (option, perPage, totalCount) => {
    if (option === "all") {
        return perPage === totalCount;
    } else return parseInt(option) === perPage;
};

const Pagination = ({ totalCount, sliceActions, slice }) => {
    const dispatch = useDispatch();
    const { pagination } = useSelector((state) => state[slice]);
    const { currentPage, perPage } = pagination;
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        perPage,
    });

    const onNext = () => {
        dispatch(sliceActions.incrementCurrentPage());
        window.scrollTo(0, 0);
    };
    const onPrevious = () => {
        dispatch(sliceActions.decrementCurrentPage());
        window.scrollTo(0, 0);
    };
    const onPageChange = (number) => {
        dispatch(sliceActions.changeCurrentPage(number));
        window.scrollTo(0, 0);
    };

    let { firstIndex, lastIndex } = useMemo(() => {
        let lastIndex = currentPage * perPage;
        let firstIndex = lastIndex - perPage + 1;
        return { lastIndex, firstIndex };
    }, [currentPage, perPage]);

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <>
            <SPagination>
                <SPaginationArrow left onClick={onPrevious} disabled={currentPage === 1}>
                    <SArrowLeft />
                </SPaginationArrow>
                {paginationRange.map((number, index) => {
                    if (number === DOTS) {
                        return (
                            <SPaginationNumber key={index}>
                                <SPaginationLink disabled dots>
                                    &#8230;
                                </SPaginationLink>
                            </SPaginationNumber>
                        );
                    }
                    return (
                        <SPaginationNumber key={index}>
                            <SPaginationLink
                                onClick={() => onPageChange(number)}
                                active={number === currentPage}
                            >
                                {number}
                            </SPaginationLink>
                        </SPaginationNumber>
                    );
                })}
                <SPaginationArrow right onClick={onNext} disabled={currentPage === lastPage}>
                    <SArrowRight />
                </SPaginationArrow>
            </SPagination>
            <SPageAmount>
                <SPageAmountSpan>
                    Viewing {firstIndex} - {lastIndex} of {totalCount} products
                </SPageAmountSpan>
            </SPageAmount>
        </>
    );
};

export default Pagination;
