import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#white',
    fontSize: 40,
    fontWeight: "bold"
  },

  viewSignUp: {
    flexDirection: "row",
    gap: 7
  },

  btn: {
    backgroundColor: '#white',
    width: "80%",
    padding: 10,
    alignItems: "center",
    marginTop: 300,
    borderRadius: 5,
    shadowColor: "#white",
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
