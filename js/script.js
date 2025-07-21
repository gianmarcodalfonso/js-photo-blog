const cardContainer = document.getElementById(`card-container`);
const cardDataApi = "https://lanciweb.github.io/demo/api/pictures/"

const cardMaker = ((container) => {
  container.html = ``
  axios.get(cardDataApi).then((resp) => {
    cardDataApi.forEach(element => {
      let title = resp.data.url
      let date = resp.data.url
      let url = resp.data.url
      container.innerHtml += `<div class="col-12 col-md-6 col-lg-4">
      <div class="card my-3">
          <div class="card p-3">
              <img src="${url}" class="card-img-top" alt="...">
            <img class="pin" src="./img/pin.svg" alt="">
            <div class="card-body px-0 pb-0">
                <p class="card-text">${title} in data: ${date}</p>
            </div>
          </div>
        </div>
      </div>`
    });
  })
})
