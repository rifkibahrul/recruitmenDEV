// Ambil feedback
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("php/get_feedback.php")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Gagal mengambil data: " + response.statusText);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (Array.isArray(data)) {
//         const feedbackContainer = document.getElementById("feedback-container");

//         data.forEach((feedback) => {
//           const feedbackSlide = document.createElement("div");
//           feedbackSlide.classList.add(
//             "swiper-slide",
//             "mb-12",
//             "p-8",
//             "bg-white",
//             "rounded-lg",
//             "shadow-lg"
//           );
//           feedbackSlide.innerHTML = `
//                       <div class="flex items-start">
//                           <img src="${feedback.image}" alt="Profile" class="w-24 h-24 rounded-full mr-6">
//                           <div>
//                               <h3 class="font-semibold text-2xl">${feedback.name}</h3>
//                               <p class="text-gray-600 mt-2 text-lg">${feedback.message}</p>
//                           </div>
//                       </div>
//                   `;
//           feedbackContainer.appendChild(feedbackSlide);
//         });

//         // Inisialisasi Swiper
//         new Swiper(".swiper-container", {
//           loop: true,
//           autoplay: { delay: 5000 },
//           slidesPerView: 1,
//           centeredSlides: true,
//           spaceBetween: 10,
//           pagination: { el: ".swiper-pagination", clickable: true },
//           navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//         });
//       } else {
//         console.error("Format data salah:", data);
//       }
//     })
//     .catch((error) => {
//       console.error("Terjadi kesalahan saat mengambil data:", error);
//     });
// });

// Fungsi validasi
// function validateForm() {
//   var name = document.getElementById("name").value.trim();
//   var email = document.getElementById("email").value.trim();
//   var message = document.getElementById("message").value.trim();
//   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//   if (name === "") {
//     alert("Nama tidak boleh kosong.");
//     return false;
//   }

//   if (!emailPattern.test(email)) {
//     alert("Email harus dalam format yang valid.");
//     return false;
//   }

//   if (message.length < 10) {
//     alert("Pesan harus berisi minimal 10 karakter.");
//     return false;
//   }

//   $.ajax({
//     url: "php/proses_feedback.php",
//     type: "POST",
//     data: { name: name, email: email, message: message },
//     dataType: "json",
//     success: function (response) {
//       if (response.status === "success") {
//         alert(response.message);
//         document.getElementById("feedbackForm").reset();
//         location.reload();
//       } else {
//         alert(response.message);
//       }
//     },
//     error: function (xhr, status, error) {
//       console.log(xhr.responseText);
//       alert("Terjadi kesalahan dalam pengiriman data.");
//     },
//   });

//   return false;
// }

// Navbar toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar fixed saat scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixxedNav = header.offsetTop;

  if (window.scrollY > fixxedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Scroll Reveal animation
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Swiper
  new Swiper(".swiper-container", {
    loop: false,
    autoplay: { delay: 3000 },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar : {
      el: ".swipper-scrollbar"
    }
  });

  // Inisialisasi scroll reveals
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 400,
    // reset: true
  });

  // Hero
  sr.reveal(".hero__text", { origin: "top" });
  sr.reveal(".hero__img", { origin: "right" });

  // Experience and Education
  sr.reveal(".experience__experience", {
    distance: "100px",
    interval: 100,
    delay: 100,
  });
  sr.reveal(".experience__text");
});

// const tooltipTriggers = document.querySelectorAll('[data-tooltip-target]');
// const tooltips = document.querySelectorAll('[role="tooltip"]');

// tooltipTriggers.forEach((trigger) => {
//   const tooltipId = trigger.getAttribute('data-tooltip-target');
//   const tooltip = document.getElementById(tooltipId);

//   trigger.addEventListener('mouseover', () => {
//     tooltip.classList.remove('hidden');
//     tooltip.classList.add('opacity-100');
//   });

//   trigger.addEventListener('mouseout', () => {
//     tooltip.classList.add('hidden');
//     tooltip.classList.remove('opacity-100');
//   });
// });
