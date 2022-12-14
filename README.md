## Scripts Disponibles

Los siguientes scripts se pueden ejecutar desde la carpeta raiz del proyecto:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

La pagina se vuelve a actualizar cuando se detecta un cambio en el codigo.\

### `npm test`

Inicia las pruebas que se hayan definido
Revise el siguiente enlace [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mas información.

### `npm run build`

Construye la aplicación para producción en la carpeta`build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.


Revise el siguiente enlace [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mas información.

### `npm run lint`
Inicia la comprobación de codigo, las reglas eslint estan definidas en: .eslintrc.json.\

## Variables de Entorno en .env
### `REACT_APP_API_URL`
Es la variable de la url base de consulta, en caso no se reconozca esta por defecto se tomara http://localhost:3001
En caso esta api, este caida, la aplicación no podra mostrar correctamente las vistas

## Tecnologias/Librerias utilizadas
### `Tailwind 3`
Framework de css, para manejar los estilos de la aplicación.

### `Axios`
Libreria para el manejo de peticiones HTTP REST.

### `React Router Dom`
Libreria para el manejo de rutas en react, para el lado del cliente.

### `React Select`
Componente Select de utilidad para el manejo de selectores

### `React Query`
Libreria para react que facilita las consultas a api's, el almacenamiento en cache y la sincronización con el backend.

