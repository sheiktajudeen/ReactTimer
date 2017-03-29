var React = require('react');

var Clock = require('Clock');
var TimerForm = require('TimerForm');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return{
      count:0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function (){
    console.log('componentWillUnmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function (){
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount >=0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({timerStatus:'stopped'});
      }
    },1000);
  },
  handleSetCountdown:function(seconds){
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({timerStatus: newStatus});
  },
  render: function(){
    var {count,timerStatus} = this.state;
    var renderControlArea = () => {
      if(timerStatus !== 'stopped'){
        return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
      }
      else {
        return <TimerForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
