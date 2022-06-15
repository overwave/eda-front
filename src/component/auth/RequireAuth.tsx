import {Navigate, useLocation} from "react-router-dom";
import {createContext, useContext} from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {

    interface AuthContextType {
        user: any;
        signin: (user: string, callback: VoidFunction) => void;
        signout: (callback: VoidFunction) => void;
    }

    const authContext = createContext<AuthContextType>(null!);
    let auth = useContext(authContext);
    let location = useLocation();

    if (false) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
