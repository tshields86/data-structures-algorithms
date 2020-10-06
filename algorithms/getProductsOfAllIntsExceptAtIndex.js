const getProductsOfAllIntsExceptAtIndex = integers => {
  const productsExceptIndex = [];

  let productSoFar = 1;
  for (let i = 0; i < integers.length; i++) {
    productsExceptIndex[i] = productSoFar;
    productSoFar *= integers[i];
  }

  productSoFar = 1;
  for (let i = integers.length - 1; i >= 0; i--) {
    productsExceptIndex[i] *= productSoFar;
    productSoFar *= integers[i];
  }

  return productsExceptIndex;
};