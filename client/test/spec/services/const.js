'use strict';

describe('Service: const', function () {

  // load the service's module
  beforeEach(module('cldDemoApp'));

  // instantiate service
  var const;
  beforeEach(inject(function (_const_) {
    const = _const_;
  }));

  it('should do something', function () {
    expect(!!const).toBe(true);
  });

});
