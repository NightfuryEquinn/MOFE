import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:intl/intl.dart';
import 'package:mofe_app/providers/mofe_log_provider.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/action_button.dart';
import 'package:mofe_app/widgets/mofe_textfield.dart';
import 'package:provider/provider.dart';

class MofeManageLogPage extends StatefulWidget {
  final Map<String, dynamic> args;

  const MofeManageLogPage({
    super.key,
    required this.args
  });

  @override
  State<MofeManageLogPage> createState() => _MofeManageLogPageState();
}

class _MofeManageLogPageState extends State<MofeManageLogPage> {
  DateTime _selectedDate = DateTime.now();

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context, 
      initialDate: DateTime.now(),
      firstDate: DateTime(2000), 
      lastDate: DateTime(DateTime.now().year + 250),
    );

    if (picked != null && picked != _selectedDate) {
      setState(() {
        _selectedDate = picked;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final TextEditingController contentCtrl = TextEditingController(text: widget.args["content"] ?? "");
    final logState = Provider.of<MofeLogProvider>(context);

    return Scaffold(
      backgroundColor: MofeColour.black,
      body: SafeArea(
        top: true,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Center(
            child: Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Text(
                  widget.args["mode"] == "new" ? "NEW DAILY LOG" : "EDIT DAILY LOG",
                  style: MofeFonts.chivo(
                    fontSize: 24, 
                    fontWeight: FontWeight.w200, 
                    colour: MofeColour.white
                  ),
                ),
                const SizedBox(height: 20.0),
                if (widget.args["mode"] == "new")
                  ActionButton(
                    label: DateFormat("dd MMMM yyyy").format(_selectedDate), 
                    alternative: false,
                    onTap: () => _selectDate(context)
                  ),
                const SizedBox(height: 20.0),
                Expanded(
                  child: Container(
                    color: MofeColour.overlayBlue,
                    child: MofeTextfield(
                      controller: contentCtrl,
                    ),
                  )
                ),
                const SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    ActionButton(
                      label: "Clear", 
                      alternative: false, 
                      onTap: () {
                        contentCtrl.clear();
                      }
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Material(
                          color: Colors.transparent,
                          shape: const BeveledRectangleBorder(
                            borderRadius: BorderRadius.all(Radius.circular(10.0)),
                          ),
                          child: InkWell(
                            onTap: () {
                              String date = DateFormat("dd-MM-yy H:mm:ss").format(DateTime.now());
                              contentCtrl.text += date;
                            },
                            splashColor: MofeColour.overlayWhite,
                            customBorder: const BeveledRectangleBorder(
                              borderRadius: BorderRadius.all(Radius.circular(10.0)),
                            ),
                            child: const Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Icon(
                                CupertinoIcons.clock,
                                size: 24.0,
                                color: MofeColour.white,
                              )
                            )
                          )
                        ),
                        const SizedBox(width: 10.0),
                        ActionButton(
                          label: "Save", 
                          alternative: false, 
                          onTap: () async {
                            if (contentCtrl.text.isEmpty) {
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  backgroundColor: MofeColour.white,
                                  content: Text(
                                    "Your content is empty!",
                                    style: MofeFonts.krub(
                                      fontSize: 16.0,
                                      fontWeight: FontWeight.normal,
                                      colour: MofeColour.black
                                    ),
                                  ),
                                  duration: const Duration(seconds: 3)
                                )
                              );

                              return;
                            }

                            if (widget.args["mode"] == "new") {
                              bool created = await logState.createLog(contentCtrl.text, Timestamp.fromDate(_selectedDate));
                              
                              if (created) {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    backgroundColor: MofeColour.white,
                                    content: Text(
                                      "Log written and saved!",
                                      style: MofeFonts.krub(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.normal,
                                        colour: MofeColour.black
                                      ),
                                    ),
                                    duration: const Duration(seconds: 3)
                                  )
                                );

                                Navigator.pop(context);
                              } else {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    backgroundColor: MofeColour.white,
                                    content: Text(
                                      "Failed to create log. Please try again!",
                                      style: MofeFonts.krub(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.normal,
                                        colour: MofeColour.black
                                      ),
                                    ),
                                    duration: const Duration(seconds: 3)
                                  )
                                );
                              }
                            } else {
                              bool updated = await logState.updateLog(widget.args["logId"], contentCtrl.text);

                              if (updated) {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    backgroundColor: MofeColour.white,
                                    content: Text(
                                      "Log updated and saved!",
                                      style: MofeFonts.krub(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.normal,
                                        colour: MofeColour.black
                                      ),
                                    ),
                                    duration: const Duration(seconds: 3)
                                  )
                                );

                                Navigator.pop(context);
                                Navigator.pop(context);
                              } else {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    backgroundColor: MofeColour.white,
                                    content: Text(
                                      "Failed to update log. Please try again!",
                                      style: MofeFonts.krub(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.normal,
                                        colour: MofeColour.black
                                      ),
                                    ),
                                    duration: const Duration(seconds: 3)
                                  )
                                );
                              }
                            }
                          }
                        ),
                      ],
                    )
                  ],
                )
              ],
            )
          )
        )
      ).animate().fade()
    );
  }
}