let startTime: Date;
let endTime: Date;

async function handleBeforeUnload() {
  endTime = new Date();
  let startTimestamp = startTime.getTime();
  let endTimestamp = endTime.getTime();
  let duration = endTimestamp - startTimestamp;
  fetch('https://getdata-narzaut.vercel.app/api/getdata');
}

export default function logVisit() {
  startTime = new Date();
  window.addEventListener('beforeunload', handleBeforeUnload);
}
