import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('stdio-cli', () => {
  test
  .stdout()
  .do(() => cmd.run(['-o' , 'test message']))
  .it('Outputs stdout', ctx => {
    expect(ctx.stdout).to.equal('test message\n')
  })

  test
  .do(() => cmd.run(['-e', 'error message']))
  .catch(err => expect(err.message).to.equal('error message')) 
  .it("Throws an error")

  test
  .do(() => cmd.run(['-c', '100']))
  .exit(100)
  .it("Sets exit code")

})