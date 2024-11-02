import 'package:flutter/material.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class ActionButton extends StatelessWidget {
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
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onTap,
      style: TextButton.styleFrom(
        backgroundColor: alternative ? MofeColour.grey : MofeColour.blue,
        overlayColor: MofeColour.overlayBlack,
        minimumSize: const Size(125.0, 35.0),
        shape: BeveledRectangleBorder(
          borderRadius: BorderRadius.circular(20.0)
        ),
      ),
      child: Text(
        label,
        style: MofeFonts.chivo(
          fontSize: 14, 
          fontWeight: FontWeight.w200, 
          colour: MofeColour.white
        ),
      )
    );
  }
}