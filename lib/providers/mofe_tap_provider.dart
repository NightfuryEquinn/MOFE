import 'dart:math';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';

class MofeTapProvider with ChangeNotifier {
  final Random _random = Random();
  final AudioPlayer _audioPlayer = AudioPlayer();
  
  int _score = 0;
  String _text = "Zzzz...";
  String _currentSticker = "assets/huskie/sleep.png";
  double _xPos = 0.0;
  double _yPos = 0.0;

  int get score => _score;
  String get text => _text;
  String get currentSticker => _currentSticker;
  double get xPos => _xPos;
  double get yPos => _yPos;

  void startGame(double maxWidth, double maxHeight) {
    _score = 0;
    _currentSticker = "assets/huskie/sleep.png";
    _randomizePosition(maxWidth, maxHeight);
    notifyListeners();
  }

  void tap(double maxWidth, double maxHeight) {
    _score++;
    _randomizePosition(maxWidth, maxHeight);
    notifyListeners();
  }

  void _randomizePosition(double maxWidth, double maxHeight) async {
    _xPos = _random.nextDouble() * (maxWidth - 75);
    _yPos = _random.nextDouble() * (maxHeight - 75);

    await _audioPlayer.play(AssetSource("assets/bark.mp3"));

    if (_score >= 114 && _score < 250) {
      _currentSticker = "assets/huskie/roar.png";
      _text = "It's your birthday!";
    } else if (_score >= 250 && _score < 520) {
      _currentSticker = "assets/huskie/sleep.png";
      _text = "Sleepy again...";
    } else if (_score >= 520 && _score < 750) {
      _text = "Woof loves Mue!";
      _currentSticker = "assets/huskie/sit.png";
    } else if (_score >= 750 && _score < 1000) {
      _text = "*sits*";
      _currentSticker = "assets/huskie/sit_1.png";
    } else if (_score >= 1000 && _score < 1314) {
      _text = "*still sits*";
      _currentSticker = "assets/huskie/sit_2.png";
    } else if (_score >= 1314 && _score < 2000) {
      _text = "*change pose*";
      _currentSticker = "assets/huskie/sit_3.png";
    } else if (_score >= 2000 && _score < 2500) {
      _text = "*change again*";
      _currentSticker = "assets/huskie/walk.png";
    } else if (_score >= 2500 && _score < 3000) {
      _text = "Yippie jump!";
      _currentSticker = "assets/huskie/jump.png";
    } else if (_score >= 3000 && _score < 4000) {
      _text = "*catch frisbee*";
      _currentSticker = "assets/huskie/catch.png";
    } else if (_score >= 4000 && _score < 5200) {
      _text = "*double takedown*";
      _currentSticker = "assets/huskie/catch_1.png";
    } else if (_score >= 5200 && _score < 6000) {
      _text = "Another love for Mue!";
      _currentSticker = "assets/huskie/sticking.png";
    } else if (_score >= 6000 && _score < 7090) {
      _text = "*angry*";
      _currentSticker = "assets/huskie/angry.png";
    } else if (_score >= 7090 && _score < 8000) {
      _text = "*no food*";
      _currentSticker = "assets/huskie/angry_1.png";
    } else if (_score >= 8000 && _score < 9000) {
      _text = "*hmph*";
      _currentSticker = "assets/huskie/walk.png";
    } else if (_score >= 9000 && _score < 10000) {
      _text = "*sad*";
      _currentSticker = "assets/huskie/sad.png";
    } else if (_score >= 10000 && _score < 20000) {
      _text = "*got food* Woohoo!";
      _currentSticker = "assets/huskie/eat.png";
    } else if (_score >= 20000 && _score < 50000) {
      _text = "*swimming*";
      _currentSticker = "assets/huskie/swim.png";
    } else if (_score >= 50000 && _score < 75000) {
      _text = "*wet*";
      _currentSticker = "assets/huskie/shake.png";
    } else if (_score >= 75000) {
      _text = "My endless love ~";
      _currentSticker = "assets/huskie/run.png";
    } 

    notifyListeners();
  }

  @override
  void dispose() {
    _score = 0;
    _currentSticker = "assets/huskie/sleep.png";
    _xPos = 0.0;
    _yPos = 0.0;
    notifyListeners();

    super.dispose();
  }
}