const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  await navigator.serviceWorker.register('./sw.bundle.js');
};

export default swRegister;
