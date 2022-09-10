import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import React, { useEffect } from 'react'
import { Devider } from 'src/components/Devider/Devider'
import { PopUpButton } from 'src/components/PopUpButton/PopUpButton'
import { useAppSelector } from 'src/redux/store/store'
import { themeType } from 'src/theme'
import styled from 'styled-components/native'
import { DeliveryMethods } from '../DeliveryMethods/DeliveryMethods'
import { LocationButton } from '../LocationButton/LocationButton'
import { OrderButton } from '../OrderButton/OrderButton'
import { PaymentMethods } from '../PaymentMethods/PaymentMethods'
import { PaymentFormProps } from './PaymentForm.model'

export const PaymentForm: React.FC<PaymentFormProps> = ({
  show,
  bottomSheetRef,
  navigation,
}) => {
  const cartTotal = useAppSelector((state) => state.total)

  useEffect(() => {}, [])

  return (
    <Container
      backgroundStyle={{ backgroundColor: '#EDEDED' }}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
      ref={bottomSheetRef}
      snapPoints={[320]}
      enablePanDownToClose={true}
      index={-1}
    >
      <Wrap>
        <LocationButton style={{ marginBottom: 15 }} />
        <DeliveryMethods />
        <PaymentMethods />
        <PopUpButton
          textList={['Заказать', `${cartTotal} ₽`]}
          style={{
            backgroundColor: '#2fb90d',

            marginRight: 0,
            marginLeft: 0,
          }}
          navigation={navigation}
          onPress={() => {}}
          navigateTo={'Done'}
        />
      </Wrap>
      {/* <OrderButton /> */}
    </Container>
  )
}

const Title = styled.Text``

const Wrap = styled(BottomSheetView)<{ theme: themeType }>`
  height: 100%;
  padding: 0px 20px 23px 20px;
  background-color: ${(props) => props.theme.bg};
`

const Container = styled(BottomSheet)<{ theme: themeType }>`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  z-index: 3;
`
