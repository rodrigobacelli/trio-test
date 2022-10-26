import Bike from 'models/Bike'

export const mockedBike: Bike = {
  id: 1,
  name: 'Murazik, Thiel and Robel',
  imgSrc:
    'https://a-static.mlcdn.com.br/1500x1500/bike-aro-29-mnc-preta-e-laranja-de-aluminio-pr-trilha-monaco/campelbike/da7f9126961511ebab9f4201ac1850e0/3195fad563221733eadf6a673bfe00b4.jpeg',
  type: 'Cyclocross Bicycle',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  priceByDay: 25,
  city: 'Manhattan',
  bodySize: 24,
}

export const mockedBikesArray = [mockedBike, mockedBike, mockedBike, mockedBike]
