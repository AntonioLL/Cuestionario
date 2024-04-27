var loopBegan = 0;
var loopCompleted = 0;


anime({
  targets: '#efecto4',
  translateX: 240,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loopBegin: function(anim) {
    loopBegan++;
    console.log(loopBegan);
   
  },
  loopComplete: function(anim) {
    loopCompleted++;
    
  }
});