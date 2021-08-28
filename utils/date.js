const konversiBulan = (number) => {
  switch (number) {
    case 0:
      return "Januari";
    case 1:
      return "Februari";
    case 2:
      return "Maret";
    case 3:
      return "April";
    case 4:
      return "Mei";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "Agustus";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Desember";
    default:
      break;
  }
};

const updateTime = (t) => (t < 10 ? "0" + t : t);

const generateDateString = (time) => {
  const date = new Date(time);

  return `${time.getDate()} ${konversiBulan(
    time.getMonth()
  )} ${time.getFullYear()} ${updateTime(time.getHours())}:${updateTime(
    time.getMinutes()
  )}:${updateTime(time.getSeconds())}`;
};

export { konversiBulan, updateTime, generateDateString };
