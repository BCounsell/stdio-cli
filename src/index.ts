import {Command, flags} from '@oclif/command'

class StdioCli extends Command {
  static description = 'Command line ulility for testing stdio'
  static hidden = false
  static flags = {

    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),

    stdout:  flags.string({char: 'o', description: 'Outputs string to stdout'}),
    stderr: flags.string({char: 'e', description: 'Outputs string to stderr'}),
    code:   flags.integer({char: 'c', description: 'Set exit code'})

  }

  async run() {
    const { flags } = this.parse(StdioCli)
    if (flags.stdout) this.log(flags.stdout) 
    if (flags.stderr)  this.error(flags.stderr)
    if (flags.code)  this.exit(flags.code)
  }
}

export = StdioCli
