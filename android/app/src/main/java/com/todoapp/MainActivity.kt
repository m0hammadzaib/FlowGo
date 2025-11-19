package com.todoapp

import android.os.Bundle
import androidx.core.view.WindowCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  // Enables edge-to-edge layout for all Android versions
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    WindowCompat.setDecorFitsSystemWindows(window, false)
    // Optional: Uncomment for transparent system bars
    // window.statusBarColor = android.graphics.Color.TRANSPARENT
    // window.navigationBarColor = android.graphics.Color.TRANSPARENT
  }

  // Name of your JS Main Component
  override fun getMainComponentName(): String = "TodoApp"

  // Delegate: Fabric/Classic Architecture
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
