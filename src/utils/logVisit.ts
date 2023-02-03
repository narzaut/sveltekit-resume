async function handleBeforeUnload() {

  fetch("https://getdata-narzaut.vercel.app/api/send-log")
}

export default function logVisit() {
  window.addEventListener('beforeunload', handleBeforeUnload);
}
