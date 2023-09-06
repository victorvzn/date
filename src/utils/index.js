export const formatNumber = (number) => {
  const localeDefault = 'pe-ES' // en-US, de-DE
  const options = {
    minimumFractionDigits: 2
  }

  return new Intl.NumberFormat(localeDefault, options).format(number)
}
