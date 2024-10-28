import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MofeFonts {
  static TextStyle chivo({
    required double fontSize,
    required FontWeight fontWeight,
    required Color colour
  }) {
    return GoogleFonts.chivo(
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: colour
    );
  }

  static TextStyle krub({
    required double fontSize,
    required FontWeight fontWeight,
    required Color colour
  }) {
    return GoogleFonts.krub(
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: colour
    );
  }
}