const fadeOut = () => {
  const loaderWrapper = document.querySelector("#wrapper");
  loaderWrapper.classList.add("fade");
};
window.addEventListener("load", fadeOut);
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["SEO Expert", "Front-End Developer", "Web Designer"],
    typeSpeed: 50,
    backSpeed: 80,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["SEO Expert", "Front-End Developer", "Web Designer"],
    typeSpeed: 50,
    backSpeed: 80,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

/////////////////////////////////////////////////////////

// Test Section

// const titles = [
//   { id: 1, title: "Title 1" },
//   { id: 2, title: "Title 2" },
//   { id: 3, title: "Title 3" },
// ];

// const posts = [
//   { id: 1, post: "This is post 1" },
//   { id: 2, post: "This is post 2" },
//   { id: 3, post: "This is post 3" },
// ];

//Expected output
// [
//   { id: 1, title: "Title 1", post: "This is post 1" },
//   { id: 2, title: "Title 2", post: "This is post 2" },
//   { id: 3, title: "Title 3", post: "This is post 3" },
// ];

// Solution

// const data = [...titles, ...posts];
// console.log("🚀 ~ file: script.js ~ line 118 ~ data", data);

// const newData = [...new Set(data.map((d) => d.id))].map((id) => {
//   return {
//     id,
//     data: data.filter((d) => d.id === id).map((d) => d.data),
//   };
// });

// console.log(newData);
