import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mofe_app/firebase/firestore_model.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/mofe_in_log_scroll.dart';

class MofeInLogPage extends StatelessWidget {
  final Map<String, dynamic> args;

  const MofeInLogPage({
    super.key,
    required this.args
  });

  @override
  Widget build(BuildContext context) {
    final List<MofeLog> monthLogs = args["logs"] ?? [];

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
                  "${args['title']}",
                  style: MofeFonts.chivo(
                    fontSize: 24, 
                    fontWeight: FontWeight.w200, 
                    colour: MofeColour.white
                  ),
                ),
                const SizedBox(height: 20.0),
                Expanded(
                  child: MasonryGridView.count(
                    scrollDirection: Axis.horizontal,
                    crossAxisCount: 3,
                    mainAxisSpacing: 24,
                    crossAxisSpacing: 60,
                    itemCount: monthLogs.length,
                    itemBuilder: (context, index) {
                      final log = monthLogs[index];
                      String logDate = log.writtenDate.toDate().day.toString();

                      return MofeInLogScroll(
                        label: logDate,
                        color: MofeColour.blue,
                        onTap: () {
                          Navigator.pushNamed(
                            context, 
                            "/manage",
                            arguments: {
                              "mode": "edit",
                              "logId": log.logId,
                              "content": log.content
                            }
                          );
                        }
                      );
                    },
                  )
                ),
              ],
            )
          )
        )
      ).animate().fade()
    );
  }
}