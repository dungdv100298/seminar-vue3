const data = [
  {
    name: 'Áo phông',
    size: 'XXL',
    color: 'Đen'
  },
  {
    name: 'Quan dui',
    size: 'XXL',
    color: 'Đen'
  }
]

export async function fetchData() {  
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
}