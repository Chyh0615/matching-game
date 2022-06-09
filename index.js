$(document).ready(function() {

  for(var i = 0; i < 3; i++) {
    var target = $("<div class='place'></div>");
    $(".question").append(target);
  };
    
  $("div:nth-child(1) > .place").attr("data-key", "風の谷のナウシカ");
  $("div:nth-child(2) > .place").attr("data-key", "天空の城ラピュタ");
  $("div:nth-child(3) > .place").attr("data-key", "魔女の宅急便");
  $("div:nth-child(4) > .place").attr("data-key", "耳をすませば");
  $("div:nth-child(5) > .place").attr("data-key", "もののけ姫");
  $("div:nth-child(6) > .place").attr("data-key", "千と千尋の神隠し");
  $("div:nth-child(7) > .place").attr("data-key", "ハウルの動く城");
  $("div:nth-child(8) > .place").attr("data-key", "ゲド戦記");
  $("div:nth-child(9) > .place").attr("data-key", "崖の上のポニョ");
  $("div:nth-child(10) > .place").attr("data-key", "借りぐらしのアリエッティ");
  $("div:nth-child(11) > .place").attr("data-key", "コクリコ坂から");
  $("div:nth-child(12) > .place").attr("data-key", "風立ちぬ");
    
  var cards = $(".card").remove().toArray();
    for (var i = cards.length - 1; i >= 1; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var imgsi = cards[i];
      var imgsj = cards[j];
      cards[i] = imgsj;
      cards[j] = imgsi;
  };
  $(".container").append(cards);

  $(".card").each(function(index) {
    var value = $(this);
    var item = value.data("value");
    var key = $('.question div[data-key="' + item + '"]');

    value.draggable({
      cursor: "grabbing",
      cursorAt: { top: 75, left: 120},
      revert: "invalid",
      scrollSensitivity: 100,
      opacity: 0.9,
      helper: "clone",
      stack: ".card"
    });

    key.droppable({
      accept: 'img[data-value="' + item + '"]',
      drop: function(event, ui) {
        $(this)
        .append(ui.draggable)
        .css({
          "border": "5px solid rgb(209, 125, 68)"
        });

        $(ui.draggable).css({
          "margin": "0",
          "left": "0",
          "top": "0"
        });

        if(item == item) {
          ui.draggable.draggable("disable");
          $(this).droppable("disable");
        }
      }
    });
  });
});