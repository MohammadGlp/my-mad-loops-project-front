import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { logIn } from "../../store/auth/authSlice";
import { useGetEmployeeQuery } from "../../store/teacherManager/teacherApiSlice";
import { DecodeToken } from "./../../Core/utils/decodeToken";

const AdminAuth = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const id = DecodeToken(token);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetEmployeeQuery({
    id: id._id,
    token: token,
  });

  useEffect(() => {
    if (data) {
      navigate("/");
      // setTimeout(() => {
      dispatch(logIn({ user: data, token: token }));
      // }, 100);
    }
  }, [isLoading]);

  return null;
};

export default AdminAuth;
