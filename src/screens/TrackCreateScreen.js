import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import useLocation from "../hooks/useLocation";
import "../_mockLocation";
import { Context } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
import {FontAwesome} from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording},
    addLocation,
  } = useContext(Context);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a track</Text>
      <Map />
      {error ? (
        <Text style={styles.error} h4>
          Please turn on location services
        </Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title:"Add track",
  tabBarIcon: <FontAwesome name="plus" size={20}/>
}
const styles = StyleSheet.create({
  error: {
    color: "red",
    margin: 50,
  },
});

export default withNavigationFocus(TrackCreateScreen);
