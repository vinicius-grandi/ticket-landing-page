function createList(list, item) {
  const li = document.createElement('li');
  li.innerHTML = `
  <p>
    <img src="${item.home_flag}" alt="${item.home_team_en} flag"></img>
    <span>${item.home_team_en}</span>
  </p>
  <p>
    <img src="${item.away_flag}" alt="${item.away_team_en} flag"></img>
    <span>${item.away_team_en}</span>
  </p>
  <span>${new Date(item.local_date).toString()}</span>
  `;
  list.append(li);
}

window.onload = async () => {
  const calendarSection = document.querySelector('#calendar-section');
  const loading = document.createElement('p');
  loading.innerText = 'LOADING...';
  calendarSection.appendChild(loading)
  try {
    const response = await fetch('https://interesting-sphenoid-chrysanthemum.glitch.me', {
      headers: {
        'Access-Control-Allow-Origin': 'cross-site'
      }
    });
    const data = await response.json();
    data.data.slice(0, 3).forEach((val) => {
      createList(calendarSection, val)
    });
  } catch (error) {
    const p = document.createElement('p');
    p.innerText = 'Desculpe, erro no servidor';
    calendarSection.append(p);
  }
  calendarSection.removeChild(loading);
};
