import mockData from './mockData.json';

export const getMockData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // simulate delay
  });
};
