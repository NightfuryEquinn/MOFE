import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:intl/intl.dart';
import 'package:mofe_app/firebase/firestore_model.dart';
import 'package:mofe_app/providers/mofe_record_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/mofe_game_record_row.dart';
import 'package:provider/provider.dart';

class MofeGameRecordPage extends StatelessWidget {
  const MofeGameRecordPage({super.key});

  @override
  Widget build(BuildContext context) {
    final recordState = Provider.of<MofeRecordProvider>(context);
    final List<MofeWoof> records = recordState.records;

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
                  "GAME RECORDS",
                  style: MofeFonts.chivo(
                    fontSize: 24, 
                    fontWeight: FontWeight.w200, 
                    colour: MofeColour.white
                  ),
                ),
                const SizedBox(height: 20.0),
                Expanded(
                  child: MasonryGridView.count(
                    scrollDirection: Axis.vertical,
                    crossAxisCount: 1,
                    mainAxisSpacing: 10,
                    itemCount: records.length,
                    itemBuilder: (context, index) {
                      final record = records[index];

                      if (index == 0) {
                        return Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "COMPLETED AT",
                                  style: MofeFonts.krub(
                                    fontSize: 16,
                                    fontWeight: FontWeight.normal,
                                    colour: MofeColour.blue
                                  ),
                                ),
                                Text(
                                  "SCORE",
                                  style: MofeFonts.krub(
                                    fontSize: 16,
                                    fontWeight: FontWeight.normal,
                                    colour: MofeColour.blue
                                  ),
                                ),
                                Text(
                                  "COMBO",
                                  style: MofeFonts.krub(
                                    fontSize: 16,
                                    fontWeight: FontWeight.normal,
                                    colour: MofeColour.blue
                                  ),
                                )
                              ]
                            ),
                            const SizedBox(height: 7.5),
                            const Divider(
                              indent: 10,
                              endIndent: 10,
                              height: 1,
                              thickness: 1.0,
                              color: MofeColour.overlayWhite,
                            )
                          ],
                        );
                      } else {
                        return MofeGameRecordRow(
                          date: DateFormat("dd-MM-yy H:mm:ss").format(record.completedDate.toDate()),
                          score: record.score,
                          combo: record.combo,
                        );
                      }
                    }
                  )
                )
              ],
            )
          )
        )
      ).animate().fade()
    );
  }
}