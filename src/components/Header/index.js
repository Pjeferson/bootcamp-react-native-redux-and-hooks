import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import logo from '../../assets/images/logo.png';

import {
  Wrapper,
  Container,
  Logo,
  CartContainer,
  ProductsCounter,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Logo source={logo} resizeMode="cover" />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ProductsCounter>{cartSize}</ProductsCounter>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
