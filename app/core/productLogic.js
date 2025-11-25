import { database } from "./firebase";
import {doc,setDoc,getDocs,collection,query,where,deleteDoc} from 'firebase/firestore'

export async function addProduct(product){
    try{
        await setDoc(doc(database,"Products",product.id),product);
    }catch(exception){
        console.log(JSON.stringify(exception))
    }
}

export async function fetchProducts(){
    //collection reference
    const productCollectionRef = collection(database,"Products")
    //Query condition 
    // where query with relational operators (==, > , < , !=, >=,<=)
    const q = query(productCollectionRef);

    const products = await getDocs(q);
    // products.forEach((document)=> {
    //     console.log(JSON.stringify(document.data()));
    // })
    return products.docs;
}

export async function deleteProduct(id){


const productCollectionRef = collection(database,"Products")
  
    // multiple document Delete
    // const q = query(productCollectionRef,where('price','==',price));
    // const products = await getDocs(q);
    // products.forEach(async (product)=> {
    //     await deleteDoc(doc(database,"Products",product.id))
    // })
   
    //Single document Delete
     await deleteDoc(doc(database,"Products",id))

}   