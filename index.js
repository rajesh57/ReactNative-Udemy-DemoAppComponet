/**
 * @format
 */


// Import the library to help create a component 
import {AppRegistry} from 'react-native';

//Create component import from App.js
import App from './App';
import {name as appName} from './app.json';

// Render it to Device
AppRegistry.registerComponent(appName, () => App);
