import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Error404 = () => {
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => setAnimation(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [])

  return (
    <div>
      <div className={`${animation ? 'loading' : ''} body-tag mt-5`}>
        <Link to={'/'} className='text-sky-600 hover:bg-sky-600 hover:text-white p-2 rounded-md'>
          <span className='font-semibold'><i className='pi pi-chevron-left'></i> Volver al Inicio</span>
        </Link>
        <div class="cornerposition">
          <h1 className="text-4xl font-bold text-fuchsia-800">Pagina no encontrada</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            La pagina a la que intenta acceder no existe.
          </h2>

          <div className="mx-auto text-center error-404 font-bold text-fuchsia-800">
            404
          </div>

          <div class="gears m-10">
            <div class="gear one">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <div class="gear two">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <div class="gear three">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404