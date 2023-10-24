import React from 'react';
import DeviceInfo from 'react-native-device-info';

const useOrientation = () => {
  const [isLnd, setIsLnd] = React.useState(false);

  DeviceInfo.isLandscape().then(isLandscape => {
    setIsLnd(isLandscape);
  });

  return { isLnd };
};

export default useOrientation;
