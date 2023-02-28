import { createContext, Dispatch, SetStateAction } from "react";

const SearchDialogContext = createContext<{ isVisible: boolean; setVisible: Dispatch<SetStateAction<boolean>>} | null>(null);

export default SearchDialogContext;
