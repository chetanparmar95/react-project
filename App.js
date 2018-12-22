/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style = {{flex: 1}}>
        <Header headerTitle={'Album'}/>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
