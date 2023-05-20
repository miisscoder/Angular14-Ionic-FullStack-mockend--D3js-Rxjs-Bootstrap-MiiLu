
/**
 *  transform to string, eg: 100000.20 => '1,000,00.20'
 * */
export const numberCommasToString = (x: number): string => {
  var parts = String(x).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
/**
 *  '100%' => 100
 * */
export const getNumber = (percentage: string): number => {
  const n = percentage.substring(0, percentage.length - 1);
  return Number(n);
}

/**
 *  100.2 => 100
 * */
export const getInteger = (number: number): number => {
  return Math.floor(number);
}

