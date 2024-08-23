import { useEffect, useState } from 'react';
import { auth, db } from "./Firebase";
import { getDoc, doc } from "firebase/firestore";

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) { // Check if user is not null
                console.log(user);
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("User data not found");
                }
            } else {
                console.log("No user is logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []); // empty dependency array to call fetchUserData only once on mount

    async function handleLogout() { // Corrected function name
        try {
            await auth.signOut();
            window.location.href = "/login";
        } catch (error) {
            console.error("Error logging out", error.message);
        }
    }

    return (
        <div>
            {userDetails ? (
                <>
                    <h3>Welcome {userDetails.firstName}</h3>
                    <div>
                        <p>Email: {userDetails.email}</p>
                        <p>First Name: {userDetails.firstname}</p>
                        <p>Last Name: {userDetails.lastname}</p>
                        <button onClick={handleLogout}>Logout</button> {/* Corrected function call */}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
