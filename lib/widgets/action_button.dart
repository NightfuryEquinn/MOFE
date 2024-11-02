import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class ActionButton extends StatefulWidget {
  final String label;
  final bool alternative;
  final VoidCallback onTap;

  const ActionButton({
    super.key,
    required this.label,
    required this.alternative,
    required this.onTap
  });

  @override
  State<ActionButton> createState() => _ActionButtonState();
}

class _ActionButtonState extends State<ActionButton> with TickerProviderStateMixin {
  bool _isTapped = false;

  void _handleTap() async {
    setState(() {
      _isTapped = true;
    });

    await Future.delayed(const Duration(milliseconds: 500));
    if (!widget.alternative) {
      widget.onTap();
    }

    setState(() {
      _isTapped = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ClipPath(
      clipper: ShapeBorderClipper(
        shape: BeveledRectangleBorder(
          borderRadius: BorderRadius.circular(25.0)
        ),
      ),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 750),
        curve: Curves.fastEaseInToSlowEaseOut,
        color: _isTapped
          ? (widget.alternative ? MofeColour.blue : MofeColour.grey)
          : (widget.alternative ? MofeColour.grey : MofeColour.blue),
        child: Material(
          color: Colors.transparent,
          shape: BeveledRectangleBorder(
            borderRadius: BorderRadius.circular(25.0)
          ),
          child: InkWell(
            onTap: _handleTap,
            splashColor: MofeColour.overlayBlack,
            customBorder: BeveledRectangleBorder(
              borderRadius: BorderRadius.circular(25.0)
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0, vertical: 8.0),
              child: Text(
                widget.label,
                style: MofeFonts.chivo(
                  fontSize: 14, 
                  fontWeight: FontWeight.w200, 
                  colour: MofeColour.white
                ),
              ),
            )
          )
        ).animate(
          target: _isTapped ? 1 : 0
        )
        .fadeOut(
          delay: const Duration(milliseconds: 250),
          duration: const Duration(milliseconds: 500),
          curve: Curves.fastEaseInToSlowEaseOut
        )
      )
    );
  }
}