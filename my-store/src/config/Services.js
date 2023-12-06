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
        name: name,
        category: category,
        description: description,
        imageUrl: imageUrl,
        price: price,
    });

}

export const deleteProduct = async (id) => {
    const productDoc = doc(db,"products", id);
    await deleteDoc(productDoc);
}

export const updateProductName = async (id, newName) => {
    const productDoc = doc(db,"products", id);
    await updateDoc(productDoc,{ name: newName } );
}