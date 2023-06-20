export const formatMoney = (value?: number): string =>
  value
    ? new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 2,
      }).format(value)
    : ''
