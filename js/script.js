// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data
// Aggiungere alla pagina un’immagine, presa anch’essa da un data

Vue.config.devtools = true;

const app = new Vue({
  el: "#root",

  data: {
    title: "title from data",
    image:
      "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2020/02/9-1-1080x723.jpg?v=368099",
    number: 1,
  },
  methods: {
    increase: function () {
      this.number++;
    },
  },
});
