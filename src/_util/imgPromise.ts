const imgPromise = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve();
    i.onerror = reject;
    i.src = src;
  });
};

export default imgPromise;
