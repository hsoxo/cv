import React from 'react';
import styled from "@emotion/styled";
import {Switch as MuiSwitch} from "@mui/material";

export const Switch = styled(MuiSwitch)(({ theme }) => ({
  width: 85,
  height: 26,
  borderRadius: 13,
  padding: 0,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before': {
      position: 'absolute',
      fontSize: '12px',
      content: '"中文"',
      right: 20,
      top: 2,
      color: '#fff'
    },
  },
  '& .MuiSwitch-switchBase': {
    '& .MuiSwitch-input': {
      left: '-350%',
      width: '800%',
    },
    padding: 0,
    margin: 2,
    '&.Mui-checked': {
      transform: 'translateX(60px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#2ECA45',
        opacity: 1,
        border: 0,
        '&:before': {
          position: 'absolute',
          fontSize: '12px',
          content: '"English"',
          left: 9,
          top: 2,
        },
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 20,
    height: 20,
    margin: 1,
  },
}));
