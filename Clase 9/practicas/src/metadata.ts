const metadata = new WeakMap();

export const defineMetadata = (target: Function, key: string, val: any) => {
  const currentMetadata = metadata.get(target);
  const newMetadata = Object.assign({}, currentMetadata, {
    [key]: val
  });
  metadata.set(target, newMetadata);
}

export const getMetadata = (target: Function, key: string) => {
  const targetMetadata = metadata.get(target);
  return targetMetadata[key];
}