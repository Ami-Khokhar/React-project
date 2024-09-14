import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";

export default function Form() {
  const [date, setDate] = useState('');
  const [district1, setDistrict1] = useState('');
  const [month, setMonth] = useState('');
  const [daysInMonth, setDaysInMonth] = useState([]);

  const getDaysInMonth = (month) => {
    const year = new Date().getFullYear(); 
    const days = new Date(year, month, 0).getDate(); 
    return Array.from({ length: days }, (_, i) => i + 1); 
  };

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth);
    setDate(''); 
    const days = getDaysInMonth(parseInt(selectedMonth, 10)); 
    setDaysInMonth(days); 
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDistrictChange1 = (event) => {
    setDistrict1(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 2,
      }}
    >
      {/* Month Selector */}
      <FormControl fullWidth margin="normal" sx={{ maxWidth: 175 }}>
        <InputLabel id="month-label">Month</InputLabel>
        <Select
          labelId="month-label"
          id="month"
          value={month}
          label="Month"
          onChange={handleMonthChange}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Date Selector */}
      <FormControl fullWidth margin="normal" sx={{ maxWidth: 175 }}>
        <InputLabel id="date-label">Date</InputLabel>
        <Select
          labelId="date-label"
          id="date"
          value={date}
          label="Date"
          onChange={handleDateChange}
          disabled={!month}
        >
          {daysInMonth.length > 0 ? (
            daysInMonth.map(day => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>No dates available</MenuItem>
          )}
        </Select>
      </FormControl>

      {/* District 1 Selector */}
      <FormControl fullWidth margin="normal" sx={{ maxWidth: 175 }}>
        <InputLabel id="district1-label">District 1</InputLabel>
        <Select
          labelId="district1-label"
          id="district1"
          value={district1}
          label="District 1"
          onChange={handleDistrictChange1}
        >
          {[
            "Chanakyapuri", "Civil Lines", "Connaught Place", "Daryaganj", "Defence Colony",
            "Delhi Cantonment", "Gandhi Nagar", "Hauz Khas", "Kalkaji", "Karol Bagh",
            "Kotwali", "Model Town", "Najafgarh", "Narela", "Paharganj",
            "Parliament Street", "Patel Nagar", "Preet Vihar", "Punjabi Bagh", "Rajouri Garden",
            "Sadar Bazaar", "Saraswati Vihar", "Seelampur", "Seemapuri", "Shahdara",
            "Vasant Vihar", "Vivek Vihar"
          ].map(district => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Link to="/output1" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}>Submit</button>
      </Link>
    </Box>
  );
}

