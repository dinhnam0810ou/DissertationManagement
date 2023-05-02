import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function Newdissertation() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const handleAddDessertation = (data) => {
    console.log(data);
  };
  return (
    <>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            variant="outlined"
            label="Nhập tên"
            error={errors.name}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      <Controller
        name="SVname"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            variant="outlined"
            label="Nhập tên SV1"
            error={errors.SVname}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      <Controller
        name="SVname2"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            variant="outlined"
            label="Nhập tên SV2"
            error={errors.SVname2}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      <TextField
        fullWidth
        select
        margin="normal"
        variant="outlined"
        label="Giang vien"
      >
        <MenuItem value={"true"}>Đề tham khảo</MenuItem>
        <MenuItem value={"false"}>Đề private</MenuItem>
      </TextField>
      <TextField
        fullWidth
        select
        margin="normal"
        variant="outlined"
        label="Giang vien"
      >
        <MenuItem value={"true"}>Đề tham khảo</MenuItem>
        <MenuItem value={"false"}>Đề private</MenuItem>
      </TextField>

      <Button onClick={handleSubmit(handleAddDessertation)}>Thêm bộ đề </Button>
      {/* <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}
    </>
  );
}

export default Newdissertation;
