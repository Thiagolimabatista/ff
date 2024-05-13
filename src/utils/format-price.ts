const formatPrice = (price: string) => {
  const formattedPrice = parseFloat(price).toLocaleString('pt-BR', {
    currency: 'BRL',
  });
  return formattedPrice;
};

export default formatPrice;
