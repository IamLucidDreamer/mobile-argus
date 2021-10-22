import React from "react";
import { View } from "react-native";
import { Switch, Route, NativeRouter } from "react-router-native";
import Screen1 from "./Screens/Screen1.jsx";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/sdf" component={Screen1} />
          <Route exact path="/forgotpassword" component={Screen1} />
          <Route exact path="/signup" component={Screen1} />
          <Route exact path="/" component={LoginScreen} />
        </Switch>
      </View>
    </NativeRouter>
  );
}
