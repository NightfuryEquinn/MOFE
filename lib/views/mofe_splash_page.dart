import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class MofeSplashPage extends StatefulWidget {
  const MofeSplashPage({super.key});

  @override
  State<MofeSplashPage> createState() => _MofeSplashPageState();
}

class _MofeSplashPageState extends State<MofeSplashPage> with TickerProviderStateMixin {
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this);

    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _navigateToHome();
      }
    });
  }

  void _navigateToHome() {
    Navigator.pushReplacementNamed(context, "/");
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF262626),
      body: Center(
        child: Lottie.asset(
          "assets/mofe.mp4.lottie.json",
          controller: _controller,
          onLoaded: (composition) {
            _controller.duration = composition.duration;
            _controller.forward();
          }
        )
      )
    );
  }
}