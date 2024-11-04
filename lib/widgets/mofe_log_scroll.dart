import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class MofeLogScroll extends StatefulWidget {
  final String label;
  final String logCount;
  final VoidCallback onTap;

  const MofeLogScroll({
    super.key,
    required this.label,
    required this.logCount,
    required this.onTap
  });

  @override
  State<MofeLogScroll> createState() => _MofeLogScrollState();
}

class _MofeLogScrollState extends State<MofeLogScroll> {
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
          decoration: const ShapeDecoration(
            color: MofeColour.overlayGrey,
            shape: BeveledRectangleBorder(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(12.5),
                topRight: Radius.circular(12.5),
                bottomLeft: Radius.circular(25.0),
                bottomRight: Radius.circular(25.0)
              )
            )
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 18.0),
            child: Center(
              child: Column(
                children: [
                  ...widget.label.split("").map((char) {
                    return Text(
                      char,
                      textAlign: TextAlign.center,
                      style: MofeFonts.chivo(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w200,
                        colour: MofeColour.white,
                      )
                    );
                  }),
                  const Spacer(),
                  Container(
                    alignment: Alignment.bottomCenter,
                    height: 75,
                    decoration: const ShapeDecoration(
                      color: MofeColour.overlayBlack,
                      shape: BeveledRectangleBorder(
                        borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(5),
                          topRight: Radius.circular(5),
                          bottomLeft: Radius.circular(12.0),
                          bottomRight: Radius.circular(12.0)
                        )
                      )
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Text(
                        widget.logCount,
                        textAlign: TextAlign.center,
                        style: MofeFonts.krub(
                          fontSize: 12.0,
                          fontWeight: FontWeight.normal,
                          colour: MofeColour.grey,
                        )
                      ),
                    ),
                  )
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