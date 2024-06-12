import Header from '@/components/Header';
import { useLocation } from '@/hooks/useLocation';
import { fireEvent, render } from '@testing-library/react-native';
import { Alert } from 'react-native';

jest.mock('@/hooks/useLocation');
jest.spyOn(Alert, 'alert');

const mockUseLocation = useLocation as jest.Mock;

describe('Header component', () => {
  it('renders correctly', () => {
    // Mock the useLocation hook to return a mock value with address
    mockUseLocation.mockImplementation(() => ({
      handleOpenSettings: jest.fn(),
      permissionDenied: false,
      address: { state: 'California', country: 'USA' },
    }));

    // Render the Header component
    const { getByText } = render(<Header />);

    // Expect the text "California, USA" to exist
    expect(getByText('California, USA')).toBeTruthy();
  });

  it('renders address when available', () => {
    // Mock the useLocation hook to return a mock value with address
    mockUseLocation.mockImplementation(() => ({
      handleOpenSettings: jest.fn(),
      permissionDenied: false,
      address: { state: 'California', country: 'USA' },
    }));

    // Render the Header component
    const { getByText } = render(<Header />);
    expect(getByText('California, USA')).toBeTruthy();
  });

  it('shows alert when permission is denied', () => {
    // Mock the useLocation hook to return a mock value with permissionDenied set to true
    mockUseLocation.mockImplementation(() => ({
      handleOpenSettings: jest.fn(),
      permissionDenied: true,
      address: null,
    }));

    // Render the Header component
    render(<Header />);

    // Expect the alert to be called with the correct arguments
    expect(Alert.alert).toHaveBeenCalledWith(
      'Permission denied',
      'You denied Tiketti permission',
      expect.arrayContaining([
        expect.objectContaining({
          text: 'Go to settings',
          onPress: expect.any(Function),
        }),
        expect.objectContaining({
          text: 'OK',
          onPress: expect.any(Function),
        }),
      ])
    );
  });
});