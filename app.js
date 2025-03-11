function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nombreAmigo = inputAmigo.value.trim(); // Elimina espacios en blanco
  
    if (nombreAmigo === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }
  
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);
    inputAmigo.value = ""; // Limpia el campo de texto
  }
  
  function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const amigos = Array.from(listaAmigos.children).map(item => item.textContent);
  
    if (amigos.length < 2) {
      alert("Agrega al menos dos amigos para el sorteo.");
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>El amigo secreto es: ${amigos[indiceAleatorio]}</li>`;
  }
