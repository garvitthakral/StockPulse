import React, {useContext} from "react";
import { AuthContext } from "../../App";


const HeroDas = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-6">
      <h1 className="pt-18 text-sm font-semibold">Hi, {user? user : "demouser"}</h1>
      <hr className='text-gray-300' />
    </div>
  );
};

export default HeroDas;