import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import { getProductItem } from '../api/Productos/RestProductos'
import CameraDisplay from '../components/DetailsComponents/CameraDisplay'
import FeatureDisplay from '../components/DetailsComponents/FeatureDisplay'
import BreadCrum from '../components/utilities/BreadCrum'

const ProductDetailPage = () => {
  const { idProduct } = useParams();
  const { data: product, isLoading } = useQuery(['product', idProduct], () => getProductItem(idProduct))

  if (isLoading) {
    return (
      <div>Cargando</div>
    )
  }

  return (
    <div>
      <BreadCrum currentProduct={`${product?.data[0].brand} - ${product?.data[0].model}`}/>
      <p className='text-4xl font-Aref font-bold'>Detalles de Producto - {product?.data[0].brand} - {product?.data[0].model} </p>
      <div className='grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1'>
        <div>
          <img src='/img/iphone.png' alt='Celular' className='w-auto h-[80vh] mx-auto' />
        </div>
        <div className='grid grid-rows-2'>
          <div className='m-5'>
            <ul>
              <FeatureDisplay value={product?.data[0].brand} label={'Marca:'} />
              <FeatureDisplay value={product?.data[0].model} label={'Modelo:'} />
              <FeatureDisplay value={product?.data[0].price} label={'Precio:'} />
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
                defaultValue={product?.data[0].options.storage[0]}
                options={product?.data[0].options.storage}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.code}
                placeholder='Almacenamiento'
              />
              <Select
                className='w-48 h-10 m-1 '
                defaultValue={product?.data[0].options.color[0]}
                options={product?.data[0].options.color}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.code}
                placeholder='Colores'
              />
            </div>

            <div className='flex flex-row-reverse'>
              <button className='px-3 py-2 rounded-md bg-orange-500 text-gray-200'>
                <span className='pi pi-cart-plus'></span> Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage