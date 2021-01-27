import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: "#9370DB",
   },
   cardDiv: {
   width:'90%',
   },
  itemDiv: {
    width:'100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemImg:{
    height: 50,
    width:30,
  }
});