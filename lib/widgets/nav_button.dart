import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class NavButton extends StatefulWidget {
  final String label;
  final int delay;
  final VoidCallback onTap;

  const NavButton({
    super.key,
    required this.label,
    this.delay = 0,
    required this.onTap,
  });

  @override
  State<NavButton> createState() => _NavButtonState();
}

class _NavButtonState extends State<NavButton> with TickerProviderStateMixin {
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
    return Animate(
      effects: [
        SlideEffect(
          begin: const Offset(-1, 0),
          duration: Duration(milliseconds: 1000 + widget.delay),
          curve: Curves.fastEaseInToSlowEaseOut
        ),
        FadeEffect(
          duration: Duration(milliseconds: 750 + widget.delay),
          delay: Duration(milliseconds: 500 + widget.delay),
          curve: Curves.fastEaseInToSlowEaseOut
        ),
      ],
      child: Material(
        color: Colors.transparent,
        shape: BeveledRectangleBorder(
          borderRadius: BorderRadius.circular(25.0)
        ),
        child: InkWell(
          onTap: _handleTap,
          splashColor: MofeColour.overlayWhite,
          customBorder: BeveledRectangleBorder(
            borderRadius: BorderRadius.circular(25.0)
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 32.0, vertical: 8.0),
            child: Text(
              widget.label,
              style: MofeFonts.chivo(
                fontSize: 24, 
                fontWeight: FontWeight.w200, 
                colour: MofeColour.white
              ),
            )
          )
        )
      ).animate(
        target: _isTapped ? 1 : 0
      )
      .scale(
        end: const Offset(1.5, 1.5),
        duration: const Duration(milliseconds: 500),
        curve: Curves.fastEaseInToSlowEaseOut
      )
      .fadeOut(
        delay: const Duration(milliseconds: 250),
        duration: const Duration(milliseconds: 500),
        curve: Curves.fastEaseInToSlowEaseOut
      )
    );
  }
}