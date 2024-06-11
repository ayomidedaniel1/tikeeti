import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { Linking } from 'react-native';

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | false>(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [address, setAddress] = useState<{ state: string; country: string; } | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setPermissionDenied(true);
          console.log('Permission to access location was denied');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);

        const addressResponse = await Location.reverseGeocodeAsync(currentLocation.coords);
        const addressData = addressResponse[0];

        if (addressData.region && addressData.country) {
          setAddress({
            state: addressData.region,
            country: addressData.country,
          });
        } else {
          setAddress(null);
        }
      } catch (error) {
        console.log('Error getting location ', error);
        setLocation(false);
      }
    };

    getLocation();
  }, []);

  const handleOpenSettings = async () => {
    await Linking.openSettings();
  };

  return { location, permissionDenied, handleOpenSettings, address };
};