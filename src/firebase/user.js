import firebase from 'firebase'

export const SignInWithEmail = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
            resolve(user);  
        } catch (error) {
            reject(error);
        }
    })
}

export const CreateUserWithEmail = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = userData;
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            
            // save user data in cloud firestore

            const ref = firebase.firestore().collection('technicians').doc(user.uid);

            await ref.set(userData);

            const data = await ref.get();

            const _user = { id: data.id, ...data.data() };

            resolve(_user);

        } catch (error) {
            reject(error);
        }
    })
}

