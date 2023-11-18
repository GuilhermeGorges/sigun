import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  // general

  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  scroll: {
    width: '100%',
  },
  button: {
    backgroundColor: '#6C79F1',
    color: '#FFFFFF',
    padding: 8,
    fontWeight: 'bold',
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 20
  },
  input: {
    padding: 8,
    borderColor: 'F1EEEE',
    backgroundColor: 'C1C1C1',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  },
  // login

  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C79F1',
    position: 'relative'
  },
  loginContainer: {
    flex: 3,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayTitle: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  overlayIcon: {
    fontSize: 200,
    color: '#FFFFFF',
  },
  overlayTitleMobile: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  overlayIconMobile: {
    fontSize: 200,
    color: '#FFFFFF',
  },
  hero: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    marginBottom: 20
  },

  // logged-area
  // left

  loggedContainerLeft: {
    flex: 2,
    backgroundColor: '#6C79F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebar: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: '#6C79F1',
    color: '#FFFFFF',
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },

  // right

  loggedContainerRight: {
    flex: 3,
    backgroundColor: '#f5f5f5',
  },
  flatListContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 150,
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
    width: '45%', 
    height: '100%', 
  },
  flatListContainerMobile: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 70,
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'stretch', 
    width: '45%', 
    height: '100%', 
  },
  functionContainer: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  functionName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#6C79F1",
  },
  functionIcon: {
    color: "#6C79F1",
  },

// tela cadastro

  cadastroLeft: {
    flex: 2,
    backgroundColor: '#6C79F1',
    position: 'relative',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#6C79F1',
    color: '#FFFFFF',
    padding: 10,
  },
  cadastroRight: {
    flex: 3,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  titleRoxo: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#6C79F1',
  },
  item: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: "#000000",
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '80%',
    height: '80%',
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#000000",
    borderWidth: 1,
  },
  flatListRenderItem: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    marginBottom: 20,
  },
  // modal 
  modal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#000000",
  },
  
});
