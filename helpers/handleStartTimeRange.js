const handleStartTimeRange = (e, setStartTime, setStartTimeText, setStartTimeReducer, dispatch) => {
  const value = e?.target?.value || e;
  setStartTime(value);
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  setStartTimeText(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
  dispatch(setStartTimeReducer(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`));
};

export default handleStartTimeRange;
