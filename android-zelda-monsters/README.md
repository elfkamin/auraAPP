# Ejercicio Zelda Monsters (Android Studio)

Proyecto Android en **Java**, con **API 30** y ficheros Gradle en **Groovy**.

## Qué hace
- Consume la API `https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters` con Retrofit.
- Lee el array dentro del objeto raíz `data`.
- Muestra en un RecyclerView: `name`, `description` y `dlc`.
- Guarda el listado en base de datos local SQLite usando ORMLite.

## Abrir en Android Studio
1. `File > Open` y selecciona la carpeta `android-zelda-monsters`.
2. Deja que Gradle sincronice.
3. Ejecuta en un emulador o dispositivo con API 21+.

## Dependencias usadas
- Retrofit + Gson converter.
- RecyclerView.
- ORMLite (`ormlite-android`, `ormlite-core`).
