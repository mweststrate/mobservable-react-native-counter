'use strict';

jest.autoMockOff();

var React =  require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var counterStore = require('../counter');
var CounterUI = require('../../CounterUI');

describe('ErrorAlert', () => {
  it('should be fine', () => {
    expect(true).toEqual(true);
  });
});

describe('it should could', () => {

  it('changes', () => {
	console.log('hoi');
	var timerComponent = TestUtils.renderIntoDocument(
		React.createElement(CounterUI, { store: counterStore })
	);

    var timerNode = ReactDOM.findDOMNode(timerComponent);

    expect(timerNode.textContent).toEqual('Off');
	console.log('boe');

	// setTimeout(() => {
	// 	TestUtils.findRenderedDOMComponentWithTag(timerComponent, 'input')
    // 	expect(timerNode.textContent).toEqual('On');
	// }, 2000);
  });

});