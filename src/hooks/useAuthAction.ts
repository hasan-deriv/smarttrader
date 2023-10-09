import { useContext } from 'react';
import { AuthDispatcher } from 'Contexts/authProvider';

const useAuthAction = () => useContext(AuthDispatcher);

export default useAuthAction;
