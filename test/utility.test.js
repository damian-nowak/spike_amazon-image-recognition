var expect = require('../src/node_modules/expect');
var rewire = require('../src/node_modules/rewire');
var utility = require('../src/utility.js');

describe('tests of utility functions', () => {
  it('should call utility upload single with ("file")', () => {
    var spy = expect.spyOn(utility.upload, 'single');
    utility.upload.single('file');
    expect(spy).toHaveBeenCalledWith('file');
    spy.restore();
  });

  it('should call utility upload fileDelete with path ("../src/public/images/deleteTest.js")', () => {
    var spy = expect.spyOn(utility, 'fileDelete');
    utility.fileDelete('../src/public/images/deleteTest.js');
    expect(spy).toHaveBeenCalledWith('../src/public/images/deleteTest.js');
    spy.restore();
  });
});
