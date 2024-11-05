import 'package:cloud_firestore/cloud_firestore.dart';

class MofeLog {
  final String logId;
  final String content;
  final Timestamp writtenDate;

  MofeLog({
    required this.logId,
    required this.content,
    required this.writtenDate
  });

  Map<String, dynamic> toMap() {
    return {
      "logId": logId,
      "content": content,
      "writtenDate": writtenDate
    };
  }

  factory MofeLog.fromMap(DocumentSnapshot doc) {
    Map<String, dynamic> map = doc.data() as Map<String, dynamic>;

    return MofeLog(
      logId: map["logId"],
      content: map["content"],
      writtenDate: map["writtenDate"]
    );
  }
}

class MofeWoof {
  final String woofId;
  final String score;
  final String combo;
  final Timestamp completedDate;

  MofeWoof({
    required this.woofId,
    required this.score,
    required this.combo,
    required this.completedDate
  });

  Map<String, dynamic> toMap() {
    return {
      "woofId": woofId,
      "score": score,
      "combo": combo,
      "completedDate": completedDate
    };
  }

  factory MofeWoof.fromMap(DocumentSnapshot doc) {
    Map<String, dynamic> map = doc.data() as Map<String, dynamic>;

    return MofeWoof(
      woofId: map["woofId"],
      score: map["score"],
      combo: map["combo"],
      completedDate: map["completedDate"]
    );
  }
}