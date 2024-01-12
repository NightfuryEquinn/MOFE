package com.mofe;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate( Bundle savedInstanceState ) {
    SplashScreen.show( this, R.id.lottie );
    SplashScreen.setAnimationFinished( true );

    super.onCreate( savedInstanceState );
  }
  
  @Override
  protected String getMainComponentName() {
    return "mofe";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
      this,
      getMainComponentName(),
      DefaultNewArchitectureEntryPoint.getFabricEnabled()
    );
  }
}
