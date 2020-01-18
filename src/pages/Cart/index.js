import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  Infos,
  Photo,
  Details,
  Title,
  Price,
  DeleteButton,
  Control,
  RemoveButton,
  ProductAmount,
  AddButton,
  Subtotal,
  Total,
  TotalText,
  TotalValue,
  OrderButton,
  OrderText,
} from './styles';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

class Cart extends Component {
  increment = product => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount + 1);
  };

  decrement = product => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount - 1);
  };

  render() {
    const { cart, removeFromCart, totalFormatted } = this.props;
    return (
      <Container>
        <Products>
          {cart.map(p => (
            <Product key={String(p.id)}>
              <Infos>
                <Photo source={{ uri: p.image }} />
                <Details>
                  <Title>{p.title}</Title>
                  <Price>{p.priceFormatted}</Price>
                </Details>
                <DeleteButton onPress={() => removeFromCart(p.id)}>
                  <Icon name="delete-forever" color="#7159c1" size={24} />
                </DeleteButton>
              </Infos>
              <Control>
                <RemoveButton onPress={() => this.decrement(p)}>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={20}
                  />
                </RemoveButton>
                <ProductAmount value={String(p.amount)} />
                <AddButton onPress={() => this.increment(p)}>
                  <Icon name="add-circle-outline" color="#7159c1" size={20} />
                </AddButton>
                <Subtotal>{p.subTotalFormatted}</Subtotal>
              </Control>
            </Product>
          ))}
        </Products>
        <Total>
          <TotalText>Total</TotalText>
          <TotalValue>{totalFormatted}</TotalValue>
        </Total>
        <OrderButton>
          <OrderText>Finalizar Pedido</OrderText>
        </OrderButton>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(p => ({
    ...p,
    subTotalFormatted: formatPrice(p.price * p.amount),
  })),
  totalFormatted: formatPrice(
    state.cart.reduce((amountSum, p) => {
      return amountSum + p.price * p.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
