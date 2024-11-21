import 'package:flutter/material.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class MofeTextfield extends StatelessWidget {
  final TextEditingController controller;

  const MofeTextfield({
    super.key,
    required this.controller
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      maxLines: 24,
      keyboardType: TextInputType.multiline,
      style: MofeFonts.krub(
        fontSize: 14,
        fontWeight: FontWeight.normal,
        colour: MofeColour.white
      ),
      decoration: const InputDecoration(
        border: OutlineInputBorder(
          borderSide: BorderSide.none,
          borderRadius: BorderRadius.zero
        ),
      ),
      cursorColor: MofeColour.white,
    );
  }
}