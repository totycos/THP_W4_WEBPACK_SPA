const BASE_URL = `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_UNSPLASH_KEY}`;

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
