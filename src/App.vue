<template>
   <div class="pt-[71px] md:pt-[110px] md:pb-[185px] relative pb-24 px-3 overflow-hidden md:px-20 lg:px-60">
      <!-- title wrapper -->
      <div class="md:flex md:justify-between">
         <h1 class="font-serif text-4xl font-bold">The creative crew</h1>
         <div class="mt-9 font-poppins md:mt-0">
            <h2 class="text-lg font-semibold">WHO WE ARE</h2>
            <p class="w-[330px] mt-[10px] text-sm md:text-base">We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
         </div>
      </div>

      <!-- images wrapper -->
      <div class="grid gap-x-10 grid-cols-2 mr-5 mt-10 md:gap-x-20 md:grid-cols-3 md:mr-0 md:mt-24 lg:gap-x-28">
         <div class="card-image">
            <img src="./assets/images/photo1.png" />
            <p class="card-image-name">Bill Mahoney</p>
            <div class="card-image-title">
               <p class="transform origin-top-right rotate-90">Product owner</p>
            </div>
         </div>
         <div class="card-image mt-10 md:mt-20">
            <img src="./assets/images/photo2.png" />
            <p class="card-image-name">Saba Cabrera</p>
            <div class="card-image-title">
               <p class="transform origin-top-right rotate-90">Art director</p>
            </div>
         </div>
         <div class="card-image">
            <img src="./assets/images/photo3.png" />
            <p class="card-image-name">Shae Le</p>
            <div class="card-image-title">
               <p class="transform origin-top-right rotate-90">Tech Lead</p>
            </div>
         </div>
         <div class="card-image mt-10 md:mt-0">
            <img src="./assets/images/photo4.png" />
            <p class="card-image-name">Skylah Lu</p>
            <div class="card-image-title">
               <p class="transform origin-top-right rotate-90">UX Designer</p>
            </div>
         </div>
         <div class="card-image md:mt-20">
            <img src="./assets/images/photo5.png" />
            <p class="card-image-name">Griff Richards</p>
            <div class="card-image-title">
               <p class="transform origin-top-right rotate-90">Developer</p>
            </div>
         </div>
         <div class="card-image mt-10 md:mt-0">
            <img src="./assets/images/photo6.png" />
            <p class="card-image-name">Stan John</p>
            <div class="card-image-title">
               <p class="transform origin-top-right rotate-90">Developer</p>
            </div>
         </div>
      </div>

      <!-- footer -->
      <div class="text-[#BDBDBD] absolute bottom-6 left-0 flex justify-center w-full font-montserrat text-sm">
         <p>
            created by
            <a href="https://github.com/aldimhr" target="_blank" class="font-bold border-b">aldimhr</a>
            - devChallenges.io
         </p>
      </div>
   </div>
</template>

<script>
// set title
document.title = 'My Team Page';

export default {
   mounted() {
      let cardImageTitle = document.querySelectorAll('.card-image-title');
      cardImageTitle.forEach((el) => {
         let width = el.children[0].clientWidth;
         el.style = `top: ${width + 1}px`;
      });
   },
};
</script>
