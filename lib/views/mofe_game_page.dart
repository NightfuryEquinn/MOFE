import 'package:flutter/material.dart';
import 'package:mofe_app/providers/mofe_game_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:provider/provider.dart';

class MofeGamePage extends StatelessWidget {
  const MofeGamePage({super.key});

  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      backgroundColor: MofeColour.black,
      body: SafeArea(
        top: true,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: LayoutBuilder(
            builder: (context, constraints) {
              return SizedBox(
                height: MediaQuery.of(context).size.height,
                child: (
                  Consumer<MofeGameProvider>(
                    builder: (context, gameState, child) => Column(
                      children: [
                        Text("Time Remaining: ${gameState.time}"),
                        const SizedBox(height: 15.0),
                        Text("Score: ${gameState.score}"),
                        const SizedBox(height: 15.0),
                        Text("Combo: ${gameState.combo}"),
                        const SizedBox(height: 50.0),
                        Expanded(
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
                                  child: Container(
                                    width: 100,
                                    height: 100,
                                    decoration: BoxDecoration(
                                      color: gameState.currentSticker == StickerType.bonus ?
                                        Colors.green
                                        : gameState.currentSticker == StickerType.penalty
                                          ? Colors.red
                                          : Colors.blue,
                                      shape: BoxShape.circle
                                    ),
                                    child: Text("${gameState.xPos} ${gameState.yPos}")
                                  )
                                )
                              )
                            ],
                          )
                        ),
                        ElevatedButton(
                          onPressed: gameState.isGameActive 
                            ? null 
                            : () => gameState.startGame(
                              constraints.maxWidth, 
                              constraints.maxHeight
                            ), 
                          child: const Text("Start Game")
                        ),
                        ElevatedButton(
                          onPressed: gameState.resetGame, 
                          child: const Text("Reset Game")
                        )
                      ],
                    )
                  )
                ),
              );
            }
          )
        )
      )
    );
  }
}