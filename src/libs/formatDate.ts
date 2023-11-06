import { FormatOptions } from './type';

export const formatDate = (date: string): string => {
  const dateParts = date.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]) + 1;

  const newDate = new Date(Date.UTC(year, month, day));

  const options: FormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const dateCustom = newDate.toLocaleDateString('es-ES', options);

  return dateCustom === 'Invalid Date' ? '-' : dateCustom;
};
