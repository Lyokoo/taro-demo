import * as React from 'react';
// import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class Index extends React.Component {

  componentDidMount() {
    console.log('didMount');
    // @ts-ignore
    const io = tt.createIntersectionObserver(this);
    console.log('io 实例:', io);
    io.relativeToViewport().observe('.circle-container', res => {
      console.log('res:', res);
    });
  }

  render() {
    return (
      <View className='index'>
        <View>👇👇👇 向下滚动 👇👇👇👇</View>
        <View>👇👇👇 向下滚动 👇👇👇👇</View>
        <View>👇👇👇 向下滚动 👇👇👇👇</View>
        <View
          onClick={() => {
            // @ts-ignore
            tt.showToast({
              title: 'aaaa'
            });
          }}
          className='circle-container'
          style={{
            height: '100rpx',
            backgroundColor: 'green',
            marginTop: '2000rpx',
            marginBottom: '100rpx',
            color: '#fff'
          }}
        >
          我的出现有触发 callback 吗?
        </View>
      </View>
    )
  }
}
