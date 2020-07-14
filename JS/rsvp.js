document.getElementById('RSVP').addEventListener('click', function() {
   document.querySelector('.ModelBox').style.display = 'flex';
   document.querySelector('.model-content').classList.add("showModel");
});

document.querySelector('.close').addEventListener('click', function() {
   document.querySelector('.ModelBox').style.display = 'none';
});
