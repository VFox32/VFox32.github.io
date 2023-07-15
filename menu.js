function createMenu() {
  const menuDiv = document.getElementById("navbar");
  menuDiv.innerHTML = `
    <a href="./index.html">Home</a>
    <div class="dropdown">
        <button class="dropbtn">Power Calculator
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="./power-hopper.html">Hopper</a>
        </div>
    </div>
  `;
}

// Menü beim Laden der Seite erzeugen
window.addEventListener("load", createMenu);
