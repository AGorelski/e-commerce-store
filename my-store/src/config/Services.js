import { getDocs, collection, doc, addDoc, deleteDoc, updateDoc, getDoc, setDoc } from "firebase/firestore"
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

export const getHighestPricedProduct = async () => {
    const data = await getDocs(productsCollectionRef);
    const products = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Sort products by price in descending order and pick the first one
    const highestPricedProduct = products.sort((a, b) => b.price - a.price)[0];
    return highestPricedProduct;
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
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
}

export const updateProduct = async (id, updatedFields) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, updatedFields);
};

//Handles users collection
export const assignUserRole = async (uid, email, role = "user") => {
    try {
        await setDoc(doc(db, "users", uid), { email, role });
    } catch (error) {
        console.error("Error in assigning user role:", error);
    }
};

export const handleGoogleSignIn = async (uid, email) => {
    try {
        const userDocRef = doc(db, "users", uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            // Set the user document with the default role if it doesn't exist
            await setDoc(userDocRef, { email, role: "user" });
        }
    } catch (error) {
        console.error("Error in handling Google sign-in:", error);
    }
};

export const getUserRole = async (userId) => {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
        return userDoc.data().role;
    } else {
        return null;
    }
};






