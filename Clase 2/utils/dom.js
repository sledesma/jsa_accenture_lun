function dom(tag, props, children) {

  const el = document.createElement(tag)

  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const val = props[key];
      el[key] = val
    }
  }

  if(typeof children == "string") {
    // Tiene un hijo y es texto
    el.innerText = children
  } else if(Array.isArray(children)) {
    // Tiene MUCHOS hijos en el DOM
    children.forEach(element => {
      el.appendChild(element)
    });
  } else if(typeof children == "object") {
    // Tiene UN hijo
    el.appendChild(children)
  }

  return el;

}
