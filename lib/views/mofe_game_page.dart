import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/providers/mofe_game_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/action_button.dart';
import 'package:provider/provider.dart';

class MofeGamePage extends StatelessWidget {
  const MofeGamePage({super.key});

  @override
  Widget build(BuildContext context) {
    final List<String> imagePaths = [
      "assets/butt_1.png",
      "assets/butt_2.png"
    ];
    final gameState = context.watch<MofeGameProvider>();

    String randomizeImage() {
      final random = Random();
      return imagePaths[random.nextInt(imagePaths.length)];
    }

    return Scaffold(
      backgroundColor: MofeColour.black,
      body: SafeArea(
        top: true,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Center(
            child: Column(
              children: [
                Text(
                  "WHACK-DA-WOOF",
                  style: MofeFonts.chivo(
                    fontSize: 24, 
                    fontWeight: FontWeight.w200, 
                    colour: MofeColour.white
                  ),
                ),
                const SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      "Score: ${gameState.score}",
                      style: MofeFonts.krub(
                        fontSize: 12, 
                        fontWeight: FontWeight.normal, 
                        colour: MofeColour.grey
                      )
                    ),
                    Text(
                      "Time Left: ${gameState.time}",
                      style: MofeFonts.krub(
                        fontSize: 12, 
                        fontWeight: FontWeight.normal, 
                        colour: MofeColour.grey
                      )
                    ),
                    Text(
                      "Combo: ${gameState.combo}",
                      style: MofeFonts.krub(
                        fontSize: 12, 
                        fontWeight: FontWeight.normal, 
                        colour: MofeColour.grey
                      )
                    )
                  ],
                ),
                const SizedBox(height: 20.0),
                Expanded(
                  child: LayoutBuilder(
                    builder: (context, constraints) {
                      return Material(
                        color: Colors.transparent,
                        shape: BeveledRectangleBorder(
                          borderRadius: BorderRadius.circular(20.0),
                          side: const BorderSide(
                            color: MofeColour.grey,
                            width: 1.0
                          )
                        ),
                        child: Stack(
                          children: [
                            Positioned(
                              left: gameState.xPos,
                              top: gameState.yPos,
                              child: GestureDetector(
                                onTap: () => gameState.tap(
                                  constraints.maxWidth,
                                  constraints.maxHeight
                                ),
                                child: gameState.currentSticker == StickerType.bonus ? 
                                  Image.asset(
                                    "assets/dog.png",
                                    width: 100.0,
                                    height: 100.0,
                                  )
                                  : gameState.currentSticker == StickerType.penalty ? 
                                  Image.asset(
                                    "assets/cat.png",
                                    width: 100.0,
                                    height: 100.0,
                                  ) 
                                  :
                                  Image.asset(
                                    randomizeImage(),
                                    width: 100.0,
                                    height: 100.0,
                                  ) 
                              )
                            )
                          ]
                        )
                      );
                    }
                  )
                ),
                const SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ActionButton(
                      label: "Reset", 
                      alternative: !gameState.isGameActive, 
                      onTap: gameState.resetGame
                    ),
                    ActionButton(
                      label: "Start", 
                      alternative: gameState.isGameActive, 
                      onTap: () => gameState.startGame(
                        Random().nextDouble() * (350),
                        Random().nextDouble() * (600)
                      )
                    ),
                  ],
                ),
                const SizedBox(height: 10.0),
                Text(
                  "Your score will only save when the timer ends.",
                  style: MofeFonts.krub(
                    fontSize: 10, 
                    fontWeight: FontWeight.normal, 
                    colour: MofeColour.grey
                  ),
                )
              ]
            ) 
          )
        )
      ).animate().fade()
    );
  }
}