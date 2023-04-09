import fetchData from "./fetch-data.js"; 

const days = document.querySelectorAll('.day');
const dataStats = document.querySelectorAll('[data-stat]');

async function fetchUse() {
  const data = await fetchData();
  
  let maxAmount = 0;
  let maxAmountIndex = -1;

  dataStats.forEach((stat, index) => {
    stat.setAttribute('data-stat', `$${data[index].amount}`);
    stat.style.height = `${(data[index].amount / 52.36) * 100}%`;

    if (data[index].amount > maxAmount) {
      maxAmount = data[index].amount;
      maxAmountIndex = index;
    }
  });

  if (maxAmountIndex >= 0) {
    dataStats[maxAmountIndex].style.backgroundColor = 'hsl(186, 34%, 60%)';
  }
  
  days.forEach((day, index) => {
    day.textContent = data[index].day;
  });
}

fetchUse();
