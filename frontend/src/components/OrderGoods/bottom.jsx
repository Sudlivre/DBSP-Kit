import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './bottom.scss'


class Bottom extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      Num: 2,
      //配送费
      sendPrice: 3,
      supportTakeBySelf: false,
      //满多少钱起送
      sendMustPrice: 20,
      allPrice: 0
    }
  }

  render() {
    let {Num, sendPrice, supportTakeBySelf, sendMustPrice, allPrice} = this.state
    return (<View className='bottom'>
      <View className="bottom_body">
        {Num ? <Text className="num">{Num}</Text> : null}
        <Image className='img' src={Num?require("../../assets/img/icon/zhima.png"):require("../../assets/img/icon/zhima.png")}/>
        <View
          className="info">{allPrice ? <Text className="price">{allPrice+"元"}</Text> :
          <Text>{sendPrice ? "另需配送费 " + sendPrice + " | " : ""}</Text>}<Text>{supportTakeBySelf ? "支持自取" : "不支持自取"}</Text></View>
        <View className="submit">{allPrice>=sendPrice?<Text className="goPay">去结算</Text>:<Text>{sendMustPrice ? sendMustPrice + "元起送" : ""}</Text>}</View>
      </View>
    </View>)
  }
}

export default Bottom;
