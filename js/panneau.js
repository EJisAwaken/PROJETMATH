let images = ["../Illustrations/Slide/slide1.jpg",
   "../Illustrations/Slide/slide2.jpg",
   "../Illustrations/Slide/slide3.jpg",
   "../Illustrations/Slide/slide4.jpg",
   "../Illustrations/Slide/slide5.jpg",
   "../Illustrations/Slide/slide6.jpg",
   "../Illustrations/Slide/slide7.jpg",
   "../Illustrations/Slide/slide8.jpg"
]
let image = document.querySelector("#imageSlide img");
let i=0;
let suivant = 0;

setInterval(function (){
   if (i<images.length){
      image.src = images[i]
      i++
   }

   else {
      i = 0;
   }
}, 2000)

