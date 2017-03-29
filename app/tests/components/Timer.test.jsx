var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });
});

describe('Set Timer', () => {
  it('Should set state to started and start time',(done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('stopped');
    timer.handleStatusChange('started');
    expect(timer.state.timerStatus).toBe('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });
});
