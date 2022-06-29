const currencyFormatter = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' });

export const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
export const formatCurrency = (value: number) => currencyFormatter.format(value);
