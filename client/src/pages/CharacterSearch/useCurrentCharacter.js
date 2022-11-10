import { useDispatch, useSelector } from "react-redux";

export const useCurrentCharacter = () => {
  const dispatch = useDispatch();
  const { id: characterId, data } = useSelector(
    (state) => state.characters.currentCharacter
  );

  return { dispatch, id: characterId, data };
};
