class MySlider extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section>
        <div class="container mx-auto z-0">
            <div class="relative">
                <div class="h[50vh] bg-gray-200">
                    <ul id="slider">
                        <li class="h-[50vh] relative " >
                            <img class="h-full w-full object-cover "
                                src="https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600_square.jpg"
                                alt="">
                            <div class="absolute top-0 left-0 h-full w-full flex">
                                <h2 class="text-4xl font-bold text-white my-auto w-full text-center px-20">heading 1
                                </h2>
                            </div>
                        </li>
                        <li class="h-[50vh] relative hidden">
                            <img class="h-full w-full object-cover "
                                src="https://mundosjumbo.cl/wp-content/uploads/sites/3/2016/05/GettyImages-1146906219-1.jpg"
                                alt="">
                            <div class="absolute top-0 left-0 h-full w-full flex">
                                <h2 class="text-4xl font-bold text-white my-auto w-full text-center px-20">heading 2
                                </h2>
                            </div>
                        </li>
                        <li class="h-[50vh] relative hidden">
                            <img class="h-full w-full object-cover "
                                src="https://i.pinimg.com/736x/2a/23/a1/2a23a10d141bbc2b677ed4bb607ea17c.jpg" alt="">
                            <div class="absolute top-0 left-0 h-full w-full flex">
                                <h2 class="text-4xl font-bold text-white my-auto w-full text-center px-20">heading 3
                                </h2>
                            </div>
                        </li>
                        <li class="h-[50vh] relative hidden">
                            <img class="h-full w-full object-cover "
                                src="https://tofuu.getjusto.com/orioneat-prod/ZKd73g2NERLhuw8YE-POST%205%20al%2011-13.jpg"
                                alt="">
                            <div class="absolute top-0 left-0 h-full w-full flex">
                                <h2 class="text-4xl font-bold text-white my-auto w-full text-center px-20">heading 4
                                </h2>
                            </div>
                        </li>
                    </ul>

                </div>
                <div class="absolute px-2 flex top-0 left-0 h-full w-full">
                    <div class="my-auto w-full flex justify-between">
                        <button onclick="prev()" class="bg-white p-3 rounded-full bg-opacity-50 shadow-lg transform hover:scale-110 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: rgba(0, 0, 0, 1);transform: msFilter">
                                <path
                                    d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z">
                                </path>
                            </svg>
                        </button>
                        <button onclick="next()" class="bg-white p-3 rounded-full bg-opacity-50 shadow-lg transform hover:scale-110 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: rgba(0, 0, 0, 1);transform: msFilter">
                                <path
                                    d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>            
        `;        
    }
}
window.customElements.define("mi-slider", MySlider);


currectSlideId = 1;
sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;
console.log(totalSlides)

function next() {
    if (currectSlideId < totalSlides) {
        currectSlideId++;
        showSlide();
    }
}

function prev() {
    if (currectSlideId > 1) {
        currectSlideId--;
        showSlide();
    }
}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currectSlideId === index + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}