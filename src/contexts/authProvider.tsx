import { PropsWithChildren, createContext, useState } from 'react';

// @ts-ignore
export const AuthContext = createContext();
// @ts-ignore
export const AuthDispatcher = createContext();

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [test, setTest] = useState(false);

    return (
        <AuthContext.Provider value={{ test }}>
            <AuthDispatcher.Provider value={{ setTest }}>{children}</AuthDispatcher.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
