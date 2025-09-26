import { StyleSheet } from "react-native";
import TextComp from "../components/TextComp";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "rgb(139, 17, 17)",
    bottom: 90,
  },

  subTitulo: {
    fontSize: 20,
    color: "rgb(139, 17, 17)",
    fontStyle: "italic",
    textAlign: "center",
    bottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "rgb(139, 17, 17)",
    width: 280,
    height: 40,
    borderRadius: 30,
    top: 160,
    alignItems: "center",
    justifyContent: "center",
  },

  login: {
    color: "black",
    fontSize: 15,
  },

  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },

  tituloSI: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    bottom: 100,
  },

  subTituloSI: {
    color: "white",
    fontSize: 13,
    fontStyle: "italic",
    bottom: 100,
  },

  inputcomp: {
    gap: 15,
  },

  input: {
    backgroundColor: "rgb(139, 17, 17)",
    width: 230,
    height: 35,
    borderRadius: 20,
    bottom: 40,
    fontSize: 10,
    padding: 9,
  },

  btnSI: {
    backgroundColor: "rgb(156, 57, 57)",
    width: 240,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  cadastroSI: {
    color: "black",
    fontStyle: "italic",
  },

  div: {
    flexDirection: "row",
    color: "white",
    top: 160,
  },

  details: {
    color: "white",
  },

  details_singUP: {
    bottom: 40,
    color: "white",
  },
  bntSair: {
    backgroundColor: "rgb(139, 17, 17)",
    width: 280,
    height: 40,
    borderRadius: 30,
    top: 160,
    alignItems: "center",
    justifyContent: "center",
  },
});
