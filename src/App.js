import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAkJTHHshbECMBfL9FUJoPyfxkKXpIqUWY',
    authDomain: 'manager-e82e1.firebaseapp.com',
    databaseURL: 'https://manager-e82e1.firebaseio.com',
    storageBucket: 'manager-e82e1.appspot.com',
    messagingSenderId: '1037065320330'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
