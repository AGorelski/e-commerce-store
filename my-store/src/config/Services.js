import { getDocs, collection, doc } from "firebase/firestore"
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