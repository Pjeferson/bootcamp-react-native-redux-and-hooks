import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      subTotalFormatted: formatPrice(p.price * p.amount),
    }))
  );

  const totalFormatted = useSelector(state =>
    formatPrice(
      state.cart.reduce((amountSum, p) => {
        return amountSum + p.price * p.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

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
              <DeleteButton
                onPress={() => dispatch(CartActions.removeFromCart(p.id))}
              >
                <Icon name="delete-forever" color="#7159c1" size={24} />
              </DeleteButton>
            </Infos>
            <Control>
              <RemoveButton onPress={() => decrement(p)}>
                <Icon name="remove-circle-outline" color="#7159c1" size={20} />
              </RemoveButton>
              <ProductAmount value={String(p.amount)} />
              <AddButton onPress={() => increment(p)}>
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
