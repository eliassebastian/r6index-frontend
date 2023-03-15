import getSearch from "../fetchSearch";
import SearchResultsGrid from "../SearchResultsGrid";

interface SearchResultsProps {
    user: string;
    platform: string;
}

const SearchResults = async ({ user, platform }: SearchResultsProps) => {
    const results = await getSearch(user, platform); 
    return <SearchResultsGrid results={results}/>
}

export default SearchResults;