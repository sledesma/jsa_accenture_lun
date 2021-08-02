import "reflect-metadata";

export function DataSource(name: string): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata('DS_NAME', name, target);
  }
}