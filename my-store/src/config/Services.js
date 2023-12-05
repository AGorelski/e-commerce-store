import { getDocs, collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase";

const productsCollectionRef = collection(db, "products");


export const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);

    const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return Object.values(filteredData);
};

export const addNewProduct = async (name, category, description, imageUrl, price) => {
    await addDoc(productsCollectionRef, {
        Name: name,
        Category: category,
        Description: description,
        ImageUrl: imageUrl,
        Price: price,
    });

}

export const deleteProduct = async (id) => {
    const productDoc = doc(db,"products", id);
    await deleteDoc(productDoc);
}

export const updateProductTitle = async (id, newName) => {
    const productDoc = doc(db,"products", id);
    await updateDoc(productDoc,{ Name: newName } );
}