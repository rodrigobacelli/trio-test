export const getQuantityLabel = (quantity: number): string => {
  const properBikePlural = quantity > 1 ? 'bikes' : 'bike'
  return `${quantity} ${properBikePlural} to rent`
}
