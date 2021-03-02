export const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const calculateDateRange = (date) => {
  const startDate = new Date(date);
  const diffDate = new Date(new Date() - startDate);
  const years = diffDate.toISOString().slice(0, 4) - 1970;
  const month = diffDate.getMonth();

  return (years ? years + ' year'+ isNeedS(years) : '') + (month ? (month +' month' + isNeedS(month)) : '')
};

const isNeedS = (count) => {
  return count > 1 ? 's ' : ' ';
};