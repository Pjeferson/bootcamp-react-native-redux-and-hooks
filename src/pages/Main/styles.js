import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #141419;
`;

export const Products = styled.FlatList``;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const Photo = styled.Image`
  height: 200px;
  width: 200px;
  background: #eee;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const Price = styled.Text`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
export const AddButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
