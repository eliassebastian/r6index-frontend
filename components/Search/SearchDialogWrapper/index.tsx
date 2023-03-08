'use client';

import SearchDialogContext from "@/context/SearchDialogContext";
import { cloneElement, useState, type ReactElement } from "react";
import SearchDialog from "../SearchDialog";

interface SearchDialogProps {
    children: React.ReactNode;
}

const SearchDialogWrapper = ({ children }: SearchDialogProps) => {

    const [isVisible, setVisible] = useState(false);
    const clonedElement = cloneElement(children as React.ReactElement, { onClick: () => { setVisible(value => !value) } });

    return (
        <>
            { clonedElement }
            <SearchDialogContext.Provider value={{ isVisible, setVisible }}>
                <SearchDialog/>
            </SearchDialogContext.Provider>
        </>
    )
};


export default SearchDialogWrapper;