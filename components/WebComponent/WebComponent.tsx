import { WebView } from "react-native-webview";

export default function WebComponent() {
  return (
    <WebView
      source={{
        uri: "https://voki.live/videochat?uid=6765706b214d4903501c71a7",
      }}
    />
  );
}
