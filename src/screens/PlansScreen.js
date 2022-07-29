import React, { useEffect, useState } from 'react'
import "./PlansScreen.css";
import {db} from "../firebaseHandler";
import { doc, getDoc } from "firebase/firestore";

function PlansScreen() {
    // const [products, setProducts] = useState([]);

    async function getProducts(){
        const docRef = doc(db, "products","prod_M63dZN8xSD3hqD");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
   
    
    useEffect(()=>{
        getProducts();
    },[])
    
    
    return (
        <div>PlansScreen</div>
        )
    }
    
    export default PlansScreen
    
    // const cityRef = db.collection('cities').doc('SF');
    // const doc = await cityRef.get();
    // if (!doc.exists) {
    //     console.log('No such document!');
    // } else {
    //     console.log('Document data:', doc.data());
    // }




    // db.collection("products").where("active","==", true)
    // .then((QuerySnapshot) => {
    //     const products = {};
    //     QuerySnapshot.forEach(async (productDoc) => {
    //         products[productDoc.id] = productDoc.data();
    //         const priceSnap = await productDoc.ref.collection
    //         ("prices").get();
    //         priceSnap.docs.forEach((price)=>{
    //             products[productDoc.id].prices={
    //                 priceId:price.id,
    //                 priceData:price.data(),
    //             };
    //         });
    //     });
    //     setProducts(products);
    // }); 