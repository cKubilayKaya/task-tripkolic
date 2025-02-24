const handleStartTimeTextFormat = (e, setStartTimeText, setStartTime) => {
  const value = e?.target?.value || e;
  setStartTimeText(value);
  const [hours, minutes] = value.split(":").map(Number);
  if (!isNaN(hours) && !isNaN(minutes)) {
    setStartTime(hours * 60 + minutes);
  }
};

export default handleStartTimeTextFormat;
