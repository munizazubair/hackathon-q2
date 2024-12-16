"use client";

import { createContext } from "react";

export interface loginI {
    islogin:boolean,
    update?:(props:loginI)=>void
}


export const loginContext = createContext<loginI | undefined>(undefined);

