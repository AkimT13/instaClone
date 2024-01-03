import { auth } from "../Firebase/Firebase";
import { useSignOut } from 'react-firebase-hooks/auth';


const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout = async () => {
        try{
            await signOut();
            localStorage.removeItem('user-info')
        }
        catch(error){
            console.log(error.message)
        }


    }
 
   return (handleLogout,loading,error)
  
}

export default useLogout