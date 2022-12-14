import apiREST from '../AxiosInstance';

export const getProductList = () => {
  return apiREST.get('/api/product', {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    }
  })
}

export const getProductItem = (idProduct) => {
  return apiREST.get(`/api/product/${idProduct}`, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    }
  })
}

export const addProductToCart = (requestBody) => {
  return apiREST.post('/api/cart', requestBody, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    }
  })
}