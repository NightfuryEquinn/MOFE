import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:mofe_app/firebase/firestore_collection.dart';
import 'package:mofe_app/firebase/firestore_model.dart';

class FirestoreRepo {
  Future<Map<String, List<MofeLog>>> fetchLog() async {
    try {
      QuerySnapshot logDoc = await mofeLogCollection.get();

      List<MofeLog> allLogs = [];

      for (var doc in logDoc.docs) {
        MofeLog logData = MofeLog.fromMap(doc);
        allLogs.add(logData);
      }

      allLogs.sort((a, b) => a.writtenDate.compareTo(b.writtenDate));

      Map<String, List<MofeLog>> logsByMonthYear = {};

      for (var logData in allLogs) {
        Timestamp timestamp = logData.writtenDate;
        DateTime date = timestamp.toDate();
        String monthYear = "${date.year}-${date.month.toString().padLeft(2, '0')}";

        if (!logsByMonthYear.containsKey(monthYear)) {
          logsByMonthYear[monthYear] = [];
        }

        logsByMonthYear[monthYear]!.add(logData);
      }

      return logsByMonthYear;
    } catch (e) {
      print("Failed to fetch logs: $e");
      return {};
    }
  }

  Future<bool> createLog(String content, Timestamp writtenDate) async {
    try {
      DocumentReference logRef = mofeLogCollection.doc();

      MofeLog mofeLog = MofeLog(
        logId: logRef.id,
        content: content,
        writtenDate: writtenDate
      );

      await logRef.set(mofeLog.toMap());
      return true;
    } catch (e) {
      print("Failed to create log: $e");
      return false;
    }
  }

  Future<bool> updateLog(String logId, String content) async {
    try {
      DocumentReference logRef = mofeLogCollection.doc(logId);

      Map<String, dynamic> updatedLog = {
        "content": content
      };

      await logRef.update(updatedLog);
      return true;
    } catch (e) {
      print("Failed to update log: $e");
      return false;
    }
  }

  Future<List<MofeWoof>> fetchGameRecord() async {
    try {
      QuerySnapshot woofDoc = await mofeWoofCollection.get();

      List<MofeWoof> records = woofDoc.docs.map((doc) {
        return MofeWoof.fromMap(doc);
      }).toList();

      records.sort((a, b) => b.completedDate.compareTo(a.completedDate));

      MofeWoof empty = MofeWoof(
        woofId: "",
        score: "",
        combo: "",
        completedDate: Timestamp.now()
      );

      records.insert(0, empty);

      return records;
    } catch (e) {
      print("Failed to fetch game records: $e");
      return [];
    }
  }

  Future<bool> createGameRecord(String score, String combo, Timestamp completedDate) async {
    try {
      DocumentReference woofRef = mofeWoofCollection.doc();

      MofeWoof mofeWoof = MofeWoof(
        woofId: woofRef.id,
        score: score,
        combo: combo,
        completedDate: completedDate
      );

      await woofRef.set(mofeWoof.toMap());
      return true;
    } catch (e) {
      print("Failed to create game record: $e");
      return false;
    }
  }
}