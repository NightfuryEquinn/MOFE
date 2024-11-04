import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/action_button.dart';
import 'package:mofe_app/widgets/mofe_log_scroll.dart';

class MofeLogPage extends StatelessWidget {
  const MofeLogPage({super.key});

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
              children: [
                Text(
                  "MOFE LOGS",
                  style: MofeFonts.chivo(
                    fontSize: 24, 
                    fontWeight: FontWeight.w200, 
                    colour: MofeColour.white
                  ),
                ),
                const SizedBox(height: 20.0),
                Expanded(
                  child: GridView.custom(
                    scrollDirection: Axis.horizontal,
                    gridDelegate: SliverStairedGridDelegate(
                      mainAxisSpacing: 24,
                      pattern: [
                        const StairedGridTile(0.75, 9),
                        const StairedGridTile(0.75, 9),
                      ]
                    ),
                    childrenDelegate: SliverChildBuilderDelegate(
                      childCount: 12,
                      (context, index) {
                        return MofeLogScroll(
                          label: "SEP-2024",
                          logCount: "3",
                          onTap: () {
                            Navigator.pushNamed(
                              context, 
                              "/in_log",
                              arguments: {
                                "title": "SEP 2024"
                              }
                            );
                          }
                        );
                      }
                    ),
                  )
                ),
                const SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ActionButton(
                      label: "Calendar",
                      alternative: false, 
                      onTap: () {}
                    ),
                    ActionButton(
                      label: "Write New",
                      alternative: false, 
                      onTap: () {
                        Navigator.pushNamed(context, "/manage");
                      }
                    ),
                  ]
                )
              ],
            )
          )
        )
      ).animate().fade()
    );
  }
}