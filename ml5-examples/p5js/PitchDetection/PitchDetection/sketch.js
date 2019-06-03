// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Basic Pitch Detection
=== */

let audioContext;
let mic;
let pitch;

function setup() {
  noCanvas();
  var startDiv = createDiv('Click to start audio');
  startDiv.position(10, 130);
  // Start the audio context on a click/touch event
  userStartAudio().then(function() {
     startDiv.remove();
      audioContext = getAudioContext();
      mic = new p5.AudioIn();
      mic.start(startPitch);
   });
}

function startPitch() {
  pitch = ml5.pitchDetection('./model/', audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  select('#status').html('Model Loaded');
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      frequency_text = 'Frequency: ' + frequency;
      select('#result').html(frequency_text);
      midinote_text = 'Midi note: ' + freqToMidi(frequency);
      select('#midinote').html(midinote_text);
    } else {
      select('#result').html('No pitch detected');
      select('#midinote').html('');
    }
    getPitch();
  })
}