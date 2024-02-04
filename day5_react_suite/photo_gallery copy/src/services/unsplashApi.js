const BASE_URL = 'https://api.unsplash.com';
const BASIC_URL_OPTIONS = `/photos?client_id=${import.meta.env.VITE_UNSPLASH_KEY}&per_page=20`

export const fetchData = async (search = '', size = '') => {
    // Build final URL
    let finalUrl = BASE_URL
    if (search) {
        finalUrl = `${finalUrl}/search${BASIC_URL_OPTIONS}&query=${search}`;
    } else {
        finalUrl = `${finalUrl}${BASIC_URL_OPTIONS}`;
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
            console.log(`finalUrl : ${finalUrl}`)
            const responseJson = await response.json()
            console.log(responseJson)
            return search ? responseJson.results : responseJson;
        }

    } catch (error) {
        throw new Error('Error fetching data');
    }
};
