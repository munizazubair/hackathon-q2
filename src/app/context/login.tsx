"use client";

import { loginI , loginContext } from "./context";
import { ReactNode , useState} from "react";

export const Loginprovider = ({children} : {children:ReactNode})=> {
    const [context, setContext] = useState<loginI>(
        {
            islogin: true,
            update:(props:loginI)=> {
                setContext(props)
            }
        }
    )
    return(
        <loginContext.Provider value={context}>
            {children}
        </loginContext.Provider>
    )
}

