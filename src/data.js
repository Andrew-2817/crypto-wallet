// https://openapi.coinstats.app/

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'gghWB5lj/Ffn405TOKk5fVcL5IXnTKQzgr3eSm2ixuM='
  }
};

export let cryptoData = {};
// Создаем функцию для выполнения запроса
async function fetchCryptoData() {
  try {
    const response = await fetch('https://openapiv1.coinstats.app/coins', options);
    const data = await response.json();
    cryptoData = data; // Записываем результат в cryptoData
    console.log(cryptoData); // Выводим результат для проверки
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
// Вызываем функцию
fetchCryptoData();



export const cryptoAssets = [
  {
    id: 'bitcoin',
    amount: 0.02,
    price: 26244,
    date: new Date(),
  },
  {
    id: 'ethereum',
    amount: 5,
    price: 2400,
    date: new Date(),
  },
]
