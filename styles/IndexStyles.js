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
        height:'4%',
        margin:10,
        width:'90%',
        borderRadius:40,
        padding:20,
        color:'black',

        
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
      left:70
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