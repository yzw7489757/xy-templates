import React, { FC, Fragment, Component } from 'react';
import { View } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import './index.scss';

interface {{pascalCase name}}Props { }
interface {{pascalCase name}}State { }

/**
 * @description 
 * @author 
 * @date 
 */
class {{pascalCase name}} extends Component<{{pascalCase name}}Props, {{pascalCase name}}State> {
  static displayName = "{{pascalCase name}}";
  // 可以使用所有的 React 生命周期方法
  componentDidMount () {}

  // onLoad
  onLoad () {}

  // onReady
  onReady () {}

  // 对应 onShow
  componentDidShow () {}

  // 对应 onHide
  componentDidHide () {}

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh () {}

  render () {
    return (
      <View className="{{kebabCase name}}">
          {{kebabCase name}}
      </View>
    )
  }
}

export default {{pascalCase name}};
