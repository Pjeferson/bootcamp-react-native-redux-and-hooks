import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  flex: 0;
  background: red; /*Search SafeAreaView bug */
  flex-direction: row;
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

export const CartContainer = styled.View`
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
