import type { SearchResult } from "@/types/SearchResults";

const fetchSearch = async (user: string, platform: string) => {
    const res = await fetch(`http://127.0.0.1:8080/v1/search?p=${platform}&q=${user}`, { cache: 'no-store' });

    if (res.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    const results: SearchResult = await res.json();
    return results;
}

export default fetchSearch;