import 'dart:async';
import 'dart:math';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:mofe_app/providers/mofe_record_provider.dart';

enum StickerType { normal, bonus, penalty }

class MofeGameProvider with ChangeNotifier {
  final MofeRecordProvider _mofeRecordProvider = MofeRecordProvider();
  final Random _random = Random();

  Timer? _timer;
  Timer? _posTimer;

  int _score = 0;
  int _time = 10;
  bool _isGameActive = false;
  double _xPos = 0.0;
  double _yPos = 0.0;
  int _combo = 0;
  StickerType _currentSticker = StickerType.normal;

  int get score => _score;
  int get time => _time;
  bool get isGameActive => _isGameActive;
  double get xPos => _xPos;
  double get yPos => _yPos;
  int get combo => _combo;
  StickerType get currentSticker => _currentSticker;

  void startGame(double maxWidth, double maxHeight) {
    _score = 0;
    _time = 10;
    _isGameActive = true;
    _randomizePosition(maxWidth, maxHeight);
    notifyListeners();

    _timer?.cancel();
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (_time > 0) {
        _time--;
        notifyListeners();
      } else {
        _isGameActive = false;
        _timer?.cancel();
        _mofeRecordProvider.createGameRecord(score.toString(), combo.toString(), Timestamp.fromDate(DateTime.now()));
        notifyListeners();
      }
    });

    _posTimer?.cancel();
    _posTimer = Timer.periodic(const Duration(seconds: 2), (timer) {
      if (_time > 0) {
        _randomizePosition(maxWidth, maxHeight);
        notifyListeners();
      } else {
        _posTimer?.cancel();
        notifyListeners();
      }
    });
  }

  void tap(double maxWidth, double maxHeight) {
    if (_isGameActive) {
      if (_currentSticker == StickerType.bonus) {
        _score += 3;
        _combo++;
      } else if (_currentSticker == StickerType.penalty) {
        _score -= 2;
        _combo = 0;
      } else {
        _score++;
        _combo++;
      }

      _randomizePosition(maxWidth, maxHeight);
      notifyListeners();
    }
  }

  void _randomizePosition(double maxWidth, double maxHeight) {
    _xPos = _random.nextDouble() * (maxWidth - 75);
    _yPos = _random.nextDouble() * (maxHeight - 75);

    int stickerChance = _random.nextInt(10);
    if (stickerChance < 6) {
      _currentSticker = StickerType.normal;
    } else if (stickerChance < 8) {
      _currentSticker = StickerType.bonus;
    } else {
      _currentSticker = StickerType.penalty;
    }

    notifyListeners();
  }

  void resetGame() {
    _timer?.cancel();
    _posTimer?.cancel();
    _isGameActive = false;
    _score = 0;
    _combo = 0;
    _time = 10;
    _xPos = 0.0;
    _yPos = 0.0;
    notifyListeners();
  }

  @override
  void dispose() {
    _timer?.cancel();
    _posTimer?.cancel();
    _isGameActive = false;
    _score = 0;
    _combo = 0;
    _time = 10;
    _xPos = 0.0;
    _yPos = 0.0;
    notifyListeners();

    super.dispose();
  }
}