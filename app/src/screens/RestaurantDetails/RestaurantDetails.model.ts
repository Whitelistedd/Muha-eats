import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'
import { MenuItemType } from 'src/components/RestaurantDetails/MenuItems/MenuItems.model'

export interface RestaurantDetailsProps {
  route: RouteProp<
    { params: { name: string; image: string; menuItems: MenuItemType[] } },
    'params'
  >
  navigation: NavigationProp<ParamListBase>
}
