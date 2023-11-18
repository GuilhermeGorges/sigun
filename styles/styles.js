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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  loginContainer: {
    flex: 2,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayTitle: {
    position: 'absolute',
    top: '50%', 
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    zIndex: 2,
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
    flex: 1,
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
    color: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },

  // right

  loggedContainerRight: {
    flex: 2,
    backgroundColor: '#f5f5f5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  flatListContainer: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 70,
    flex: 1,
    flexDirection: 'column', // ou 'row' dependendo da orientação desejada
    justifyContent: 'space-between', // ou 'space-around' dependendo do espaçamento desejado
    alignItems: 'stretch', 
    borderWidth: 1,
    borderRadius: 10, 
    width: '80%', 
    height: '80%', 
  },
  functionContainer: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
  },
  functionName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#6C79F1",
    borderWidth: 1,
  },
  functionIcon: {
    color: "#6C79F1",
    borderWidth: 1,
  },
});
