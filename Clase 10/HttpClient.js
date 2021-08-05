/**
 * Patrón SINGLETON
 */
const HttpClient = (function(){

  const
    API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/',
    GET_ALL_ID = 'Client_GetAll'

  let currentInstance = null;

  class __Client {
    constructor() {
      this.prevResponse = {
        id: '',
        data: {}
      };
      console.log('Construyendo el Cliente...');
    }

    async getAll() {
      if(this.prevResponse.id != GET_ALL_ID) {
        console.log('Solicitando todos los datos desde la red...');
        const res = await fetch(API_ENDPOINT);
        const data = await res.json();
        this.prevResponse = {
          id: GET_ALL_ID,
          data: data
        };
      }
      return this.prevResponse;
    }
  }

  function getInstance() {
    if(currentInstance == null) {
      currentInstance = new __Client();
    }
    return currentInstance;
  }

  return getInstance();
})();