//Prendo dal DOM la row container delle card e il link per i dati delle card
const cardContainer = document.getElementById('card-container');
const cardDataApi = "https://lanciweb.github.io/demo/api/pictures/"
//prendo dal Dom quello che mi serve per l'overlay
const overlay = document.getElementById('overlay');
const overlayImg = overlay.querySelector('img');
const closeBtn = overlay.querySelector('button');

//arrow funtion per creare le card
const cardMaker = (container) => {
  container.innerHTML = ``;

  //ajax per il recupero degli oggetti
  axios.get(cardDataApi).then((resp) => {
    //per ogni ogggetto creo la card inserendo le informazione richieste tramite la chiamata ajax
    resp.data.forEach(element => {
      //creo delle variabili con gli attributi dell'oggetto
      let { title, date, url } = element;

      //inserisco nell'html le card con i dati recuperati
      container.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card my-3">
            <div class="p-3">
              <img src="${url}" class="card-img-top" alt="...">
              <img class="pin" src="./img/pin.svg" alt="">
              <div class="card-body px-0 pb-0">
                <p class="card-text">${title} in data: ${date}</p>
              </div>
            </div>
          </div>
        </div>`;
    });

    //prendo tutte le card-img-top dal DOM
    const cardImgs = document.querySelectorAll(`.card-img-top`)
    
    //per ogni cardimg aggiungo un even listener per il click
    cardImgs.forEach(img => {
      img.addEventListener('click', e => {
        e.preventDefault();
        overlayImg.src = img.src;
        overlay.classList.remove('d-none');
      });
    });
    
  });
};

//svolgo la funzione
cardMaker(cardContainer);

//bottone di chiusura dell'overlay
closeBtn.addEventListener(`click`, e => {
  e.preventDefault();
  overlay.classList.add(`d-none`)
})