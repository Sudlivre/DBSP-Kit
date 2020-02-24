import Taro, { Component } from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'

import './index.scss'

class Head extends Component{
  constructor(){
    super(...arguments)
  }

  render(){
    return (<View className="head-body">
      <Image className="main-image" src={require("../../assets/img/icon/alipay.png")} />
      <View>
        <View>
          <Text>回梦螺蛳粉</Text>
        </View>
      </View>
      </View>)
  }
}
export default Head;