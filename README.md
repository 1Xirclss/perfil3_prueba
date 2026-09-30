# Fake Store Explorer — Evaluación práctica 15%

Aplicación React Native con Expo para mostrar los datos del estudiante y consultar el catálogo de Fake Store API. La organización sigue la rama `movil` de ProNatural y conserva únicamente los módulos que utiliza esta evaluación.

## Datos de entrega

- **Estudiante:** Marco Mejía
- **Carnet:** 20210318
- **Sección y grupo:** B1 · Grupo 1
- **Video demostrativo:** Pendiente de publicar
- **Descarga del APK:** Pendiente de generar y publicar

La guía pide un repositorio público con nombre `Perfil3_NombreApellido`; este repositorio todavía tiene el nombre `perfil3_prueba`. Antes de entregar, agrega los enlaces públicos del video y del APK.

## Funciones y criterios

- Splash screen e iconos personalizados configurados en `app.json` y `assets/`.
- Pantalla inicial con nombre, carnet, sección, grupo y navegación al catálogo.
- Catálogo conectado a `https://fakestoreapi.com/products`, con título, imagen y descripción de cada producto.
- `Card` reutilizable que recibe los datos del producto por props.
- Hook `useProducts` con petición asíncrona, estados de carga y error, búsqueda y actualización.
- Cliente HTTP aislado en `src/utils/apiClient.js` y URL configurada en `src/config/apiConfig.js`.
- Navegación entre las dos pantallas mediante React Navigation.
- Perfil EAS `preview` configurado para compilar un APK de Android.

## Ejecutar

```bash
npm ci
npm start
```

Escanea el QR con Expo Go o abre un emulador Android y presiona `a`. La consulta de productos requiere internet.

## Generar el APK

```bash
npm install --global eas-cli
eas login
eas build --platform android --profile preview
```

El perfil `preview` produce un APK instalable. Publica el archivo y coloca el enlace en **Datos de entrega**.

## Video demostrativo

Graba la instalación y ejecución del APK en Android. Muestra el icono y splash, los datos del estudiante, la navegación, el catálogo con imágenes y descripciones, la búsqueda y el regreso a inicio. Publica el video con acceso público y agrega el enlace arriba.

## Estructura

```text
App.js
index.js
assets/                  Icono, splash e icono adaptativo
src/
  components/            Card, botón, filas de información y carga
  config/                Datos del alumno, URL de API y colores
  hooks/useProducts.js   Consumo y filtrado de productos
  navigation/            Stack de React Navigation
  screens/               Inicio y catálogo
  styles/                Estilos globales
  utils/apiClient.js      Peticiones HTTP
```
