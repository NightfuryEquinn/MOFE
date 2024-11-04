import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/theme/colours.dart';

class MofeGameRecordPage extends StatelessWidget {
  const MofeGameRecordPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: MofeColour.black,
      body: const SafeArea(
        top: true,
        child: Padding(
          padding: EdgeInsets.all(20.0),
          child: Column(
            children: [

            ],
          )
        )
      ).animate().fade()
    );
  }
}