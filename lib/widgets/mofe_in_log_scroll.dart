import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class MofeInLogScroll extends StatefulWidget {
  final String label;
  final Color color;
  final VoidCallback onTap;

  const MofeInLogScroll({
    super.key,
    required this.label,
    required this.color,
    required this.onTap
  });

  @override
  State<MofeInLogScroll> createState() => _MofeInLogScrollState();
}

class _MofeInLogScrollState extends State<MofeInLogScroll> {
  bool _isTapped = false;

  void _handleTap() async {
    setState(() {
      _isTapped = true;
    });

    await Future.delayed(const Duration(milliseconds: 500));
    widget.onTap();

    setState(() {
      _isTapped = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      shape: BeveledRectangleBorder(
        borderRadius: BorderRadius.circular(25.0)
      ),
      child: InkWell(
        onTap: _handleTap,
        splashColor: MofeColour.overlayWhite,
        customBorder: const BeveledRectangleBorder(
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(12.5),
            topRight: Radius.circular(12.5),
            bottomLeft: Radius.circular(25.0),
            bottomRight: Radius.circular(25.0)
          )
        ),
        child: Container(
          decoration: ShapeDecoration(
            color: widget.color,
            shape: const BeveledRectangleBorder(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(12.5),
                topRight: Radius.circular(12.5),
                bottomLeft: Radius.circular(25.0),
                bottomRight: Radius.circular(25.0)
              )
            )
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 18.0),
            child: Center(
              child: Column(
                children: [
                  ...widget.label.split("").map((char) {
                    return Text(
                      char,
                      textAlign: TextAlign.center,
                      style: MofeFonts.chivo(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w200,
                        colour: MofeColour.white,
                      )
                    );
                  }),
                ]           
              )
            )
          ),
        ),
      )
    ).animate(
      target: _isTapped ? 1 : 0
    )
    .moveY(
      end: 50.0,
      duration: const Duration(milliseconds: 500),
      curve: Curves.fastEaseInToSlowEaseOut
    )
    .fadeOut(
      delay: const Duration(milliseconds: 250),
      duration: const Duration(milliseconds: 500),
      curve: Curves.fastEaseInToSlowEaseOut
    );
  }
}