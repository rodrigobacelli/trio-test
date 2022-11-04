# Bike Rental Boilerplate - ReactJS

![React Native](https://img.shields.io/badge/react-18.2.0-green?style=flat-square) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat-square)

This project was created for the Trio Challenge, where candidates must create a functional system to rent bikes.

## Stack used

- ReactJS
- TypeScript
- Material UI

## How to run it

Install node modules:

```sh
yarn
```

Runs the app in the development mode.

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## How to run the tests

```sh
yarn test
```

Or use paths to run specific component/page test

```sh
yarn test <PATH_TO_COMPONENT>
```

It launches the test runner in the interactive watch mode.

## Folder structure

- [assets/](./src/assets)
  - [fonts/](./src/assets/fonts)
- [components/](./src/components)
  - [BikeCard/](./src/components/BikeCard)
  - [BikeImageList/](./src/components/BikeImageList)
  - [BikeImageSelector/](./src/components/BikeImageSelector)
  - [BikeList/](./src/components/BikeList)
  - [BikeSpecs/](./src/components/BikeSpecs)
  - [BikeType/](./src/components/BikeType)
  - [BookingAddressMap/](./src/components/BookingAddressMap)
  - [Header/](./src/components/Header)
- [mocks/](./src/mocks)
  - [Bike.ts](./src/mocks/Bike.ts)
- [models/](./src/models)
  - [Bike.ts](./src/models/Bike.ts)
- [pages/](./src/pages)
  - [BikeDetails/](./src/pages/BikeDetails)
  - [Home/](./src/pages/Home)
  - [Login/](./src/pages/Login)
- [routes/](./src/routes)
  - [app.routes/](./src/pages/app.routes.tsx)
  - [index/](./src/pages/index.tsx)
  - [paths/](./src/pages/paths.ts)
- [services/](./src/services)
  - [api/](./src/pages/api.ts)
- [styles/](./src/styles)
  - [global.css/](./src/pages/global.css)
  - [theme/](./src/pages/theme.ts)
- [utils/](./src/utils)
  - [rates/](./src/pages/rates.ts)
- [App.tsx](./src/App.tsx)
