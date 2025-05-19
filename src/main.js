import "./style.css";
import profile from "/images/avatar.jpeg";

document.querySelector("#app").innerHTML = `
    <main class="bg-grey-800 p-6 sm:p-10 rounded-xl w-full sm:w-sm">
      <section class="flex flex-col items-center text-center">
        <figure class="mb-6">
          <img
            src=${profile}
            alt="Jessica Randall profile picture"
            class="rounded-full w-22 h-22 border-2 border-custom-grey-700"
          />
          <figcaption class="sr-only">Jessica Randall</figcaption>
        </figure>

        <div class="mb-6">
          <h1 class="text-2xl font-semibold mb-1">Jessica Randall</h1>
          <p class="text-green text-sm font-semibold mb-6">
            London, United Kingdom
          </p>
          <p class="text-sm">"Front-end developer and avid reader."</p>
        </div>

        <nav class="w-full">
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="link-button block bg-grey-700 hover:bg-green focus:bg-green hover:text-grey-800 focus:text-grey-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                class="link-button block bg-grey-700 hover:bg-green focus:bg-green hover:text-grey-800 focus:text-grey-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
              >
                Frontend Mentor
              </a>
            </li>
            <li>
              <a
                href="#"
                class="link-button block bg-grey-700 hover:bg-green focus:bg-green hover:text-grey-800 focus:text-grey-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                class="link-button block bg-grey-700 hover:bg-green focus:bg-green hover:text-grey-800 focus:text-grey-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                class="link-button block bg-grey-700 hover:bg-green focus:bg-green hover:text-grey-800 focus:text-grey-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
`;
