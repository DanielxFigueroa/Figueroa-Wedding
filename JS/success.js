$('form').on('submit', function () {
   document.querySelector('.model-content').style.display = 'none';
   document.querySelector('.Success').style.display = 'table';
   document.querySelector('.sclose').addEventListener('click', function() {
      document.querySelector('.ModelBox').style.display = 'none';
   });
})
