import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../Store/store";
import { setActiveFormName } from "../Store/slice/createFormSlice";
import { useNavigate } from "react-router-dom";

export default function useTitleChangeHook(doNavigate: boolean) {
  const [open, setOpen] = useState<boolean>(false);

  const [formName, setFormName] = useState<string>("");

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormName(event?.target?.value);
    },
    []
  );

  const handleBtnClick = useCallback(
    (isOpen: boolean = false, isCreate = false) => {
      setOpen(isOpen);

      if (isCreate) {
        dispatch(setActiveFormName(formName));
        setFormName("");
        if (doNavigate) {
          navigate("/createForm");
        }
      }
    },
    [dispatch, doNavigate, formName, navigate]
  );

  return {
    open,
    formName,
    handleValueChange,
    handleBtnClick,
  };
}
