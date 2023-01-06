import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//redux call
import { useDispatch } from "react-redux";
import { logoutUser } from "features/user/userSlice";

function SignInBasic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());
    navigate("/");
  }, []);

  return <div></div>;
}

export default SignInBasic;
