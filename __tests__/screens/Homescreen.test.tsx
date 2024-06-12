import HomeScreen from '@/app/(tabs)';
import { useQuery } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react-native';
import { fetchMovies } from '@/utils/api';
import Toast from 'react-native-root-toast';

jest.mock('@/utils/api');
jest.mock('@tanstack/react-query');
jest.mock('react-native-root-toast');

const mockUseQuery = useQuery as jest.Mock;
const mockFetchMovies = fetchMovies as jest.Mock;
const mockToastShow = Toast.show as jest.Mock;

describe('HomeScreen component', () => {
  it('renders correctly', () => {
    // Mock the useQuery hook to return a mock value
    mockUseQuery.mockImplementation(() => ({
      data: [],
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    }));

    // Render the HomeScreen component
    const { getByText } = render(<HomeScreen />);

    // Expect the text "Search results" to exist
    expect(getByText('Search results')).toBeTruthy();
  });

  it('calls refetch when search query changes', () => {
    // Create a mock function for refetch
    const refetchMock = jest.fn();

    // Mock the useQuery hook to return a mock value with refetch function
    mockUseQuery.mockImplementation(() => ({
      data: [],
      isError: false,
      isLoading: false,
      refetch: refetchMock,
    }));

    // Mock the fetchMovies function to return a mock value
    mockFetchMovies.mockImplementation(() => Promise.resolve([]));

    // Render the HomeScreen component
    const { getByPlaceholderText } = render(<HomeScreen />);

    // Get the input field with placeholder text "Adventure movies"
    const input = getByPlaceholderText('Adventure movies');

    // Simulate a text change event on the input field with refetch being called once
    fireEvent.changeText(input, 'new search query');

    expect(refetchMock).toHaveBeenCalledTimes(1);
  });

  it('renders error message when isError is true', () => {
    // Mock the useQuery hook to return a mock value with isError set to true
    mockUseQuery.mockImplementation(() => ({
      data: [],
      isError: true,
      isLoading: false,
      refetch: jest.fn(),
    }));

    // Mock the Toast.show function to prevent it from throwing an error
    mockToastShow.mockImplementation(() => jest.fn());

    // Render the HomeScreen component with error message existing
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Error fetching movies. Please try again.')).toBeTruthy();
  });

  it('renders movie list when data is available', () => {
    // Create a mock movie list
    const movies = [
      { title: 'Movie 1', image: 'image1', rating: 4, category: 'Action', duration: 120 },
      { title: 'Movie 2', image: 'image2', rating: 3, category: 'Comedy', duration: 90 },
    ];

    // Mock the useQuery hook to return a mock value with data
    mockUseQuery.mockImplementation(() => ({
      data: movies,
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    }));

    // Get all elements with a title property with movie array to have 2 items
    const { getAllByText } = render(<HomeScreen />);
    expect(getAllByText(/Movie [1-2]/)).toHaveLength(2);
  });
});