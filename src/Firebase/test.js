import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("I5TYOLDzPPTrmHj02esT")
  .collection("cartItems")
  .doc("nwJW5BhhtA33iptgaM5s");

firestore.doc("/users/I5TYOLDzPPTrmHj02esT/cartItems/nwJW5BhhtA33iptgaM5s");
firestore.collection("/users/I5TYOLDzPPTrmHj02esT/cartItems");
