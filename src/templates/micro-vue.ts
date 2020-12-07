import Factory from '..'
import TemplateVue from './vue'
import { utils } from 'fbi'

const { formatName } = utils

export default class TemplateMicroVue extends TemplateVue {
  id = 'micro-vue'
  path = 'templates/vue'
  description = 'template for Micro-fontends vue application'
  templates = []

  constructor(public factory: Factory) {
    super(factory)
  }

  protected async gathering(flags: Record<string, any>) {
    const extraData = await this.prompt([
      {
        type: 'input',
        name: 'orgName',
        message: 'Organization name',
        initial({ enquirer }: any) {
          return ''
        },
        validate(value: any) {
          const name = formatName(value)
          return (name && true) || 'please input a valid organization name'
        }
      }
    ] as any)

    await super.gathering(flags)

    this.data.project = {
      ...this.data.project,
      ...extraData,
      isMicro: true
    }
  }

  protected async writing() {
    await super.writing()

    this.files.render = this.files.render?.concat(['micro.config.js'])
  }
}
