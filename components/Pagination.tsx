import React from 'react';
import qs from 'qs';
import { TDirection } from '../types';
import { useRouter } from 'next/router';
interface IPropType {
    page: number;
    pageCount: number;
    redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = '/blogs' }: IPropType) => {
    const router = useRouter();

    console.log("router",router);

    const isNextDisabled = (): boolean => {
        return page >= pageCount;
    };

    const isPrevDisabled = (): boolean => {
        return page <= 1;
    };

    const handlePagination = async (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) {
            return;
        }

        if (direction === -1 && isPrevDisabled()) {
            return;
        }
        const queryString = qs.stringify({
            ...router.query,
            page: page + direction,
        });

        console.log("queryString", queryString);
        router.push(`${redirectUrl}?${queryString}`);
    };
    return (
        <div className="flex justify-center mt-24">
            <button
                onClick={() => handlePagination(-1)}
                className={`${'bg-sky-500 hover:bg-pink-400 text-grey-800  py-2 px-4 mr-6 border rounded'} ${
                    isPrevDisabled() ? 'disabled' : ''
                }`}>
                Previous
            </button>
            <button
                onClick={() => handlePagination(1)}
                className={`${'bg-sky-500 hover:bg-pink-400 text-grey-800  py-2 px-4 border rounded'} ${
                    isNextDisabled() ? 'disabled' : ''
                }`}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
