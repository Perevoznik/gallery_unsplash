
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import { createStore, compose, applyMiddleware } from 'redux';
import { mainReducer } from './src/redux/reducers/mainReducer';
import { Provider } from 'react-redux';
import Gallery from './src/components/Gallery';
import ViewPhoto from './src/components/ViewPhoto';
import thunk from 'redux-thunk';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const store = createStore(mainReducer, compose(applyMiddleware(thunk)));
// const Stack = createStackNavigation();
const Stack = createStackNavigator();

const App = ()  => {
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       <View style={styles.body}>
    //         <Provider store={store}>
    //           <Gallery style={styles.container}/>
    //         </Provider>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
    
    // <Provider store={store}>
    //   <Header/>
    //   <View style={styles.container}>
    //     <Gallery/>
    //   </View>
    // </Provider>

    <Provider store={store}>
      <Header/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Gallery}/>
          <Stack.Screen name="View photo" component={ViewPhoto}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },

  container: {
    flex:1,
    flexDirection: "column"
  }
});

export default App;
