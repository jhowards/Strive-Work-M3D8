window.onload = async () => {
  const results = await grabAPI();
  console.log(results[0]);
  generateCards(results);
};

const grabAPI = async () => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MjkyOTAyMDYsImV4cCI6MTYzMDQ5OTgwNn0.JjiJ0RiH_DlQ-i5jIS49J5eC2sVrZsDjxUCuFISpZx4"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    requestOptions
  );

  results = await response.json();

  let addedData = JSON.parse(sessionStorage.getItem("product"));

  if (addedData !== null) {
    results.push(addedData);
  }

  return results;
};

const generateCards = (results) => {
  const grabCards = document.getElementById("cardList");
  grabCards.innerHTML = results.map(function (results) {
    return `
            <div class="card">
            <img src="${results.imageUrl}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${results.brand}</h5>
              <p class="card-text">
              ${results.description}
              </p>
              <p class="card-text">
              £${results.price}
              </p>
              <p class="card-text">
                <small class="text-muted">${results.userId}</small>
              </p>
            </div>
          </div>
            `;
  });
};
