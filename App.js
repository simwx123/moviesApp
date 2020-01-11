
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import RootStack from './src/Routes';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <View style={{ flex: 1 }}>
            <RootStack />
          </View>
      </Provider>
    );
  }
}

export default App;
