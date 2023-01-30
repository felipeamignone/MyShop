export const formatPriceToLocaleString = (price: number) => price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
})