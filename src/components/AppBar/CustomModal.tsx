import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export interface CustomModalProps {
  open: boolean;
  handleCloseCallBack: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function CustomModal({
  open,
  handleCloseCallBack,
  children,
}: Readonly<CustomModalProps>) {
  const handleClose = () => handleCloseCallBack(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
            gap: "10px",
            padding: "10px",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            boxShadow: 24,
            backgroundColor: "#FFF",
            borderRadius: "4px",
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
}
