/*Slider JS*/
var swiper = new Swiper(".bg-slider-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

/*====== Navigation bar effects on scroll========*/ 

window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

/*========== Responsive navigation menu toggle ============*/

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});


/*================ SMTP Js Mailer (Contact Form) ===================== */
function Send(){
  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var body = "fullName: " + name + "<br/> email:" + email + "<br/> phone: " + phone + "<br/> message: " + message;
  
  console.log(body);

    Email.send({
      SecureToken : "e64ecd39-a445-4462-b282-e9282cbcba74",
      To : 'sandhuclicks8@gmail.com',
      From : "sandhuclicks8@gmail.com",
      Subject : "Contact Page",
      Body : body
}).then(
message => {
  if(message=="OK"){

    swal("Sent", "Thanks for contacting us....", "success");
  }
  else{

    swal("Something Went Wrong", "Your message was not sent", "error");
  }
}
);
}


