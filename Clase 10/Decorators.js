/**
 * Patron DECORATOR (Composición)
 */
function Jsonable(target) {
  target.json = () => JSON.stringify(target);
  return target;
}

function WithClient(target) {
  target.http = HttpClient
  return target;
}

