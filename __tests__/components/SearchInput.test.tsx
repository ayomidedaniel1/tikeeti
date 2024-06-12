import SearchInput from '@/components/SearchInput';
import { fireEvent, render } from '@testing-library/react-native';

describe('SearchInput component', () => {
  it('renders correctly', () => {
    // Render the SearchInput component with mock setSearchQuery and handleSearch functions
    const { getByPlaceholderText } = render(<SearchInput searchQuery='' setSearchQuery={jest.fn()} handleSearch={jest.fn()} />);

    // Expect the input field with placeholder text "Adventure movies" to exist
    expect(getByPlaceholderText('Adventure movies')).toBeTruthy();
    expect(getByPlaceholderText('Adventure movies')).toMatchSnapshot();
  });

  it('calls setSearchQuery and handleSearch when text changes', () => {
    // Create mock functions for setSearchQuery and handleSearch
    const setSearchQueryMock = jest.fn();
    const handleSearchMock = jest.fn();

    // Render the SearchInput component with the mock functions
    const { getByPlaceholderText } = render(<SearchInput searchQuery='' setSearchQuery={setSearchQueryMock} handleSearch={handleSearchMock} />);
    const input = getByPlaceholderText('Adventure movies');

    // Simulate a text change event on the input field and expecting functions to be called once
    fireEvent.changeText(input, 'new search query');
    expect(setSearchQueryMock).toHaveBeenCalledTimes(1);
    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });
});