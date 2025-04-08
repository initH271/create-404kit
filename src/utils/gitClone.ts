import download from 'download-git-repo'
import chalk from 'chalk'
import ora from 'ora'

/**
 * 下载git仓库
 * @param remote 远程仓库地址
 * @param name 本地仓库名称
 * @param option 下载选项
 * @param tempIndex 模板索引
 */
export default (remote: string, name: string, option: any, tempIndex: number) => {
  const spinner = ora(`正在下载模板...`).start()
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err: any) => {
      if (err) {
        spinner.fail()
        console.log('err:>> ', chalk.red(err));
        reject(err)
        return
      }
      spinner.succeed(chalk.green(`模板下载成功！${tempIndex == 0 ? '快来开启你的个人组件库开发吧' : ''}\r\n`))
      console.log(chalk.blue(`cd ${name}\r\n`));
      if (tempIndex == 0) {
        console.log(chalk.blue(`pnpm install\r\n`));
        console.log(chalk.blue(`pnpm build:keep\r\n`));
      } else {
        console.log(chalk.blue(`pnpm install\r\n`));
        console.log(chalk.blue(`pnpm dev\r\n`));
      }

      resolve(void 0)
    })
  })
}