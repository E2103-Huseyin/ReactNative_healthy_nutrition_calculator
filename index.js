/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './src/Router';
import MyRouter from './src/MyRouter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyRouter);
