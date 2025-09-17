// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
});

//scrolling from bottom to top
//when we scroll it, it will check it suitable to go top or not
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll",() => {
    
    if(window.scrollY > 200)
    {
        scrollTopBtn.style.display = "block";
    }
    else
    {
        scrollTopBtn.style.display = "none";
    }
});
 
 //when we click it it will go to top
 scrollTopBtn.addEventListener("click",() => {
    window.scrollTo({top : 0, behavior : "smooth"});
 });

