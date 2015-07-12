$(document).ready(function(){
  var c = $("#mid-c")[0];
  var cs = $("#mid-c-sharp")[0];
  var d = $("#mid-d")[0];
  var ds = $("#mid-d-sharp")[0];
  var e = $("#mid-e")[0];
  var f = $("#mid-f")[0];
  var fs = $("#mid-f-sharp")[0];
  var g = $("#mid-g")[0];
  var gs = $("#mid-g-sharp")[0];
  var a = $("#mid-a")[0];
  var as = $("#mid-a-sharp")[0];
  var b = $("#mid-b")[0];

  //c.play();
  $("li").click( function(){
    var note = this.dataset.note;
    //alert(note);
   switch(note){
      case "a": a.play();
        break;
      case "b": b.play();
        break;
      case "c": c.play();
        break;
      case "d": d.play();
        break;
      
      case "e": e.play();
        break;
      
      case "f": f.play();
        break;
      
      case "g": g.play();
        break;
      
      case "as": as.play();
        break;
      
      case "cs": cs.play();
        break;
      
      case "ds": ds.play();
        break;
      
      case "fs": fs.play();
        break;
      
      case "gs": gs.play();
        break;
      }
  });  

});
//audio.play();

// Javascript adapted from here: 
// http://www.html5rocks.com/en/tutorials/webaudio/intro/

// Notes can be found here:
// http://www.vibrationdata.com/piano.htm
/*
window.onload = init;
var context;
var bufferLoader;

function init() {
  context = new webkitAudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'http://www.vibrationdata.com/piano_middle_C.mp3',
      'http://www.vibrationdata.com/piano_middle_C.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  // Create two sources and play them both together.
  var source1 = context.createBufferSource();
  var source2 = context.createBufferSource();
  source1.buffer = bufferList[0];
  source2.buffer = bufferList[1];

  source1.connect(context.destination);
  source2.connect(context.destination);
  source1.noteOn(0);
  source2.noteOn(0);
}
  */
