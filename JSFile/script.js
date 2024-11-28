$(' .box-slider').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoHeight:false,
    navText : [
        '<img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-left.png" alt="long-arrow-left"/>',
        '<img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1"/>'
       ],
    responsive:{

      0:{
        items:1
      },
      400:{
        items:1
      },
      500:{

        items:1
      },
      768:{

        items:1
      },
      992:{

        items:3
      }
    }
  })




  // Heading Navigation Bar


  let navToggler=document.querySelector(".nav-toggler");
  navToggler.addEventListener("click", mynavtoggle);

  function mynavtoggle(){
    navToggler.classList.toggle("active");
    let nav_b=document.querySelector(".nav_b");
    nav_b.classList.toggle("open");
    if(nav_b.classList.contains("open")){
      nav_b.style.maxHeight=nav_b.scrollHeight + "px";
    }
    else{
      nav_b.removeAttribute("style");

    }

  }


  //Pricing toogle button click after change price

  function check(){

    var checkbox=document.getElementById("checkbox");
    var month=document.getElementsByClassName("month");
    var annual=document.getElementsByClassName("annual");

    for(var i=0;i<month.length;i++){
      
      if(checkbox.checked==true){
        month[i].style.display="block";
        annual[i].style.display="none";
      }else if(checkbox.checked==false){
        month[i].style.display="none";
        annual[i].style.display="block";
      }
    }
  }


  // gsap.from("#gsap",{
  //   duration:0.8,
  //   y:-100,
  //   delay:0.3,
  //   stagger:1
  // })


  // gsap.from("#page1 #m1-l",{
  //   opacity:0,
  //   duration:2,
  //   delay:1,
  //   x:-500,
  //   stagger:1,
  //   // scrollTrigger:{
  //   //   trigger:"#page1 ",
  //   //   scroller:"body",
  //   //   markers:true,
  //   //   start:"top 25%",
  //   //   end:"top 10%",
  //   //   scrub:true,

  //   // }
  // })

  // gsap.from("#page1 #m1-r",{
  //   opacity:0,
  //   duration:2,
  //   x:500,
  //   stagger:1,
  //   // scrollTrigger:{
  //   //   trigger:"#page1 #m1-r",
  //   //   scroller:"body",
  //   //   markers:true,
  //   //   start:"top 30%",
  //   //   scrube:true,
  //   // }
  // })
  // gsap.from("#page1 #ban-2",{
  //   opacity:0,
  //   duration:2,
   
  //   stagger:1,
  //   scale:0
  // })

  // gsap.from("#page2 h2",{
  //   opacity:0,
  //   duration:1,
  //    x:-500,
  //   stagger:1,
  //    scrollTrigger:{
  //     trigger:"#page2 h2",
  //     scroller:"body",
  //     // markers:true,
  //     start:"top 30%",
  //     scrub:true,
  //   }
  // })

  // gsap.from("#page2 #bg-img",{
  //   opacity:0,
  //   duration:2,
  //   stagger:1,
  //   scale:0
  // })


  // gsap.from("#page2 #m2-r",{
  //   opacity:0,
  //   duration:2,
  //   x:500,
  //   stagger:1,
    
  // })