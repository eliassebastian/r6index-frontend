import { createContext, Dispatch, SetStateAction } from "react";

const SearchDialogContext = createContext<{ isVisible: boolean; setVisible: Dispatch<SetStateAction<boolean>>}>( { isVisible: false, setVisible: () => {}} );

export default SearchDialogContext;
