const template = document.createElement('template');
template.innerHTML = `
    
<link rel="stylesheet" href="./css/navbar.css">
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <div class="navbars">
      <div class="container">
           <div class="row">
                <div class="col-6">
                    <div class="lux">
                        <h2>LUXURY</h2>
                        <p>HOTELS</p>
                    </div>
                 </div>
                <div class="col-6 row">
                <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                      <a class="nav-link" href="#">Home</a>
                      <a class="nav-link" href="#">Ficilities</a>
                      <a class="nav-link" href="#">Rooms</a>
                      <a class="nav-link" href="#">Contact-us</a>
                    </div>
                  </div>
                </div>
              </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                  <div class="text">
                        <p class="text1"> WELCOME TO</p>
                        <h1 class="text2">LUXURY</h1>
                        <p class="text3">HOTELS</p>
                        <p class="text4">Book your stay and enjoy Luxury</p>
                        <p class="text4">redefined at the most affordable rates.</p> 
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12" style="display:flex; justify-content:center;">
                    <div class="btn">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <button> BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
class NavBars extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));  
    }
}
window.customElements.define('nav-bars', NavBars);