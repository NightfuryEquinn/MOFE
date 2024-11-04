import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:intl/intl.dart';
import 'package:mofe_app/theme/colours.dart';
import 'package:mofe_app/theme/fonts.dart';
import 'package:mofe_app/widgets/action_button.dart';
import 'package:mofe_app/widgets/mofe_textfield.dart';

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
  DateTime? _selectedDate;

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context, 
      initialDate: DateTime.now(),
      firstDate: DateTime(2000), 
      lastDate: DateTime(DateTime.now().year + 250),
      builder: (BuildContext context, Widget? child) {
        return Theme(
          data: ThemeData(
            colorScheme: const ColorScheme.dark(
              primary: MofeColour.white,
              onPrimary: MofeColour.black,
              onSurface: MofeColour.white,
            ),
            textTheme: TextTheme(
              headlineMedium: MofeFonts.chivo(
                fontSize: 24, 
                fontWeight: FontWeight.w200, 
                colour: MofeColour.white
              ),
              labelLarge: MofeFonts.krub(
                fontSize: 16,
                fontWeight: FontWeight.normal,
                colour: MofeColour.white
              )
            ),
            
            dialogBackgroundColor: MofeColour.black,
          ),
          child: child!,
        );
      }
    );

    if (picked != null && picked != _selectedDate) {
      setState(() {
        _selectedDate = picked;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final TextEditingController contentCtrl = TextEditingController();

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
                ActionButton(
                  label: DateFormat("dd MMMM yyyy").format(_selectedDate ?? DateTime.now()), 
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
                          onTap: () {}
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