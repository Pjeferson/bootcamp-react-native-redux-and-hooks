import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';
import navigationService from './src/services/navigation';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes
        ref={navigationRef => {
          navigationService.setTopLevelNavigator(navigationRef);
        }}
      />
    </Provider>
  );
}
