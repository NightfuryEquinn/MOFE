import 'package:flutter/material.dart';
import 'package:mofe_app/theme/colours.dart';

class MofeGamePage extends StatelessWidget {
  const MofeGamePage({super.key});

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