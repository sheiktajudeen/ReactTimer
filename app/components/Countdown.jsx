var React = require('react');

// var Countdown = () => {
//   return(
//     <div>
//       <p>Countdown.jsx rendered</p>
//     </div>
//   );
// };

var Countdown = React.createClass({
  render: function(){
    return <p>Countdown.jsx</p>;
  }
});

module.exports = Countdown;
