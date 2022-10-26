import Bike from 'models/Bike'

export const mockedBike: Bike = {
  id: 1,
  candidateId: 5,
  name: 'Murazik, Thiel and Robel',
  type: 'Cyclocross Bicycle',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  priceByDay: 25,
  bodySize: 24,
  city: 'Manhattan',
  cardImage: 'https://cremecycles.com/images/glowne/15.jpg',
  imageUrls: [
    'https://cremecycles.com/images/glowne/15.jpg',
    'https://cremecycles.com/images/glowne/13.jpg',
    'https://cremecycles.com/images/glowne/15.jpg',
  ],
  maxLoad: 110,
  rate: 135,
  ratings: 4.8,
}

export const mockedBikesArray = [mockedBike, mockedBike, mockedBike, mockedBike]
