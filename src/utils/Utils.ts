export const getTime = (stringDate: string): string => {
  const date: Date = new Date(stringDate);
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();

  if (hours < 10) hours = `0${hours}`;

  if (minutes < 10) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
};

export const getFormattedDate = (stringDate: string): string => {
  const date = new Date(stringDate);
  const dayNumber = date.getDate();
  const month = date.getMonth();

  const monthDictionary = new Map([
    [0, 'янв'],
    [1, 'фев'],
    [2, 'мар'],
    [3, 'апр'],
    [4, 'май'],
    [5, 'июн'],
    [6, 'июл'],
    [7, 'авг'],
    [8, 'сен'],
    [9, 'окт'],
    [10, 'нояб'],
    [11, 'дек'],
  ]);

  const weekdaysDictionary = new Map([
    [0, 'вс'],
    [1, 'пн'],
    [2, 'вт'],
    [3, 'ср'],
    [4, 'чт'],
    [5, 'пт'],
    [6, 'сб'],
  ]);

  const formattedMonth = monthDictionary.get(month);
  const weekDay = weekdaysDictionary.get(date.getDay());

  return `${dayNumber} ${formattedMonth}.${weekDay}`;
};

export const getFlightDuration = (duration: number): string => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration - hours * 60;

  return `${hours} ч ${minutes} мин`;
};

export const pluralizeConnections = (count: number) => {
  const connections = count <= 1 ? 0 : count - 1;
  const lastDigit = connections % 10;
  const lastTwoDigits = connections % 100;

  let noun: string;

  if (connections === 0) {
    noun = 'Прямой';
    return `${noun}`;
  }

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    noun = 'пересадка';
  } else if (
    [2, 3, 4].includes(lastDigit) &&
    ![12, 13, 14].includes(lastTwoDigits)
  ) {
    noun = 'пересадки';
  } else {
    noun = 'пересадок';
  }

  return `${connections} ${noun}`;
};
