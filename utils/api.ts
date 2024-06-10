import axios from 'axios';

const API_URL = 'https://frontend-test-api.fly.dev/movies';

export const fetchMovies = async (searchQuery: string) => {
  try {
    const response = await axios.get(`${API_URL}?search=${searchQuery}`);

    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch movies');
    }

  } catch (error) {
    throw new Error('An error occurred while fetching movies');
  }
};
