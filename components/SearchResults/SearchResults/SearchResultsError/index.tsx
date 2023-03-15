'use client';

import { useLayoutEffect } from "react";

interface SearchResultsErrorProps {
    error?: string;
    reset?: () => void;
}

const SearchResultsError = ({ error, reset }: SearchResultsErrorProps) => {

    useLayoutEffect(() => {
        
    }, [error])

    return (
        <div>
            <h1>{error}</h1>
        </div>
    )
};

export default SearchResultsError;