import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:mofe_app/firebase/firestore_model.dart';
import 'package:mofe_app/firebase/firestore_repo.dart';

class MofeRecordProvider with ChangeNotifier {
  final FirestoreRepo _firestoreRepo = FirestoreRepo();

  List<MofeWoof> _records = [];

  List<MofeWoof> get records => _records;

  MofeRecordProvider() {
    fetchGameRecord();
  }

  Future<void> fetchGameRecord() async {
    try {
      _records = await _firestoreRepo.fetchGameRecord();
      notifyListeners();
    } catch (e) {
      print("Error fetching game records: $e");
    }
  }

  Future<bool> createGameRecord(String score, String combo, Timestamp completedDate) async {
    try {
      bool created = await _firestoreRepo.createGameRecord(score, combo, completedDate);
      notifyListeners();
      return created;
    } catch (e) {
      print("Error creating game record: $e");
      return false;
    }
  }
}