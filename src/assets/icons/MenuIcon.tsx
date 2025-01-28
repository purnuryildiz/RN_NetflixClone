import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const MenuIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.45}
      d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
      fill={props.color || 'black'}
    />
  </Svg>
);
