
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/nav_button.dart';

class MofeHomePage extends StatelessWidget {
  const MofeHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: MofeColour.black,
      body: SafeArea(
        top: true,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset(
                  "assets/mofe.png",
                  width: 300,
                  height: 300,
                ),
                SizedBox(
                  width: 300,
                  height: 50,
                  child: AnimatedTextKit(
                    animatedTexts: [
                      TypewriterAnimatedText("For go of the past, let bygones be bygones...", textAlign: TextAlign.center, speed: const Duration(milliseconds: 50), textStyle: MofeFonts.krub(fontSize: 16, fontWeight: FontWeight.normal, colour: MofeColour.grey)),
                      TypewriterAnimatedText("Others may speak of nonsense, but must you let your anger lost...", textAlign: TextAlign.center, speed: const Duration(milliseconds: 50), textStyle: MofeFonts.krub(fontSize: 16, fontWeight: FontWeight.normal, colour: MofeColour.grey)),
                      TypewriterAnimatedText("Must you not argue with different ideas and opinions...", textAlign: TextAlign.center, speed: const Duration(milliseconds: 50), textStyle: MofeFonts.krub(fontSize: 16, fontWeight: FontWeight.normal, colour: MofeColour.grey)),
                      TypewriterAnimatedText("Because you live for yourself, not for the sake of them...", textAlign: TextAlign.center, speed: const Duration(milliseconds: 50), textStyle: MofeFonts.krub(fontSize: 16, fontWeight: FontWeight.normal, colour: MofeColour.grey)),
                      TypewriterAnimatedText("Be patient, be calm, be bold, be mine...", textAlign: TextAlign.center, speed: const Duration(milliseconds: 50), textStyle: MofeFonts.krub(fontSize: 16, fontWeight: FontWeight.normal, colour: MofeColour.grey)),
                      TypewriterAnimatedText("-- Sashiky, 2024 --", textAlign: TextAlign.center, speed: const Duration(milliseconds: 50), textStyle: MofeFonts.krub(fontSize: 16, fontWeight: FontWeight.normal, colour: MofeColour.grey)),
                    ],
                    repeatForever: true,
                    pause: const Duration(seconds: 2),
                  )
                ),
                const SizedBox(height: 50),
                NavButton(label: "LOG", onTap: () => Navigator.pushNamed(context, "/log")),
                const SizedBox(height: 20),
                NavButton(label: "GAME", delay: 250, onTap: () => Navigator.pushNamed(context, "/game")),
                const SizedBox(height: 20),
                NavButton(label: "RECORD", delay: 500, onTap: () => Navigator.pushNamed(context, "/record")),
                const SizedBox(height: 50),
                Text(
                  "Version: v1.0.0",
                  style: MofeFonts.krub(
                    fontSize: 10, 
                    fontWeight: FontWeight.normal, 
                    colour: MofeColour.grey
                  ),
                )
              ],
            )
          )
        )
      )
    );
  }
}