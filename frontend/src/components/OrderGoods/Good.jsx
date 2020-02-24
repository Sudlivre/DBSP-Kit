import Taro, { Component } from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

import './index.scss'

class Good extends Component{
	constructor () {
		super(...arguments)
		this.state = {
			current: 0,
		}
	}
	handleClick (value) {
		this.setState({
			current: value
		})
	}

  render(){
    const tabList = [{ title: '点餐' }]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
      </AtTabs>)
  }
}
export default Good;