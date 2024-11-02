import 'package:flutter/material.dart';
import 'package:mofe_app/providers/mofe_game_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/action_button.dart';
import 'package:provider/provider.dart';

class MofeGamePage extends StatelessWidget {
  const MofeGamePage({super.key});

  @override
  Widget build(BuildContext context) {
    final gameState = context.watch<MofeGameProvider>();

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

                const SizedBox(height: 50.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ActionButton(
                      label: "End", 
                      alternative: !gameState.isGameActive, 
                      onTap: () {}
                    ),
                    ActionButton(
                      label: "Start", 
                      alternative: gameState.isGameActive, 
                      onTap: () {}
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
      )
    );
  }
}