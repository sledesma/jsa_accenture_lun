// Gestionar la REACTIVIDAD - Todos los cambios a la UI ocasionados por interacción del usuario, una vez que se ha completado la carga inicial
const rt = new EventTarget();
const rt_events = {
  mainUpdate: (pagActual) => {
    const evt = new Event('main_update');
    evt.pagActual = pagActual;
    return evt;
  }
}

// Gestionar la NAVEGACION
const routes = {
  home: HomePageComponent,
  contact: ContactPageComponent
}

// Gestionar EL DOM
function HomePageComponent(mount, data) {
  // Render inicial
  const title = document.createElement('span');
  title.innerHTML = "Estas en home";
  title.style = "cursor: pointer";
  title.onclick = function() {
    alert('hola desde home');
  }
  mount.appendChild(title)

  // Actualización
}

function ContactPageComponent(mount, data) {
  // Render inicial
  const title = document.createElement('span');
  title.innerHTML = "Estas en contacto";
  title.style = "cursor: pointer";
  title.onclick = function() {
    alert('hola desde contacto');
  }
  mount.appendChild(title)

  // Actualización
}

function NavComponent(mount, data) {
  // Render inicial
  mount.innerHTML = "";

  const homeLink = document.createElement('a');
  homeLink.href = "#";
  homeLink.innerHTML = "Home";
  homeLink.className = "nav-link";
  homeLink.onclick = function(e) {
    e.preventDefault();
    history.pushState({pagActual: 'home'}, '', 'home');
    rt.dispatchEvent(rt_events.mainUpdate("home"));
  }
  mount.appendChild(homeLink);

  const contactLink = document.createElement('a');
  contactLink.href = "#";
  contactLink.innerHTML = "Contacto"
  contactLink.className = "nav-link";
  contactLink.onclick = function(e) {
    e.preventDefault();
    history.pushState({pagActual: 'contact'}, '', 'contact');
    rt.dispatchEvent(rt_events.mainUpdate("contact"));
  }
  mount.appendChild(contactLink);

  // Actualización
  rt.addEventListener('nav_update', e => {
    console.log('Actualizando la barra de menu...')
  });
}

function MainComponent(mount, data) {
  // Render inicial
  console.log('Inicializando MainComponent');

  // Actualización
  rt.addEventListener('main_update', e => {
    console.log(`Renderizando ${e.pagActual}`);
    mount.innerHTML = "";
    routes[e.pagActual](mount, {})
  });
}

function AppComponent(mount, data) {
  mount.innerHTML = "";
  
  const nav = document.createElement('nav');
  NavComponent(nav, {});
  mount.appendChild(nav);

  const main = document.createElement('main');
  MainComponent(main, {});
  mount.appendChild(main);

}

// Punto de entrada del programa
function bootstrap() {
  AppComponent(document.querySelector("#app"), {});
}

window.addEventListener('load', bootstrap);

window.addEventListener('popstate', e => {
  rt.dispatchEvent(rt_events.mainUpdate(e.state.pagActual));
})