import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from '../Firebase/Firebase';



const useLogout = () => {
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	

	const handleLogout = async () => {
		try {
			await signOut();
            console.log("logout works")
			localStorage.removeItem("user-info");
			
		} catch (error) {
			console.log(error.message)
		}
	};

	return [handleLogout, isLoggingOut, error ];
};

export default useLogout;