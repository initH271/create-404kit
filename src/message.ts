import { getVersion } from "./utils/getVersion"
import chalk from 'chalk'

const makeBanner = (welcome: string) => `
'##::::::::::'#####:::'##::::::::'##:::'##:'####:'########:
 ##:::'##:::'##.. ##:: ##:::'##:: ##::'##::. ##::... ##..::
 ##::: ##::'##:::: ##: ##::: ##:: ##:'##:::: ##::::: ##::::
 ##::: ##:: ##:::: ##: ##::: ##:: #####::::: ##::::: ##::::
 #########: ##:::: ##: #########: ##. ##:::: ##::::: ##::::
...... ##::. ##:: ##::...... ##:: ##:. ##::: ##::::: ##::::
:::::: ##:::. #####::::::::: ##:: ##::. ##:'####:::: ##::::
::::::..:::::.....::::::::::..:::..::::..::....:::::..:::::
${welcome}
`

export const welcome = async () => {
  const version = await getVersion()
  const welcome = `Welcome to ${chalk.green(`404Kit v${version}`)}! 🚀`
  const banner = makeBanner(welcome)
  console.log(banner)
}

const templates = {
  'Taro 4 基础脚手架': 'https://github.com/initH271/taro-react-template#main'
}

export const sayTemplates = async () => {
  console.log(templates);
  console.log(`更多模板源码请查看: ${chalk.blue('https://github.com/initH271')}`);
}

export const sayVersion = async () => {
  const version = await getVersion()
  console.log(chalk.green(`404Kit v${version}`))
}