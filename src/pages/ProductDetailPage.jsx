import { useEffect, useState, useRef, useContext } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select'
import { getProductItem, addProductToCart } from '../api/Productos/RestProductos'
import CameraDisplay from '../components/DetailsComponents/CameraDisplay'
import FeatureDisplay from '../components/DetailsComponents/FeatureDisplay'
import BreadCrum from '../components/utilities/BreadCrum'
import { Toast } from 'primereact/toast';
import { CartContext } from '../context/CartContext'

const ProductDetailPage = () => {
  const { idProduct } = useParams();
  const { data: product, isLoading } = useQuery(['product', idProduct], () => getProductItem(idProduct))

  const [storage, setStorage] = useState();
  const [color, setColor] = useState();

  const [loadingAddCart, setLoadingAddCart] = useState(false);

  const toast = useRef(null);

  const { updateCartItems } = useContext(CartContext);

  useEffect(() => {
    if (!isLoading) {
      setStorage(product?.data[0].options.storage[0]);
      setColor(product?.data[0].options.color[0])
    }

  }, [isLoading]);

  const handleAddProductCart = async () => {
    setLoadingAddCart(true)
    const bodyRequest = {
      id: product.data[0].id,
      colorCode: color.code,
      storageCode: storage.code
    }
    await addProductToCart(bodyRequest)
      .then((succes) => {
        console.log('Exito', succes.data)
        updateCartItems(succes.data.count);
        toast.current.show({ severity: 'success', summary: 'Operación exitosa', detail: 'Se añadio el producto al carrito', life: 2000 });
      }
      ).catch((err) => {
        console.log('Fracaso', err.response.statusText)
        toast.current.show({ severity: 'error', summary: 'Ocurrio un error', detail: 'Intentelo mas tarde', life: 2000 });
      }
      ).finally(
        setLoadingAddCart(false)
      )

  }

  return (
    <div>
      <BreadCrum currentProduct={`${product?.data[0].brand} - ${product?.data[0].model}`} />
      <Toast ref={toast} />
      <Link to={'/'} className='text-sky-600 hover:bg-sky-600 hover:text-white p-2 rounded-md'>
        <span className=''><i className='pi pi-chevron-left'></i> Atras</span>
      </Link>
      <p className='text-4xl font-Aref font-bold'>
        Detalles de Producto - {product?.data[0].brand} - {product?.data[0].model}
      </p>
      <div className='grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1'>
        <div>
          <img src='/img/iphone.png' alt='Celular' className='w-auto h-[80vh] mx-auto' />
        </div>
        <div className='grid grid-rows-2'>
          <div className='m-5'>
            <ul>
              <FeatureDisplay value={product?.data[0].brand} label={'Marca:'} />
              <FeatureDisplay value={product?.data[0].model} label={'Modelo:'} />
              <FeatureDisplay value={product?.data[0].price} label={'Precio:'} extra='$' />
              <FeatureDisplay value={product?.data[0].cpu} label={'CPU:'} />
              <FeatureDisplay value={product?.data[0].ram} label={'RAM:'} />
              <FeatureDisplay value={product?.data[0].so} label={'Sistema Operativo:'} />
              <FeatureDisplay value={product?.data[0].displayResolution} label={'Resolucion de Pantalla:'} />
              <FeatureDisplay value={product?.data[0].battery} label={'Bateria:'} />
              <FeatureDisplay value={product?.data[0].dimentions} label={'Dimensiones:'} />
              <CameraDisplay primaryC={product?.data[0].primaryCamera} secondaryC={product?.data[0].secondaryCmera} />
              <FeatureDisplay value={product?.data[0].weight} label={'Peso:'} />
            </ul>

          </div>
          <div className='m-5'>
            <div className='flex flex-wrap'>
              <Select
                className='w-48 h-10 m-1'
                value={storage}
                options={product?.data[0].options.storage}
                onChange={(selectOption) => setStorage(selectOption)}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.code}
                placeholder='Almacenamiento'
              />
              <Select
                className='w-48 h-10 m-1 '
                value={color}
                options={product?.data[0].options.color}
                onChange={(selectOption) => setColor(selectOption)}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.code}
                placeholder='Colores'
              />
            </div>

            <div className='flex flex-row-reverse'>
              <button disabled={loadingAddCart} onClick={() => {
                handleAddProductCart();
              }} className='px-3 py-2 w-40 text-sm md:text-base rounded-md bg-orange-500 text-gray-200 text-center'>
                {
                  loadingAddCart ?
                    <span className='pi pi-spin pi-spinner'></span> :
                    <>
                      <span className=''> <i className='pi pi-cart-plus'></i>Añadir al carrito</span>
                    </>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage