export const localeTime = (date: string) => Intl.DateTimeFormat('ru', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Almaty',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(new Date(date));