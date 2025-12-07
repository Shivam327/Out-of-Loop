import { Platform } from "react-native";

const LOCAL_PORT = 3000;

// change this to your WiFi IP when testing on a real device
const LAN_IP = "localhost"; // example, replace with your actual IP

export function getApiBaseUrl() {
  if (Platform.OS === "web") {
    return `http://localhost:${LOCAL_PORT}`;
  }

  if (Platform.OS === "android") {
    // Android emulator special localhost
    return `http://localhost:${LOCAL_PORT}`;
  }

  // iOS simulator / real device: use LAN IP
  return `http://${LAN_IP}:${LOCAL_PORT}`;
}
