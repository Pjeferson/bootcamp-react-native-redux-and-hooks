import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  Photo,
  Title,
  Price,
  AddButton,
  ProductAmountText,
  ProductAmount,
  AddButtonText,
} from './styles';

import api from '../../services/api';

export default function Main() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((amountTable, p) => {
      amountTable[p.id] = p.amount;
      return amountTable;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(p => ({
        ...p,
        formattedPrice: formatPrice(p.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <Products
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <Photo source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.formattedPrice}</Price>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={16} />
                <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
              </ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
}
