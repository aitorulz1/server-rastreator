# Rastreator APP <img src="./assets/images/readme-rastreator.png" width="200px" />
Rastreator es el mayor buscador de seguros y, en esta aplicación podrás encontrar los seguros de coches y préstamos catalogados por coberturas y ordenados de menor a mayor precio.
Los préstamos están ordenados de menor a mayor a partir de los 10.000€.


# Primeros pasos
- Fork this Repo
- Clone this Repo "git clone + url"


# Cliente
Una vez tengas clonado el repositorio de cliente, instala todas las dependencias | npm install

```sh
npm i
```

Podemos arrancar la aplicación usando 

```sh
npm start
```
La aplicación se abrirá en [http://localhost:3000/]


# Servidor
Una vez tengas clonado el repositorio de cliente, instala todas las dependencias | npm install
Podemos arrancar el servidor de forma paralela, usando `npm run server`

```sh
npm run server
```

El servidor corre en [http://localhost:4000/]
Podremos comrobar los endpoints en:

Los endpoints son:

- [http://localhost:4000/insurances] Para los seguro
- [http://localhost:4000/loans] Para los préstamos


# Usabilidad
Para dispositivos móviles, podrás seleccionar la fila de precios que más teinterese y podrás deslizarla a modo carrousel para poder ver todos los seguros y tipos de préstamos.

<img src="./assets/images/responsive-screen.jpg" />