import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { fetchData } from "../store/actions/searchAction";

export default function SearchBar({ value, setValue, storeVal, setStoreVal }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(fetchData(value));
    setStoreVal(value);
    setValue("");
  };
  return (
    <div>
      <InputGroup size="lg">
        <FormControl
          value={value}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
      <Button
        variant="contained"
        onClick={handleChange}
        style={{ marginTop: "20px" }}
      >
        Search
      </Button>
      <h4 style={{ color: "teal" }}>{storeVal}</h4>
    </div>
  );
}
