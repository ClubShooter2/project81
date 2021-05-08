import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from '../screens/SettingScreen.js';
import CustomSideBarMenu  from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'setting'
  })