import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import image from "../assets/image2.jpg";
import styled from "@mui/styled-engine";

const StyledSelect = styled(Select)`
  margin-bottom: 20px;
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

const ImageDropdown = ({ items, onSelect }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedItems(value);
    onSelect(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="image-dropdown-label">השמלה שאת מעונינת</InputLabel>
      <StyledSelect
        labelId="image-dropdown-label"
        id="image-dropdown"
        multiple
        value={selectedItems}
        label="השמלה שאת מעונינת"
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            <Box display="flex" alignItems="center">
              <img
                src={item.imageUrl}
                alt={`Item ${item.id}`}
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              {item.id}
            </Box>
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

const SelectImage = () => {
  const items = [
    { id: "1", imageUrl: image },
    { id: "2", imageUrl: image },
    { id: "3", imageUrl: image },
    // Add more items as needed
  ];

  const handleSelect = (selectedId) => {
    console.log("Selected item:", selectedId);
    // Do something with the selected item
  };

  return (
    <div>
      <ImageDropdown items={items} onSelect={handleSelect} />
    </div>
  );
};

export default SelectImage;
