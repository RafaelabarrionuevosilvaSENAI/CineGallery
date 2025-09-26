import { TextInput } from "react-native";
import { styles } from "../styles/styles";

export default function InputComp({ textPlaceHolder, password }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={textPlaceHolder}
      placeholderTextColor={"rgba(255, 255, 255, 0.59)"}
      secureTextEntry={password}
      textAlign="left"
    />
  );
}
