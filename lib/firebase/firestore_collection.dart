import 'package:cloud_firestore/cloud_firestore.dart';

final FirebaseFirestore _firestore = FirebaseFirestore.instance;

final CollectionReference mofeLogCollection = _firestore.collection("mofe_log");
final CollectionReference mofeWoofCollection = _firestore.collection("mofe_woof");