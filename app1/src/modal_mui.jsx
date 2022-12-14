import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modal_MUI(
  onChangeImage,
  onChangeTitle,
  onChangePrice,
  addButtonFunc
) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="large" onClick={handleOpen}>
        Add+
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="standard-basic"
            label="Image Path"
            variant="standard"
            onChange={onChangeImage}
          />
          <TextField
            id="standard-basic"
            label="Product Title"
            variant="standard"
            onChange={onChangeTitle}
          />
          <TextField
            id="standard-basic"
            label="product Price"
            variant="standard"
            onChange={onChangePrice}
          />
          <br />
          <Button onClick={addButtonFunc} size="small">
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
