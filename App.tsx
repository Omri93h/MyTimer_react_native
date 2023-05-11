/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


const windowHeight = Dimensions.get('window').height;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Image style={styles.icon} source={require('./logo.png')} />
          <Text style={styles.headerText}>My Timer</Text>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>login here</Text>
          <TextInput style={styles.input} placeholder="useless placeholder">Email</TextInput>
          <TextInput style={styles.input} placeholder="useless placeholder">Phone Number</TextInput>

        </View>
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Need help? </Text>
          <Text style={styles.helpLink}>
            Contact us!
            <Image style={styles.arrowImage} source={require('./src/image/arrow.png')} />
          </Text>


        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  backGround: {
    flex: 1,
    // backgroundColor: 'pink',
    borderWidth: 4,
    borderColor: 'green',
  },
  rootContainer: {
    borderWidth: 2,
    borderColor: 'green',
    flex: 1,
    // backgroundColor: "yellow",

  },
  headerContainer: {
    width: '100%',
    height: windowHeight * 0.1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    zIndex: 1
  },
  loginContainer: {
    width: '100%',
    height: windowHeight * 0.4,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  helpContainer: {
    width: '100%',
    height: windowHeight * 0.2,
    // backgroundColor: 'magenta',
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 40,
    fontFamily: "American Typewriter"
  },
  loginText: {
    fontSize: 25,
  },
  helpText: {
    fontSize: 20,
  },
  helpLink: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',

  },
  icon: {
    width: 40,
    height: 40,
  },
  arrowImage: {
    width: 20,
    height: 20,
    borderRadius:50,
    backgroundColor:'blue',
    transform: [{ rotate: '180deg'}]
  }

});

export default App;
