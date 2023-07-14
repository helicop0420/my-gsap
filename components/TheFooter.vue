<template>
  <footer class="bg-greyBlack">
    <div class="lg:pl-20 lg:pr-20 mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-10">
        <div class="flex-1 mb-6">
          <logo :isInvert="true" />
        </div>

        <div class="flex-1">
          <!-- <p class="uppercase text-gray-500 md:mb-6">Legal</p> -->
          <ul class="list-reset mb-6">
            <li class="mt-4 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline text-white hover:text-orange-500 font-20"
                >Company</a
              >
            </li>
            <li class="mt-4 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline text-white hover:text-orange-500 font-20"
                >Building Partners</a
              >
            </li>
            <li class="mt-4 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline text-white hover:text-orange-500 font-20"
                >About Us</a
              >
            </li>
            <li class="mt-4 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline text-white hover:text-orange-500 font-20"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <!-- <p class="uppercase text-gray-500 md:mb-6">Social</p> -->
          <ul class="list-reset mb-6">
            <li class="mt-4 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline text-white hover:text-orange-500 font-20"
                >Hardware</a
              >
            </li>
          
          </ul>
        </div>
        <div class="flex-1">
          <!-- <p class="uppercase text-gray-500 md:mb-6">Company</p> -->
          <ul class="list-reset mb-6">
            <li class="mt-4 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline text-white hover:text-orange-500 font-20"
                >Newsletter</a
              >
            </li>
            <div style="position: relative;">
              <p class="text-white md:mb-6 mt-10 font-20">Enter your Email</p>
              <input class="email-input" />
              <div class="send-button"></div>
            </div>
          </ul>
        </div>
      </div>
      <div class="pb-10">
        <button
          class="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 bg-purple text-white"
        >
          App Store
        </button>
        <button
          class="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 bg-purple text-white"
        >
          Play Store
        </button>
      </div>
      <div class="footer-section-2 py-10">

      </div>
    </div>

    
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  }
}
</script>

<style scoped>
.bg-greyBlack {
  background-color: #1E1E1E;
}
.bg-purple {
  background-color: #D2B8ED;
}
.footer-section-2 {
  border: solid 1px;
  border-width: 1px 0 0 0;
  border-color: #3A3A3A;
}
.email-input {
  background-color: #1E1E1E;
  border: solid;
  border-width: 0 0 1px 0;
  width: 100%;
}
.email-input:focus-visible {
  outline: none;
}
.send-button {
  background-color: #D2B8ED;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 35px;
}
.send-button:hover {
  cursor: pointer;
}
.font-20 {
  font-size: 20px;
}
</style>