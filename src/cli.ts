import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import prompts from 'prompts';
import gitClone from './utils/gitClone';
import { sayTemplates, sayVersion, welcome } from './message';

/**
 * 配置命令参数
 */
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'templates', alias: 'l', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
]

/**
 * 帮助命令
 */
const helpSections = [
  {
    header: '404Kit',
    content: '一个快速生成项目搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        description: '版本号'
      },
      {
        name: 'templates',
        alias: 'l',
        description: '模板列表'
      },
      {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: '帮助'
      }
    ]
  }
]

/**
 * 下载步骤
 */
const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称',
    initial: '404Kit'
  },
  {
    type: 'select',
    name: 'template',
    message: '请选择项目模板',
    choices: [
      { title: 'taro-react-template', value: 1 },

    ]
  }
]

/**
 * 模板github地址and分支
 */
const remoteList = {
  1: 'https://github.com/initH271/taro-react-template.git#main'
}

const options = commandLineArgs(optionDefinitions)

/**
 * 取消
 */
const onCancel = () => {
  console.log("Aborting mission - have a pleasent day 👋")
}

/**
 * 执行
 */
const getCloneTemplate = async () => {
  await welcome()
  const res = await prompts(promptsOptions, { onCancel })
  if (!res.name || !res.template) return
  gitClone(`direct:${remoteList[res.template as keyof typeof remoteList]}`, res.name, { clone: true }, res.template)
}

/**
 * 执行操作
 */
const run = async () => {
  if (options.help) return console.log(commandLineUsage(helpSections))

  if (options.version) return sayVersion()

  if (options.templates) return sayTemplates()

  getCloneTemplate()
}

run()