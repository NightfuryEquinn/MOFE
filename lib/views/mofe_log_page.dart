import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:intl/intl.dart';
import 'package:mofe_app/firebase/firestore_model.dart';
import 'package:mofe_app/providers/mofe_log_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/action_button.dart';
import 'package:mofe_app/widgets/mofe_log_scroll.dart';
import 'package:provider/provider.dart';

class MofeLogPage extends StatelessWidget {
  const MofeLogPage({
    super.key
  });

  @override
  Widget build(BuildContext context) {
    final logState = Provider.of<MofeLogProvider>(context, listen: false);

    Future<void> selectDate(BuildContext context) async {
      final selectedYear = await showDialog<int>(
        context: context, 
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text(
              "Select Year",
              textAlign: TextAlign.center,
              style: MofeFonts.chivo(
                fontSize: 24.0,
                fontWeight: FontWeight.w200,
                colour: MofeColour.black
              ),
            ),
            contentTextStyle: MofeFonts.krub(
              fontSize: 16.0,
              fontWeight: FontWeight.normal,
              colour: MofeColour.black
            ),
            content: SizedBox(
              height: MediaQuery.of(context).size.height * 0.5,
              width: MediaQuery.of(context).size.width * 0.75,
              child: YearPicker(
                currentDate: DateTime.now(),
                firstDate: DateTime(2020), 
                lastDate: DateTime(DateTime.now().year + 10),
                selectedDate: DateTime(int.parse(logState.selectedYear)),
                onChanged: (DateTime date) {
                  Navigator.pop(context, date.year);
                },
              )
            )
          );
        }
      );

      if (selectedYear != null) {
        logState.setYear(selectedYear.toString());
      }
    }

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
                  "MOFE LOGS",
                  style: MofeFonts.chivo(
                    fontSize: 24, 
                    fontWeight: FontWeight.w200, 
                    colour: MofeColour.white
                  ),
                ),
                const SizedBox(height: 20.0),
                Consumer<MofeLogProvider>(
                  builder: (context, logState, child) {
                    if (logState.filteredLogs.isEmpty) {
                      return Expanded(
                        child: Container(
                          width: double.infinity,
                          decoration: const ShapeDecoration(
                            color: MofeColour.overlayBlue,
                            shape: BeveledRectangleBorder(
                              borderRadius: BorderRadius.all(Radius.circular(24.0))
                            )
                          ),
                          child: Center(
                            child: Text(
                              "No logs available for ${logState.selectedYear}...",
                              style: MofeFonts.chivo(
                                fontSize: 20.0,
                                fontWeight: FontWeight.w200,
                                colour: MofeColour.white
                              ),
                            ),
                          )
                        )
                      );
                    }

                    return Expanded(
                      child: GridView.custom(
                        scrollDirection: Axis.horizontal,
                        gridDelegate: SliverStairedGridDelegate(
                          mainAxisSpacing: 24,
                          pattern: [
                            const StairedGridTile(0.75, 9),
                            const StairedGridTile(0.75, 9),
                          ]
                        ),
                        childrenDelegate: SliverChildBuilderDelegate(
                          childCount: 12,
                          (context, index) {
                            String month = (index + 1).toString().padLeft(2, '0');
                            String yearMonth = "${logState.selectedYear}-$month";

                            List<MofeLog> monthLogs = logState.filteredLogs[yearMonth] ?? [];
                            String logCount = monthLogs.length.toString();

                            return MofeLogScroll(
                              label: "${DateFormat('MMM').format(DateTime(0, index + 1)).toUpperCase()}-${logState.selectedYear}",
                              logCount: logCount,
                              onTap: () {
                                Navigator.pushNamed(
                                  context, 
                                  "/in_log",
                                  arguments: {
                                    "title": "${DateFormat('MMM').format(DateTime(0, index + 1)).toUpperCase()} ${logState.selectedYear}",
                                    "logs": monthLogs
                                  }
                                );
                              }
                            );
                          }
                        ),
                      )
                    );
                  }
                ),
                const SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ActionButton(
                      label: "Calendar",
                      alternative: false, 
                      onTap: () => selectDate(context)
                    ),
                    ActionButton(
                      label: "Write New",
                      alternative: false, 
                      onTap: () {
                        Navigator.pushNamed(
                          context,
                          "/manage",
                          arguments: {
                            "mode": "new"
                          }
                        );
                      }
                    ),
                  ]
                )
              ],
            )
          )
        )
      ).animate().fade()
    );
  }
}