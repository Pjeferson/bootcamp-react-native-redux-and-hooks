import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

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

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(p => ({
      ...p,
      formattedPrice: formatPrice(p.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
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
              <Price>{item.formattedPrice}</Price>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
