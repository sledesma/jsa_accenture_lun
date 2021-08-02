/*
// 1. El depósito de metadatos
const metadatos = new WeakMap(); // un objeto en el cual las claves no son SOLO texto ni numero

// 2. La escritura de metadatos
function Controller(path: string) {
  return (target: any) => {
    console.log(typeof target)
    const currentMetadata = metadatos.get(target);
    const newMetadata = Object.assign({}, currentMetadata, {
      'CONTROLLER_PATH': path
    });
    metadatos.set(target, newMetadata);
  }
}
@Controller('/')
class HomeController {}

// 3. La lectura y procesamiento de metadatos
console.log(metadatos.get(HomeController))
*/