import FB, { googleProvider, twitterProvider } from "./firebase";

/**
 * メールアドレス、パスワードを使用したユーザ登録
 * 成功したらtrue, 失敗したらfalseを返す。
 * @param email 
 * @param password 
 */
export const signupUser = async(email:string, password:string):Promise<boolean> => {
    console.log(FB);
    const bool:boolean = await FB.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

/**
 * メールアドレス、パスワードを使用したユーザログイン
 * 成功したらtrue, 失敗したらfalseを返す。
 * @param email 
 * @param password 
 */
export const signinUser = async(email:string, password:string):Promise<boolean> => {
    const bool:boolean = await FB.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

/**
 * ユーザの匿名認証
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signinAnonymous = async():Promise<boolean> => {
    const bool:boolean = await FB.auth().signInAnonymously()
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

/**
 * グーグルアカウントを使用した認証
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signinWithGoogle = async():Promise<boolean> => {
    const bool:boolean = await FB.auth().signInWithPopup(googleProvider)
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

/**
 * ツイッターアカウントを使用した認証
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signinWithTwitter = async():Promise<boolean> => {
    const bool:boolean = await FB.auth().signInWithPopup(twitterProvider)
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

/**
 * ログアウト処理
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signout = async():Promise<boolean> => {
    const bool:boolean = await FB.auth().signOut()
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

/**
 * ユーザのログイン状態を確認する
 * ログイン状態ならtrue, ログインしていないならfalseを返す。
 */
export const activeUserExist = async() => {
    let bool:boolean;
    await FB.auth().onAuthStateChanged((user) => {
        if (user) {
            bool = true;
        } else {
            bool = false;
        }
    });
    return bool;
}

export const getActiveUser = () => {
    const user = FB.auth().currentUser;
    return user;
}


export const updateUser = async() => {
    let user:firebase.User;
    await FB.auth().onAuthStateChanged(usr => {
        if (usr) {
            user = usr;
        }
        user = null;
    });
    return user;
}