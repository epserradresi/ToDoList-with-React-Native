import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: '#37474f',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
  },
  main_container: {
    backgroundColor: '#e0e0e0',
    flex: 1,
  },
  // input_container: {
  // borderWidth: 1,
  // borderRadius: 5,
  // margin: 15,
  // backgroundColor: '#819ca9'
  // },
  input: {
    marginTop: 15,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 7,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#80e27e',
    marginRight: 12,
    marginLeft: 12,
    marginTop: 8,
  },
  button_text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  // taskList: {
  // backgroundColor: '#819ca9',
  // margin: 15,
  // borderRadius: 5,
  // borderWidth: 1,
  // marginTop: 20,
  // },
  task_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    marginBottom: 1,
    backgroundColor: '#eeeeee',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 5,
    flex: 1,
  },
  list_items: {
    fontSize: 15,
    flex: 4,
  },
  delete_button: {
    width: 22,
    height: 22,
    backgroundColor: '#d50000',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 11,
  },
  delete_button_text: {
    color: 'white',
  },
  completed_button: {
    width: 22,
    height: 22,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 11,
    marginRight: 6,
  },
  completed_button_text: {
    color: 'white',
  },
  buttons: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
});
