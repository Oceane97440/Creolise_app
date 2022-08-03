import { StyleSheet} from 'react-native';


export const Indexstyles = StyleSheet.create({
    container:{
        paddingTop: 30,
        margin:10,
        alignItems:"left",
        //justifyContent: 'center',
    },
    divBtnProfil:{
        display:'flex',
        width: 358,
        flexDirection:'row-reverse',
        bottom:20,
        width: '100%',
    },
    
    baseText: {
        fontFamily: "Verdana",
       textAlign:'left'

      },
      h1:{
          color:"#125386",
          fontSize: 30,
          fontWeight: "bold"
      },
      h2:{
        color:"#125386",
        fontSize: 20,
        fontWeight: "bold",

      },
      input:{

        backgroundColor:'#fafafa',
        margin:10,
        width:200,
        borderRadius:40,
        color:'black',
        paddingLeft: 20,
        margin: 5,

        
    },
    ul:{

      display:'flex',
      flexDirection:'row',
      padding:10,
      alignItems:'center',
    },
    li:{
      paddingRight:10
    },
    bloc:{

      display:'flex',
      flexDirection:'row',
      padding:2,
      alignItems:'center',
    },
    img:{
      width:210,
      height:180,
      borderRadius:10,

    },
    divCard:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
    },
    textCardTop:{
      position: 'relative',
      bottom:170,
      left:0,
      color:"#fff",
      fontWeight:'bold',
    },
    iconlike:{
      position: 'relative',
      bottom:170,
      left:70,
      width:40,
      height: 30,
      alignItems:'center'
    },
    
    textCardBottom:{
      position: 'relative',
      bottom:40,
      left:-100,
      color:"#fff",
      fontWeight:'bold',
      //paddingBottom:5,
      //marginLeft:3

    },
    prix:{
      position: 'relative',
      bottom:40,
      left:-60,
      color:'#d43d35',
      fontWeight:'bold',
      backgroundColor:'#FFF',
      marginRight:1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      
      elevation: 11,
      

    },
    textContaireBotton:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      //marginLeft:0
    },
    iconCat:{
      width:60,
      height:60,
      marginLeft:30,

      
    
    },
    blocCat:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      marginLeft:35,

      
    },
    blocTextCat:{
      flexDirection:'row',
      textAlign:'center',
    },
    textCat:{
      display:'flex',
      textAlign:'center',
      marginLeft:20,
      paddingLeft:10

    },
    divCat:{
      display:'flex',
      marginTop:1,
    
    }
});


export const Detailstyles = StyleSheet.create({
  container: {
      paddingTop: 10,
      margin: 10,
      alignItems: "left",
  },
  divBtnHead: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      bottom: 20,
      justifyContent: 'space-between',
      width: '100%',
  },
  divIconHead: {
      display: 'flex',
      float: 'right',
      flexDirection: 'row',

  },
  iconhead: {
      padding: 10,
      margin: 10
  },
  iconback: {
      padding: 10,
      margin: 10,



  },

  imghead: {
      width: "100%",
      height: 215,
      borderRadius: 20,

  },
  divInfo: {

      padding: 2
  },
  h1: {
      color: "#125386",
      fontSize: 25,
      fontWeight: "bold"
  },
  price: {
      color: "#d43d35",
      fontSize: 25,
      fontWeight: "bold"
  },
  titre: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      padding: 10
  },
  divDescription: {

      marginTop: 10,
      alignSelf: 'flex-start'

  },
  h2: {
      color: "#125386",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5
  },
  icon: {
      width: 40,
      height: 40,

  },
  divIcon: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: 1,
      marginBottom: 5,
      width: 360

  },
  textIcon: {

      padding: 5,
      fontSize: 14,
  },
  divContenteIcone: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
  btnSite: {
      backgroundColor: '#d43d35',
      borderRadius: 20,
      fontWeight: "bold",
      height: 54,
      width: '49%',
      alignItems: 'center',
      padding: 5,

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,

  },
  btnPhone: {
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      fontWeight: "bold",
      height: 54,
      width: '45%',
      alignItems: 'center',
      padding: 5,

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,

  },
  divBtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      position: 'relative',
      bottom: 15,
      padding:10

  },

})   

export const Mapstyles = StyleSheet.create({
  container: {
      paddingTop: 10,
      margin: 10,
      alignItems: "left",
  },
  divBtnHead: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      bottom: 20,
      justifyContent: 'space-between',
      width: '100%',
  },
  divIconHead: {
      display: 'flex',
      float: 'right',
      flexDirection: 'row',

  },
  iconhead: {
      padding: 10,
      margin: 10
  },
  iconback: {
      padding: 10,
      margin: 10,



  },

  imghead: {
      width: "100%",
      height: 215,
      borderRadius: 20,

  },
  divInfo: {

      padding: 2
  },
  h1: {
      color: "#125386",
      fontSize: 25,
      fontWeight: "bold"
  },
  price: {
      color: "#d43d35",
      fontSize: 25,
      fontWeight: "bold"
  },
  titre: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      padding: 10
  },
  divDescription: {

      marginTop: 10,
      alignSelf: 'flex-start'

  },
  h2: {
      color: "#125386",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5
  },
  icon: {
      width: 40,
      height: 40,

  },
  divIcon: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: 1,
      marginBottom: 5,
      width: 360

  },
  textIcon: {

      padding: 5,
      fontSize: 14,
  },
  divContenteIcone: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
  btnSite: {
      backgroundColor: '#d43d35',
      borderRadius: 20,
      fontWeight: "bold",
      height: 54,
      width: '49%',
      alignItems: 'center',
      padding: 5,

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,

  },
  btnPhone: {
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      fontWeight: "bold",
      height: 54,
      width: '45%',
      alignItems: 'center',
      padding: 5,

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,

  },
  divBtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      position: 'relative',
      bottom: 15,
      padding:10

  },

}) 

export const Liststyles = StyleSheet.create({
  divList: {
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'column'
  },
  img: {
      width: '100%',
      height: 230,
      borderRadius: 20,

     // resizeMode: 'center',

  },
  divText: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignContent: 'center',
      alignItems: 'center',
      //bottom:20,
      height:50
  },
  h2: {
      color: "#000",
      fontSize: 25,
      fontWeight: "bold",
  },
  price: {
      color: '#d43d35',
      fontWeight: 'bold',
      fontSize: 25,

  },
  iconlocation:{
    position: 'relative',
    bottom:'80%',
    left:'85%',
    width:30,
    alignItems:'center'
  },
  divCard:{
    width:'100%',
  },
  divCardImg:{
    width:'100%',

   // flexDirection:'row',
    //alignItems:'center',
  }
})

export const Locationstyles = StyleSheet.create({
  container: {
    paddingTop: 30,
    margin: 10,
    alignItems: "left",
  },
  divHead: {
    display: 'flex',
    width: '100%',
  },
  h1: {
    color: "#125386",
    fontSize: 26,
    fontWeight: "bold",
    margin:1
  }
  
 
})