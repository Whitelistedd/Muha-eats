import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import React from 'react'
import { themeType } from 'src/theme'
import styled from 'styled-components/native'
import { PaymentFormProps } from './PaymentForm.model'

export const PaymentForm: React.FC<PaymentFormProps> = ({
  show,
  bottomSheetRef,
}) => {
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
      snapPoints={[400]}
      enablePanDownToClose={true}
      index={-1}
    >
      <Wrap>
        <Title>w</Title>
      </Wrap>
    </Container>
  )
}

const Title = styled.Text``

const Wrap = styled(BottomSheetView)<{ theme: themeType }>`
  height: 400px;
  background-color: ${(props) => props.theme.bg};
`

const Container = styled(BottomSheet)<{ theme: themeType }>`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  z-index: 3;
`
