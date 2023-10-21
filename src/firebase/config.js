import firebase from "firebase/app"
import "firebase/auth"

if(!firebase.app.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLICFIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLICFIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLICFIREBASE_PROJECT_ID,
    })
}

export default firebase