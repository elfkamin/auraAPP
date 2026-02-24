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

## Cómo descargarlo en tu PC (Windows)

### Opción 1: Descargar ZIP desde GitHub
1. Entra al repositorio en GitHub.
2. Pulsa `Code` > `Download ZIP`.
3. Descomprime el ZIP en una carpeta fácil de encontrar (por ejemplo: `Documentos` o `Escritorio`).
4. Abre Android Studio y selecciona la carpeta descomprimida `android-zelda-monsters`.

### Opción 2: Clonar con Git
```bash
git clone https://github.com/elfkamin/ejercicio2-ricardo.git
cd ejercicio2-ricardo/android-zelda-monsters
```

Luego, en Android Studio: `File > Open` y selecciona esa carpeta.

## Dependencias usadas
- Retrofit + Gson converter.
- RecyclerView.
- ORMLite (`ormlite-android`, `ormlite-core`).
