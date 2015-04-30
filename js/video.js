var VideoPlayer = function(){

  // cache video and modal objects
  this.video = document.getElementsByTagName('video')[0];
  this.modal = document.querySelectorAll('.modal')[0];

  var endCheck = function(){
      // fix bug with 1st animationFrame, video and modal are undefined
      this.video = document.getElementsByTagName('video')[0];
      this.modal = document.querySelectorAll('.modal')[0];
        // check if video's current time is greater than or equal to the duration
        if(this.video.currentTime >= this.video.duration) {
              this.modal.showModal();
              this.video.currentTime = 0;
              this.video.pause();
              return;
        }
        // else if the time is less than duration request another frame (call this function again)
        else if(this.video.currentTime < this.video.duration) {
              console.log(this.video.currentTime);
              window.requestAnimationFrame(endCheck);
              return;
        } else {
              console.log(this.video.currentTime);
              window.requestAnimationFrame(endCheck);
              return;
        }


    window.requestAnimationFrame(endCheck);



  };

  this.resize = function(){
      this.video.style.width = window.innerWidth + 'px';
      this.video.style.height = (window.innerWidth * 9) / 16 + 'px';
      this.video.style.marginTop = '0px';
      this.video.style.left = '0px';
      this.video.style.marginLeft = '0px';
  };


  this.init = function(){

    var that = this;
    console.dir(this.video);

    this.resize();

    window.requestAnimationFrame(endCheck);

    window.addEventListener('resize',function(){
        that.resize();
    });

  };


  this.init();

};

document.addEventListener("DOMContentLoaded", function(event) {
    VideoPlayer();
});
