class Myheader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <header class="bg-gradient-to-r from-cyan-500 to-blue-500 py-4 z-10" >
        <nav class="relative">
            <div class="container mx-auto flex flex-grow px-8 xl:px-0 ">
                <div class="flex lg:hidden">
                    <i class='bx bx-menu text-white text-4xl' onclick="openMenu()"></i>
                </div>
                <div id="logo" class="flex lg:hidden mx-auto">
                    <i class='bx bx-bowl-hot text-white text-4xl'></i>                        
                </div>                               
                <div id="menu" class="lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-12 bg-black lg:bg-transparent
                w-full items-center lg:w-auto left-0 py-[15vh] lg:py-0 px-8">                    
                    <div class="flex flex-col lg:flex-row mb-8 lg:mb-0 ">
                        <a href="#" class="text-white lg:mr-7 mb-8 lg:mb-0 lg:text-[1vw] hover:scale-125 duration-500 ease-in-out ">Carta</a>
                        <a href="#" class="text-white lg:mr-7 mb-8 lg:mb-0 lg:text-[1vw] hover:scale-125 duration-500 ease-in-out ">Blog</a>
                        <a href="#" class="text-white lg:mr-7 mb-8 lg:mb-0 lg:text-[1vw] hover:scale-125 duration-500 ease-in-out ">Reserva</a>
                        <a href="#" class="text-white lg:mr-7 lg:text-[1vw] hover:scale-125 duration-500 ease-in-out ">Inicio</a>
                    </div>
                    <div class="flex flex-col lg:flex-row text-center">
                        <a href="#" class="text-white border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-slate-800 duration-500 
                        ease-in-out 
                        mb-8 lg:mb-0">Iniciar Sesión</a>
                        <a href="#" class="text-white bg-slate-800  border border-blue-500 py-2.5 px-5 rounded-md  hover:bg-black hover:border-blue-600 
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
    let logo = document.getElementById('logo');
    if (menu.classList.contains('hidden')) {
        logo.classList.add('hidden');
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        logo.classList.remove('hidden');
    }
}