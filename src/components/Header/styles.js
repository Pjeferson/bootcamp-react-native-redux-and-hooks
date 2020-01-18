import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: red; /*Search SafeAreaView bug on android*/
  flex-direction: row;
  margin: 25px 0 35px 0;
`;

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 185px;
`;

export const CartContainer = styled(RectButton)`
  /*Adapting TouchableOpacity*/
  height: 24px;
  width: 24px;
`;

export const ProductsCounter = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 12px;
  background: #7159c1;
  padding: 1px;
  height: 18px;
  width: 18px;
  border-radius: 9px;
  position: absolute;
  top: -8px;
  right: -8px;
  overflow: hidden;
`;
