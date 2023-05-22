class Myheader extends HTMLElement {           
    
    connectedCallback() {
        this.innerHTML = `
        <header class="bg-slate-800 py-6" >
        <nav class="relative">
            <div class="container mx-auto flex px-8 xl:px-0">
                <div class="flex lg:hidden">
                    <i class='bx bx-menu text-white text-4xl' onclick="openMenu()"></i>
                </div>
                <div class="flex flex-grow">
                    <img class="w-auto h-8" src="https://img.freepik.com/vector-premium/cabeza-gato-lindo-logo-dibujos-animados-cabeza-gato-bueno-productos-relacionados-cuidado-gatos_487414-292.jpg?w=826" alt="">
                </div>                               
                <div id="menu" class="lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-10 bg-slate-800 
                w-full items-center lg:w-auto left-0 py-20 lg:py-0 px-8">                    
                    <div class="flex flex-col lg:flex-row mb-8 lg:mb-0">
                        <a href="#" class="text-white lg:mr-7 mb-8 lg:mb-0">Carta</a>
                        <a href="#" class="text-white lg:mr-7 mb-8 lg:mb-0">Blog</a>
                        <a href="#" class="text-white lg:mr-7 mb-8 lg:mb-0">Reserva</a>
                        <a href="#" class="text-white lg:mr-7">Inicio</a>
                    </div>
                    <div class="flex flex-col lg:flex-row text-center">
                        <a href="#" class="text-white border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-slate-800 duration-500 
                        ease-in-out 
                        mb-8 lg:mb-0">Iniciar Sesión</a>
                        <a href="#" class="text-white bg-blue-500 border border-blue-500 py-2.5 px-5 rounded-md  hover:bg-blue-600 hover:border-blue-600 
                        transition duration-500 ease-in-out lg:ml-10">Registrate</a>
                    </div>
                    
                </div>                                
            </div>
        </nav>
        </header>    
        `;
        const menuElement = this.shadowRoot.querySelector('#menu');
        menuElement.onclick = openMenu;
    }     
}
window.customElements.define("mi-header", Myheader);

function openMenu() {
    let menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}