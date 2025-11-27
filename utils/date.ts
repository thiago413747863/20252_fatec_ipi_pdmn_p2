export const getDate = (date: string) => `${date.split('-').reverse().join('/')}`;

export const currentYear = () => new Date().getFullYear();
