var Modal = function(){

  this.modal = this;

  this.showModal = function() {

      this.style.display = 'block';
      this.style.opacity = '0.8';
      console.log('show the modal!');

  };

  this.hideModal = function() {

     var that = this;
     document.querySelectorAll('.modal')[0].style.opacity = '0.0';

     setTimeout(function(){
         document.querySelectorAll('.modal')[0].style.display = 'none';
     },2000);

  };


  this.init = function(){

    var that = this;
    this.modal.children[0].addEventListener('mousedown',that.hideModal);

  };


  this.init();

};

document.addEventListener("DOMContentLoaded", function(event) {
    Modal.call(document.querySelectorAll('.modal')[0]);
});
