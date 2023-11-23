
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  screen:{
    flex : 1,
    backgroundColor : '#fafad2',
    
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#d2b48c',
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20
  },
  title: {
    flex: 0.1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color : '#f0ffff'
  },
  Instruction: {
    flex: 0.1,
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
    color : '#f0ffff',
    paddingBottom : 20
  },
  question: {
    paddingTop: 20,
    paddingHorizontal:30,
    fontWeight:'bold',
    fontSize : 18,
    color : '#696969'
  },
  options: {
    padding: 10,
    paddingHorizontal: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 30, 
    marginVertical: 5, 
  },
  submitButton:{
    alignItems : 'center',
    backgroundColor : '#9acd32',
    padding:20,
    width : 100,
    alignSelf : 'center',
    margin : 20,
    borderRadius : 10
  },
  submitButtonText:{
    color : 'white',
    fontWeight : 'bold',
    fontSize : 15
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContent: {
    backgroundColor: '#fafad2',
    padding: 60,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth : 5,
    borderColor : '#d2b48c'
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
    color : '#9acd32'
  },
  popupButton: {
    backgroundColor: '#9acd32',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  popupButtonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
  },
  utitle: {
    fontSize: 20,
    marginBottom: 20,
    color : 'black'
  },
  uinput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  startButton : {
    alignItems : 'center',
    backgroundColor : '#ffd700',
    padding:20,
    width : 100,
    alignSelf : 'center',
    margin : 20,
    borderRadius : 10,
    borderWidth : 2,
  },
  startButtonText : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 15
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  ucontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
    borderRadius: 10,
    width: '80%',
    borderWidth : 4,
  },
  uinput : {
    borderRadius : 10,
    borderWidth : 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  showAdButton: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  advertisementContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  advertisementText: {
    fontSize: 18,
    marginBottom: 10,
  },
  downloadButton: {
    backgroundColor: '#ffd700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  advertisementImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  Instructionbackground : {
    flex : 1,
    backgroundColor : 'blue',
  },
  Welcome : {
    backgroundColor : '#d2b48c',
    padding : 30,
    justifyContent : 'center',
    alignSelf : 'center',
    color : 'white',
    fontWeight : 'bold',
    borderRadius : 20,
    marginTop : 30,
    borderWidth : 10,
    borderColor : 'white',
    fontSize : 30
  },
  iheading:{
    backgroundColor : '#d2b48c',
    marginTop : 20,
    width : '80%',
    padding : 20,
    alignSelf : 'center',
    borderWidth : 10,
    borderColor : 'white',
    borderRadius : 20,
    borderColor : 'white',
    fontSize : 20,
    color : 'white'
  },
  Level : {
    marginTop : 20,
    paddingLeft : 20,
    padding : 50,
    backgroundColor : 'white',
    width : '80%',
    alignSelf : 'center',
    borderWidth : 10,
    borderColor : '#d2b48c',
    borderRadius : 20,
  },
  startquiz : {
    marginTop : 20,
    paddingLeft : 20,
    padding : 30,
    backgroundColor : '#d2b48c',
    width : '30%',
    alignSelf : 'center',
    borderWidth : 10,
    borderColor : 'white',
    borderRadius : 20,
    paddingVertical : 20
  },
  startquizText : {
    fontSize : 20,
    color : 'white'
  },
  countdown : {
    flex: 0.1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color : '#f0ffff'
  },
  descriptiveInput : {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 10, 
    marginVertical: 5, 
    borderRadius : 20,
    borderWidth : 2,
    borderColor : "#d2b48c",
    margin : 40   
  },
  buttoncontainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    gap : 20
  },
  error : {
    color : 'red'
  }
});

export default Styles;
