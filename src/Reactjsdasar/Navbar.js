import React, {Component} from 'react';

//function component
// export default function Navbar() {
//   return <div>
//       <h1>Navbar</h1>
//   </div>
// }

//pake class component
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
    </div>
    )
  }
}


//pake error function
// export const Navbar = () => {
//   return <div><h1>Navbar</h1></div>;
// };

// export default Navbar