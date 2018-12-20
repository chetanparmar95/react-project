/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header} from './src/components/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header />
    );
  }
}

const styles = StyleSheet.create({
});
