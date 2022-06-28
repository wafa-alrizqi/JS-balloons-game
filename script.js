let balloon = $(".balloon");
let balloon2 = $(".balloon2");

let counter = 0;


function start () {
  for(let i=0; i<20; i++){
    let balloonCopy = balloon.clone();
    balloonCopy.css({left: i*55});
    balloonCopy.appendTo("body");
    balloonCopy.click(function() {
      pop_sound.play();
      $(this).remove();
      counter = counter + 1;
      $(".counter").html(counter);
    });
    balloonCopy.animate({bottom: "100%"}, 7000 - Math.random() * 3000);

    };

    for(let i=0; i<5; i++){
      let balloon2Copy = balloon2.clone();  
      balloon2Copy.css({left: i*200 });

      balloon2Copy.appendTo("body");

      balloon2Copy.click(function() {
        pop_sound.play();
        $(this).remove();
        counter = counter + 5;
        $(".counter").html(counter);
      });
      balloon2Copy.animate({bottom: "100%"}, 7000 - Math.random() * 3000);
  
      };

    window.setTimeout(function() {
      $('.score-box').addClass('ready');
      $('.replay').bind('click', function(e) {
        e.preventDefault();
        window.location.reload();
      });
    }, 5000);

  balloon.remove();
  balloon2.remove()
}


function preloadPopSound(){
  let audio = new Audio('sound.wav');
  audio.preload = "auto";
  $(audio).on("loadeddata", start);
  return audio;
}
let pop_sound = preloadPopSound();
