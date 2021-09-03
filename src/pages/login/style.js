import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    signinContext:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#ffffff",
        alignItems:"center",
    },
    containerImg:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
    },
    containerInput:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        paddingBottom: 55,
    },
    textLabel:{
        fontSize:17,        
    },
    input: {
        width:"85%",
        borderRadius:7,
        backgroundColor:"#f6f6f6",
        marginBottom:15,
        fontSize:17,
        height:50,
        paddingLeft:10,
    },
    btnSubmit:{
        backgroundColor:"red",
        width:"90%",
        height:35,
        borderRadius:7,
        alignItems:"center",
        justifyContent:"center",
    },
    btnSubmitText:{
        color:"#ffffff",
        fontWeight:"bold",
    },
    btnSignup:{
        marginTop:3,      
    }
})

export default styles