class Mysingup extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <div
        class="absolute flex justify-center items-center w-full h-100vh bg-white md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:h-[100vh]">
        <div class="relative space-y-10 rounded-0 bg-white w-[90vw] h-auto pt-[15vh] p-[2vh] justify-center items-center sm:w-[40vw] sm:h-auto sm:p-[2vh] sm:m-[5vh] 
            rounded-xl">
            <div
                class="sm:mx-auto sm:w-full sm:max-w-sm hover:scale-125 transition duration-500 ease-in-out text-center justify-center text-4xl font-bold text-fuchsia-500">
                <h1>Sing Up</h1>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">First
                            Name</label>
                        <div class="mt-2">
                            <input id="fname" name="fname" type="text" autocomplete="fname" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Last
                            Name</label>
                        <div class="mt-2">
                            <input id="lname" name="lname" type="text" autocomplete="lname" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <input id="username" name="username" type="text" autocomplete="username" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Phone
                            Number</label>
                        <div class="mt-2">
                            <input id="Phone" name="Phone" type="tel" autocomplete="Phone" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <div class="flex items-center justify-between">
                            <label for="password"
                                class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="hover:scale-110 transition duration-500 ease-in-out">
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                                Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="justify-center flex pt-4 hover:scale-110 transition duration-500 ease-in-out">
                        <button type="submit"
                            class="flex w-[90vw] justify-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm opacity-80 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
        </div>           
        `;        
    }
}
window.customElements.define("mi-singup", Mysingup);