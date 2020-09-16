import React, { useContext,useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(Context);
  
  return (
    <View style={styles.viewStyle}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account ? Sign In instead!"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => {
      false;
    },
  };
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignupScreen;
