import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:mofe_app/animations/fade_route.dart';
import 'package:mofe_app/firebase_options.dart';
import 'package:mofe_app/providers/mofe_game_provider.dart';
import 'package:mofe_app/views/mofe_game_page.dart';
import 'package:mofe_app/views/mofe_game_record_page.dart';
import 'package:mofe_app/views/mofe_home_page.dart';
import 'package:mofe_app/views/mofe_in_log_page.dart';
import 'package:mofe_app/views/mofe_log_page.dart';
import 'package:mofe_app/views/mofe_manage_log_page.dart';
import 'package:mofe_app/views/mofe_splash_page.dart';
import 'package:provider/provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  try {
    if (Firebase.apps.isEmpty) {
      await Firebase.initializeApp(
        options: DefaultFirebaseOptions.currentPlatform,
      );
    }
    
    print("Firebase initialized successfully.");
  } catch (error) {
    print("Error initializing Firebase: $error");
  }

  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => MofeGameProvider())
      ],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        initialRoute: "/",
        onGenerateRoute: (RouteSettings settings) {
          Widget page;

          switch (settings.name) {
            case "/":
              page = const MofeHomePage();
              break;
            
            case "/splash":
              page = const MofeSplashPage();
              break;
            
            case "/game":
              page = const MofeGamePage();
              break;

            case "/record":
              page = const MofeGameRecordPage();
              break;

            case "/log":
              page = const MofeLogPage();
              break;
            
            case "/in_log":
              final dynamic args = settings.arguments as Map<String, dynamic>;
              page = MofeInLogPage(args: args);
              break;

            case "/manage":
              page = const MofeManageLogPage();
              break;

            default:
              page = const MofeHomePage();
          }

          return FadeRoute(page: page);
        },
      )
    );
  }
}
