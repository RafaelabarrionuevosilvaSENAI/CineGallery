import { Text } from "react-native";

export default function TextComp({ txt }) {
  return (
    <Text
      style={{ color: "#B22222", bottom: 40, fontSize: 23, fontWeight: "bold" }}
    >
      {txt}
    </Text>
  );
}
