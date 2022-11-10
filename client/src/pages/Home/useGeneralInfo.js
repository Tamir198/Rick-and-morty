import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeneralInfo } from "redux/actions";

export const useGeneralInfo = () => {
  const { generalInfo } = useSelector((state) => state.generalInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGeneralInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return generalInfo;
};
