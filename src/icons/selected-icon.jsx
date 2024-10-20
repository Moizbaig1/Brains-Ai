import * as React from "react";
const SelectedIcon = (props) => (
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width ="100%"
  //   height= {9}
  //   fill="none"
  //   {...props}
  // >

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%" // Set width to 100%
    height={9} // Maintain a fixed height
    fill="none"
    {...props}
  >
    <circle cx={4.73} cy={4.975} r={4} fill="#00A7E1" />
    <path
      stroke="#00A7E1"
      strokeLinecap="round"
      strokeWidth={4}
      d="M14.73 4.975h36"
    />
  </svg>
);
export default SelectedIcon;
