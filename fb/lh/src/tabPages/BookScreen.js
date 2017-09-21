/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 16:20:20 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-20 11:48:43
 */

import React from 'react';
import { Button, } from 'react-native';


export default class BookScreen extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="通讯录页面"
      />
    );
  }
}
