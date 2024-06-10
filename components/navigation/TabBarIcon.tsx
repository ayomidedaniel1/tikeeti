// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function TabBarFontIcon({ style, ...rest }: IconProps<ComponentProps<typeof FontAwesome>['name']>) {
  return <FontAwesome size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
export function TabBarMaterialIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialCommunityIcons>['name']>) {
  return <MaterialCommunityIcons size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
