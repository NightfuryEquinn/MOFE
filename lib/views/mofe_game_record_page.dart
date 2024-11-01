import 'package:flutter/material.dart';
import 'package:mofe_app/theme/colours.dart';

class MofeGameRecordPage extends StatelessWidget {
  const MofeGameRecordPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: MofeColour.black,
      body: SafeArea(
        top: true,
        child: Padding(
          padding: EdgeInsets.all(20.0),
          child: Column(
            children: [

            ],
          )
        )
      )
    );
  }
}