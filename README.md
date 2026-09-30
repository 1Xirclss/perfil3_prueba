# Evaluación práctica 15% — TV Explorer

Aplicación móvil en React Native con Expo que presenta los datos del estudiante y consume la API pública de [TVMaze](https://api.tvmaze.com/shows).

## Datos de entrega

- **Nombre del estudiante:** Nombre del estudiante
- **Carnet:** 20210318
- **Sección y grupo:** Sección 1B y grupo 1
- **Video demostrativo:** ( )
- **Descarga del APK:** ()
## Antes de entregar

Edita `src/config/student.js` y la sección **Datos de entrega** de este README. Reemplaza el nombre, la sección, el grupo y los dos enlaces públicos. El carnet se tomó del nombre de esta carpeta (`20210318`).

Crea un repositorio público llamado exactamente `Perfil3_NombreApellido`, tal como solicita la guía.

## Ejecutar

```bash
npm install
npm start
```

Luego escanea el código QR con Expo Go o presiona `a` para Android.

## Generar APK con EAS

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

El perfil `preview` de `eas.json` genera un APK instalable. EAS mostrará el enlace de descarga al finalizar.

## Estructura

- `src/screens`: las dos pantallas requeridas.
- `src/components/Card.js`: tarjeta reutilizable que recibe cada serie usando props .
- `src/hooks/useShows.js`: lgica de consulta a TVMaze.
- `src/navigation`: navegación Stack con React Navigation.
- `assets`: icono, splash y adaptive icon personaliados.z
