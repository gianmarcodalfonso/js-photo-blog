const cardContainer = document.getElementById('card-container');
const cardDataApi = "https://lanciweb.github.io/demo/api/pictures/"

const cardMaker = (container) => {
  container.innerHTML = ``;

  axios.get(cardDataApi).then((resp) => {
    resp.data.forEach(element => {
      let title = element.title;
      let date = element.date;
      let url = element.url;

      container.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card my-3">
            <div class="card p-3">
              <img src="${url}" class="card-img-top" alt="...">
              <img class="pin" src="./img/pin.svg" alt="">
              <div class="card-body px-0 pb-0">
                <p class="card-text">${title} in data: ${date}</p>
              </div>
            </div>
          </div>
        </div>`;
    });
  });
};

cardMaker(cardContainer);
