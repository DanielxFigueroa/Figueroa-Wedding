document.getElementById('wRSVP').addEventListener('click', function() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   event.preventDefault();
   document.querySelector('.ModelBox').style.display = 'flex';
   document.querySelector('.model-content').classList.add("showModel");
});
