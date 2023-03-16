import FilterContextProvider from "../../Filter/FilterContextProvider";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter";
import getSearch from "../fetchSearch";
import SearchResultsGrid from "../SearchResultsGrid";

interface SearchResultsProps {
    user: string;
    platform: string;
}

const SearchResults = async ({ user, platform }: SearchResultsProps) => {
    const results = await getSearch(user, platform); 
    return (
        <FilterContextProvider>
            <SearchAndFilter query={user}>
                <div></div>
                <SearchResultsGrid results={results}/>
            </SearchAndFilter>
        </FilterContextProvider>
    )
}

export default SearchResults;