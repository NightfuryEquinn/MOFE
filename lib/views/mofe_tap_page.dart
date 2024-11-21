import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/providers/mofe_tap_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:provider/provider.dart';

class MofeTapPage extends StatelessWidget {
  const MofeTapPage({super.key});

  @override
  Widget build(BuildContext context) {
    final tapState = context.watch<MofeTapProvider>();

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
                  "TAP-DA-WOOF",
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
                      "Tap: ${tapState.score}",
                      style: MofeFonts.krub(
                        fontSize: 12, 
                        fontWeight: FontWeight.normal, 
                        colour: MofeColour.grey
                      )
                    ),
                    Text(
                      "Woof said: ${tapState.text}",
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
                      return GestureDetector(
                        onTap: () => tapState.tap(
                          constraints.maxWidth,
                          constraints.maxHeight
                        ),
                        child: Material(
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
                                left: tapState.xPos,
                                top: tapState.yPos,
                                child: Image.asset(
                                  tapState.currentSticker,
                                  width: 100.0,
                                  height: 100.0,
                                ) 
                              )
                            ]
                          )
                        )
                      );
                    }
                  )
                ),
              ]
            )
          )
        )
      ).animate().fade()
    );
  }
}