// main.js - small scripts (form validation + mobile nav focus)
document.addEventListener('DOMContentLoaded', function(){
  // contact form basic validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      if(!name || !email || !msg){
        alert('Please fill all fields before sending.');
        return;
      }
      // simple mailto fallback
      const subject = encodeURIComponent('Contact from portfolio website ('+name+')');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    });
  }
});
