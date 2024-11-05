import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:mofe_app/firebase/firestore_model.dart';
import 'package:mofe_app/firebase/firestore_repo.dart';

class MofeLogProvider with ChangeNotifier {
  final FirestoreRepo _firestoreRepo = FirestoreRepo();

  Map<String, List<MofeLog>> _logs = {};
  Map<String, List<MofeLog>> _filteredLogs = {};

  String _selectedYear = DateTime.now().year.toString();

  Map<String, List<MofeLog>> get filteredLogs => _filteredLogs;
  String get selectedYear => _selectedYear;

  MofeLogProvider() {
    fetchLog();
  }

  Future<void> fetchLog() async {
    try {
      _logs = await _firestoreRepo.fetchLog();
      _filterLogs(_selectedYear);
      notifyListeners();
    } catch (e) {
      print("Error fetching logs: $e");
    }
  }

  Future<bool> createLog(String content, Timestamp writtenDate) async {
    try {
      bool created = await _firestoreRepo.createLog(content, writtenDate);
      await fetchLog();
      notifyListeners();

      return created;
    } catch (e) {
      print("Error creating log: $e");
      return false;
    }   
  }

  Future<bool> updateLog(String logId, String content) async {
    try {
      bool updated = await _firestoreRepo.updateLog(logId, content);
      await fetchLog();
      notifyListeners();
      
      return updated;
    } catch (e) {
      print("Error creating log: $e");
      return false;
    }   
  }

  void setYear(String year) {
    _selectedYear = year;
    _filterLogs(year);
    notifyListeners();
  }

  void _filterLogs(String year) {
    _filteredLogs = Map.fromEntries(
      _logs.entries.where((entry) => entry.key.startsWith(year))
    );
    notifyListeners();
  }
}