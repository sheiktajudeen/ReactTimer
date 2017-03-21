var React = require('react');

// var Timer = () => {
//   return(
//     <div>
//       <p>Timer.jsx rendered</p>
//     </div>
//   );
// };

var Timer = React.createClass({
  render:function(){
    return <p>Timer.jsx</p>
  }
});

module.exports = Timer;
