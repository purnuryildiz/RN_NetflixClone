import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';
export const SearchIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G opacity={0.45}>
      <Path
        d="M21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11ZM5.01838 11C5.01838 14.8558 8.14416 17.9816 12 17.9816C15.8558 17.9816 18.9816 14.8558 18.9816 11C18.9816 7.14416 15.8558 4.01838 12 4.01838C8.14416 4.01838 5.01838 7.14416 5.01838 11Z"
        fill={props.color || 'black'}
      />
      <Rect
        x={17.4727}
        y={16}
        width={6.0196}
        height={2}
        transform="rotate(47.4199 17.4727 16)"
        fill={props.color || 'black'}
      />
    </G>
  </Svg>
);
