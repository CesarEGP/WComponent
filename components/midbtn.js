class Mybtn extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <section class="flex border-0 border-slate-800 border-solid h-[10vh] sm:h-[6vh] w-full items-center bg-black opacity-80 hover:opacity-100 transition duration-500">
            <div class="absolute flex flex-row justify-evenly w-full text-center text-white">
                <button class="py-2 px-4 border-[1px] border-solid border-black rounded-lg lg:border-[2px] lg:text-1xl 
                hover:scale-125 duration-500 ease-in-out bg-gradient-to-r from-sky-500 to-indigo-500">Veg</button>
                <button class="py-2 px-4 border-[1px] border-solid border-black rounded-lg lg:border-[2px] lg:text-1xl 
                hover:scale-125 duration-500 ease-in-out bg-gradient-to-r from-sky-500 to-indigo-500">Meat</button>
                <button class="bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-4 border-[1px] border-solid border-black rounded-lg lg:border-[2px] lg:text-1xl 
                hover:scale-125 duration-500 ease-in-out">Asian</button>
            </div>
        </section>             
        `;
    }
}
window.customElements.define("mi-midbtn", Mybtn);
