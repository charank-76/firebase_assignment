import{
    collection, addDoc, query, updateDoc,deleteDoc

} from "firebase/firestore";
import { db } from "../firebase";

export async function createProfile(name, age, userName){
    //create
    try{
        await adddoc (collection(db,"users"),{
            name :name,
            age :age,
            userName :userName
        })
        alert("Profile Created")
    }catch(e){
        alert(e)
    }
}