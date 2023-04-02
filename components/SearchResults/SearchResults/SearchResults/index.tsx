import fetchSearch from "@/lib/api/fetchSearch";
import Filter from "../../Filter/Filter";
import FilterContextProvider from "../../Filter/FilterContextProvider";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter";
import SearchResultsGrid from "../SearchResultsGrid";

interface SearchResultsProps {
    user: string;
    platform: string;
}

const SearchResults = async ({ user, platform }: SearchResultsProps) => {
    const results = await fetchSearch(user, platform); 
    return (
        <FilterContextProvider>
            <SearchAndFilter query={user}>
                <Filter results={results.data.hits}/>
                <SearchResultsGrid results={results}/>
            </SearchAndFilter>
        </FilterContextProvider>
    )
}

export default SearchResults;