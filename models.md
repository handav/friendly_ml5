# All models:

### Hello world!

#### Image Classification, Image Classification with webcam

We can see 6 folders in here. We'll be looking at ImageClassification and ImageClassification_Video.

Model: MobileNet, a good model architecture optimized for use on phones. They don't need a lot of power. Trained on a subset of the ImageNet image classification dataset of 150,000 photos and 1000 categories (the original Imagenet has 10 million labeled images showing over 10 thousand object categories).\
Year: 2012-2014 (various versions)\
Links:
http://www.image-net.org/challenges/LSVRC/2012/
https://ml5js.org/reference/api-ImageClassifier/

Notes:
* takes a few seconds to predict
* you can see more results in the console
* it's not good at everything, but it's really good at some things (like animals)
* classifier.predict() is soon going to become classifier.classify() - keep an eye on the documentation!

### More classifiers:

#### Sentiment

Model: Trained on 25,000 movie reviews from IMDB, tagged as 'positive' or 'negative'\
Links:
https://ml5js.org/reference/api-Sentiment/
https://github.com/tensorflow/tfjs-examples/tree/master/sentiment

Notes:
* very literal model, no sarcasm (common for sentiment)
* simple model, returns score 0-1

### PoseNet, PoseNet with webcam

Model: PoseNet: real-time pose estimation in the browser\
Year: 2018\
Links:
https://ml5js.org/reference/api-PoseNet/
https://github.com/tensorflow/tfjs-models/tree/master/posenet

Notes:
* returns a confidence score
* skeleton is keypoints in an organized fashion 
* can predict either single or multiple poses with the 'type' option

### Sound Classifier

Model: https://github.com/tensorflow/tfjs-models/tree/master/speech-commands\
Year: 2018\
Links:
https://ml5js.org/reference/api-soundClassifier/

### Pitch Detection

Model: CREPE Pitch detection model\
Year: 2018\
Links:
https://github.com/marl/crepe
http://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies

Notes: 
* you need to click to start the audio context
* this returns the frequency, from which you can get the MIDI note (see above link if you are not familiar with these)
* the other examples are a little outdated

### UNET

Model: Developed by the CS department at the University of Freiburg, Germany, in order to do biomedical image segmentation.\
Year: 2015\
Links:
https://ml5js.org/reference/api-UNET/
https://arxiv.org/abs/1505.04597
https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5

Notes:
* works best on one person
* needs decent lighting 

## Generative models:

### CharRNN Interactive

Model: https://github.com/karpathy/char-rnn\
Year: 2015\
Links:
https://github.com/ml5js/ml5-data-and-training/tree/master/models/charRNN
https://github.com/karpathy/char-rnn

Notes:
* changing the temperature can get different results
* lower temperature makes more conservative predictions, where higher temperature will give more diversity in responses (but also more mistakes)


### Style Transfer

Model: Fast Style Transfer\
Year: 2016\
Links:
https://ml5js.org/reference/api-StyleTransfer/
https://github.com/reiinakano/fast-style-transfer-deeplearnjs

### CVAE

Model: Conditional Variational Autoencoder\
Links:
https://ml5js.org/reference/api-CVAE/

### SketchRNN

Model: based on the Quick, Draw! dataset\
Links:
https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js

## Thinking about training:

### FeatureExtractor

Options (for the mobilenet model):
{
  learningRate: 0.0001,
  hiddenUnits: 100,
  epochs: 20,
  numClasses: 2,
  batchSize: 0.4,
}

Notes:
* I'm going through these examples as they are
* these are works in progress
* cat/dog/badger just means there are three classes

Links:
https://ml5js.org/reference/api-FeatureExtractor/
