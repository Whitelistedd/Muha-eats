import { NavigationProp, ParamListBase } from '@react-navigation/native'

export interface PopUpButtonProps {
  navigation: NavigationProp<ParamListBase>
  textList: string[]
  style?: any
  navigateTo: string
}
