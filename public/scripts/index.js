window.onload = async () => {
  const response = await fetch('https://interesting-sphenoid-chrysanthemum.glitch.me', {
    headers: {
      'Access-Control-Allow-Origin': 'cross-site'
    }
  });
  const data = await response.json();
  console.log(data);
};

// fetch('http://api.cup2022.ir/api/v1/match', {

// });
