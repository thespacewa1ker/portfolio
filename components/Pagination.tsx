import React from 'react';
import qs from 'qs';
import { TDirection } from '../types';
import { useRouter } from 'next/router';
interface IPropType {
    page: number;
    pageCount: number;
    redirectUrl?: string;
}

type pageNumber=Number;

const Pagination = ({ page, pageCount, redirectUrl = '/blogs/' }: IPropType) => {
    
    const router = useRouter();

    const isNextDisabled = (): boolean => {
        return page >= pageCount;
    };

    const isPrevDisabled = (): boolean => {
        return page <= 1;
    };

    const handlePagination = (direction: TDirection) => {
        
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


        router.push(`${redirectUrl}?${queryString}`);
    };

    return (
        <div className="flex justify-center mt-24">
            <button
                onClick={() => handlePagination(-1)} // Previous button with direction -1
                className={`${'bg-sky-500 hover:bg-pink-400 text-grey-800  py-2 px-4 mr-6 border rounded'} ${
                    isPrevDisabled() ? 'disabled' : ''
                }`}
            >
                Previous
            </button>
            <button
                onClick={() => handlePagination(1)} // Next button with direction 1
                className={`${'bg-sky-500 hover:bg-pink-400 text-grey-800  py-2 px-4 border rounded'} ${
                    isNextDisabled() ? 'disabled' : ''
                }`}
            >
                Next
            </button>
        </div>
    );
};


export default Pagination;
