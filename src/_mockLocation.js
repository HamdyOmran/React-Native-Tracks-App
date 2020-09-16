import * as Location from "expo-location";

const tenMeters = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      altitudeAccuracy: 5,
      latitude: 30.093679 + increment * tenMeters,
      longitude: 31.3084688 + increment * tenMeters,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
