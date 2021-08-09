import React, { FC, Fragment, useEffect } from 'react';
import { View } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import { observer } from 'mobx-react-lite';
import { useDidShow } from '@tarojs/taro';
import './index.scss';

interface {{pascalCase name}}Props { }

/**
 * @description 
 * @author 
 * @date 
 */
const {{pascalCase name}}: FC<{{pascalCase name}}Props> = observer(() => {
  useEffect(() => {
   
  }, []);

  useDidShow(() => {});
  return (
      <View className="{{kebabCase name}}">
        {{kebabCase name}}
      </View>
  );
})
{{pascalCase name}}.displayName = "{{pascalCase name}}"

export default {{pascalCase name}};
