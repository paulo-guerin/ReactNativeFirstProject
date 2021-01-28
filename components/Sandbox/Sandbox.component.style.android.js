import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
 container: {
   justifyContent: "center",
   paddingTop: 44,
   padding: 8
 },
  containerCamera: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },

 header: {
   fontSize: 18,
   fontWeight: "bold",
   textAlign: "center"
 },
 paragraph: {
   margin: 24,
   textAlign: "center"
 },
 separator: {
   marginVertical: 8,
   borderBottomColor: "#737373",
   borderBottomWidth: StyleSheet.hairlineWidth
 },
 camera: {
    height:500,
 },
    buttonContainer: {
     flex: 1,
     backgroundColor: 'transparent',
     flexDirection: 'row',
     margin: 20,
    },
    button: {
     flex: 0.1,
     alignSelf: 'flex-end',
     alignItems: 'center',
    },
    text: {
     fontSize: 18,
     color: 'white',
    },
});
