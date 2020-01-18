import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 20px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Details = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const Control = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  border-radius: 4px;
  padding: 10px;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  min-width: 50px;
  margin: 0 5px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  font-size: 14px;
`;

export const AddButton = styled.TouchableOpacity``;

export const Subtotal = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;

export const Total = styled.View`
  margin-top: 30px;
  align-items: center;
`;
export const TotalText = styled.Text`
  font-size: 16px;
  color: #999;
  text-transform: uppercase;
`;
export const TotalValue = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
`;
export const OrderButton = styled.TouchableOpacity`
  margin-top: 45px;
  background: #7159c1;
  padding: 12px;
  border-radius: 4px;
  align-items: center;
`;
export const OrderText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
