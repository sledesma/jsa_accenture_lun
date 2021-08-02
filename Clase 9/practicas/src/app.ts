import "reflect-metadata"

export default class App {

  constructor(dataSources: Function[]) {
    dataSources.forEach(ds => {
      console.log('Leyendo el DataSource...', Reflect.getMetadata('DS_NAME', ds));
    })
  }

}