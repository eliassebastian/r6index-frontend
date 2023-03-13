
const getSearch = async (user: string, platform: string) => {
    const res = await fetch(`https://37578276-6c45-4460-b201-a598226c9cf5.mock.pstmn.io/v1/search?p=${platform}&q=${user}`, { cache: 'no-store' });

    //throw new Error('Failed to fetch data');

    if (res.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default getSearch;
