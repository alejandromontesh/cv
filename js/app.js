const linkedin = document.getElementById('linkedin');
const mail = document.getElementById('mail');
const whatsapp = document.getElementById('whatsapp');

linkedin.addEventListener('click', f => {
  window.open('https://www.linkedin.com/in/alejandromh94/', '_blank');
});

mail.addEventListener('click', f => {
  const email = 'alejandromontesh@gmail.com';
  const mailtoLink = `mailto:${email}`;
  
  window.location.href = mailtoLink;
});

whatsapp.addEventListener('click', function() {
  const phoneNumber = '526642569336';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  window.open(whatsappLink, '_blank');
});
