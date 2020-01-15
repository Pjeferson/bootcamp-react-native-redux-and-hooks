import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import {
  Wrapper,
  Container,
  Logo,
  CartContainer,
  ProductsCounter,
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo source={logo} resizeMode="cover" />
        <CartContainer>
          <Icon name="shopping-basket" color="#fff" size={26} />
          <ProductsCounter>3</ProductsCounter>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}
