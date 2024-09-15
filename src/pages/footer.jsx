import React from 'react'
import Logo from '../assets/logo.svg'

function Footer() {
  return (
<>

<section class="text-white body-font bg-orange-400">
  <div class="container mx-auto flex flex-col px-5 pt-5 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Logo}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-xl text-xl mb-4 font-medium text-white list-none flex gap-10 my-6">

<li>Company</li>
<li>
Products</li>


<li>About</li>

      </h1>
      
      <div class="flex">
        
        
      </div>
    </div>
  </div>

</section>



<footer class="bg-orange-400 rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">ZA Store™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>



</>
  )
}

export default Footer