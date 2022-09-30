import React from 'react';
import {Image} from 'react-native';
import {StyledButton} from './index.styles';

export function CustomIcon({
  testID,
  onPress,
  disabled,
  backgroundColor,
  height,
  width,
  source,
  styles,
}) {
  return (
    <StyledButton
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      backgroundColor={backgroundColor}
      height={height}
      style={{width: width, ...styles}}>
      <Image style={{width: width, height: height}} source={source} />
    </StyledButton>
  );
}
