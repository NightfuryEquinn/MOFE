import 'package:flutter/material.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';

class MofeGameRecordRow extends StatelessWidget {
  final String date;
  final String score;
  final String combo;

  const MofeGameRecordRow({
    super.key,
    required this.date,
    required this.score,
    required this.combo
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          date,
          style: MofeFonts.krub(
            fontSize: 12,
            fontWeight: FontWeight.normal,
            colour: MofeColour.grey
          ),
          softWrap: true,
          maxLines: 2,
        ),
        Text(
          score,
          style: MofeFonts.krub(
            fontSize: 12,
            fontWeight: FontWeight.normal,
            colour: MofeColour.grey
          ),
        ),
        Text(
          combo,
          style: MofeFonts.krub(
            fontSize: 12,
            fontWeight: FontWeight.normal,
            colour: MofeColour.grey
          ),
        )
      ],
    );
  }
}