import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  Logo,
  Title,
  Price,
  AddButton,
  ProductAmountText,
  ProductAmount,
  AddButtonText,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  handleAddProduct = id => {
    console.log(id);
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Products
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <Logo source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={16} />
                  <ProductAmountText>{3 || 0}</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
