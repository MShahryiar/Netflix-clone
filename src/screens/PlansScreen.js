import React, { useEffect, useState } from 'react'
import "./PlansScreen.css";
import {db} from "../firebaseHandler";
import { doc, getDoc,getDocs, where, query, collection } from "firebase/firestore";

function PlansScreen() {
    // const [products, setProducts] = useState([]);

    async function getProducts(){
        const q = query(collection(db, "products"), where("active","==",true));
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            console.log(doc.id, " => ", doc.data());
        })
    }
   
    
    useEffect(()=>{
        getProducts();
    },[])
    
    
    return (
        <div>PlansScreen</div>
        )
    }
    
    export default PlansScreen

    // async function getProducts(){
    //     const docRef = doc(db, "products","prod_M63dZN8xSD3hqD");
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //     }
    // }