import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/mofe_in_log_scroll.dart';

class MofeInLogPage extends StatelessWidget {
  final Map<String, dynamic> args;

  const MofeInLogPage({
    super.key,
    required this.args
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: MofeColour.black,
      body: SafeArea(
        top: true,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              Text(
                "${args['title']}",
                style: MofeFonts.chivo(
                  fontSize: 24, 
                  fontWeight: FontWeight.w200, 
                  colour: MofeColour.white
                ),
              ),
              const SizedBox(height: 20.0),
              Expanded(
                child: MasonryGridView.count(
                  itemCount: 31,
                  scrollDirection: Axis.horizontal,
                  crossAxisCount: 3,
                  mainAxisSpacing: 24,
                  crossAxisSpacing: 60,
                  itemBuilder: (context, index) {
                    return MofeInLogScroll(
                      label: "30",
                      color: MofeColour.overlayGrey, // if content, change colour
                      onTap: () {
                        Navigator.pushNamed(
                          context, 
                          "/manage",
                          arguments: {
                            "mode": "edit"
                          }
                        );
                      }
                    );
                  },
                )
              ),
            ],
          )
        )
      ).animate().fade()
    );
  }
}