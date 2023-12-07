import { getDocs, collection, doc, addDoc, deleteDoc, updateDoc, getDoc } from "firebase/firestore"
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

export const getProductById = async (productId) => {
    const productDoc = doc(db, "products", productId);
    const docSnap = await getDoc(productDoc);
  
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      // Handle the case where the product does not exist
    }
  };
  

export const addNewProduct = async (name, category, description, imageUrl, price, quantity = 0) => {
    await addDoc(productsCollectionRef, {
        name: name,
        category: category,
        description: description,
        imageUrl: imageUrl,
        price: price,
        quantity: quantity  // Initialize quantity here
    });
}


export const deleteProduct = async (id) => {
    const productDoc = doc(db,"products", id);
    await deleteDoc(productDoc);
}

export const updateProduct = async (id, updatedFields) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, updatedFields);
};





