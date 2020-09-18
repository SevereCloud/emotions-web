// from https://github.com/alex3165/react-mapbox-gl/
// MIT License
// tslint:disable-next-line:no-any
const diff = (obj1, obj2) => {
  const toMutate = {};
  Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).map(key => {
    if (obj1[key] !== obj2[key]) {
      toMutate[key] = obj2[key];
    }
  });
  return toMutate;
};

export default diff;