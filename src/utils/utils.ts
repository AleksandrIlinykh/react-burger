export function parseDay(createdAt: string) {
  const weekDay = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "субота",
    "воскресенье",
  ];

  const createdAtMonth = Number(createdAt.slice(5, 7));
  const createdAtDay = Number(createdAt.slice(8, 10));

  let currentDate = new Date();

  let result = "";

  if (
    createdAtMonth === currentDate.getMonth() + 1 &&
    createdAtDay === currentDate.getDate()
  ) {
    result += "Сегодня";
  } else {
    result += weekDay[currentDate.getDay()];
  }

  result += `, ${createdAt.slice(11, 16)} i-GMT+3`;
  return result;
}
