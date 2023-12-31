import { useDispatch } from "react-redux";
import { logOut } from "../store/authSlice";
const useLogout = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const handleLoguot = () =>
    dispatch(logOut())
      .unwrap()
      .then(() => {
        // history.push("/");
      })
      .catch(() => {
        window.location.reload();
      });
  return handleLoguot;
};

export default useLogout;
