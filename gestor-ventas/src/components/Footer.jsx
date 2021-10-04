import React from 'react'

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font">
            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 Copyright:
                        <a href="https://www.tailwind-elements.com/" class="text-gray-600 ml-1" target="_blank">GestorDeVentas</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="" class="text-gray-500">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="ml-3 text-gray-500">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="ml-3 text-gray-500">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="" class="ml-3 text-gray-500">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="" class="ml-3 text-gray-500">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </span>
                </div>
            </div>
    </footer>

    )
}

export default Footer;
