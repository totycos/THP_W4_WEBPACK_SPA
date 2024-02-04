const BASE_URL = 'https://api.unsplash.com';
const BASIC_URL_OPTIONS = `/photos?client_id=${import.meta.env.VITE_UNSPLASH_KEY}&per_page=20`

export const fetchData = async (search, size, page) => {
    // Build final URL
    let finalUrl = BASE_URL
    if (search) {
        finalUrl = `${finalUrl}/search${BASIC_URL_OPTIONS}&page=${page}&query=${search}`;
    } else {
        finalUrl = `${finalUrl}${BASIC_URL_OPTIONS}&page=${page}`;
    }

    if (size) {
        finalUrl = `${finalUrl}&w=${size}`;
    }

    try {
        const response = await fetch(finalUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else {
            const responseJson = await response.json()
            return search ? responseJson.results : responseJson;
        }

    } catch (error) {
        throw new Error('Error fetching data');
    }
};
