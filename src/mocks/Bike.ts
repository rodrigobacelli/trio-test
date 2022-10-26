import Bike from 'models/Bike'

export const mockedBike: Bike = {
  id: 1,
  name: 'Murazik, Thiel and Robel',
  imgSrc: 'https://cremecycles.com/images/glowne/13.jpg',
  type: 'Cyclocross Bicycle',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  priceByDay: 25,
  city: 'Manhattan',
  bodySize: 24,
}

export const mockedBikesArray = [mockedBike, mockedBike, mockedBike, mockedBike]
