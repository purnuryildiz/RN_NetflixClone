import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const HomeIcon = props => (
  <Svg
    width={23}
    height={25}
    viewBox="0 0 23 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.50903 21.1542C4.50903 21.1542 4.12517 13.1284 4.00903 11.1542L2.00903 12.6542L1.00903 11.1542C2.99418 9.40046 11.509 3.15417 11.509 3.15417C11.509 3.15417 19.2352 9.33991 21.509 11.1542L20.509 12.6542L18.509 11.1542C18.3935 13.156 18.2161 21.1542 18.2161 21.1542H4.50903ZM6.00903 19.1542H16.509L17.009 10.1542L11.509 5.65417L5.50903 10.1542L6.00903 19.1542Z"
      fill={props.color || 'black'}
    />
  </Svg>
);
