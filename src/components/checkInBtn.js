import * as React from 'react';
import {useState} from 'react';

export default function CheckInButtons() {
  const handleClick = event => {
    event.currentTarget.disabled = true;
    console.log('button clicked');
  };

  return (
    <div>
      {/* ✅ disable button after it has been clicked once */}
      <button onClick={handleClick
      }>Check in
      </button>
    </div>
  );

  
}

// export default CheckInButtons

// const CheckInNowBtn = () => {


// const blue = {
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
// };

// const CustomButton = styled(ButtonUnstyled)`
//   font-family: IBM Plex Sans, sans-serif;
//   font-weight: bold;
//   font-size: 0.875rem;
//   background-color: ${blue[500]};
//   padding: 12px 24px;
//   border-radius: 8px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: ${blue[600]};
//   }

//   &.${buttonUnstyledClasses.active} {
//     background-color: ${blue[700]};
//   }

//   &.${buttonUnstyledClasses.focusVisible} {
//     box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
//     outline: none;
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;


//   return (
//     <Stack spacing={2} direction="row">
//       <CustomButton>Check In - Forever</CustomButton>
//       <CustomButton disabled>You've already checked in!</CustomButton>
//     </Stack>
//   );
// }

// export default CheckInNowBtn