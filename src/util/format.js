/*
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
*/

export const formatPrice = value => `R$ ${value}`;
