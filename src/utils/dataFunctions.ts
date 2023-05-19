export const formatByte = (bytes: number, decimals: number = 2): string => {
  const k = 1024;
  const dm = decimals < 0? 0:decimals;
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const decimalToRGB = (decimal: number): {r: number, g: number, b: number} => {
  return {
    r: (decimal >> 16) & 0xff,
    g: (decimal >> 8) & 0xff,
    b: decimal & 0xff,
  };
};