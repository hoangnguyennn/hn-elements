#!/usr/bin/env node

import fs from 'fs'

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv

import path from 'path'

// Lấy đường dẫn của file hiện tại
const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

if (argv.n === undefined) {
  console.error('Vui lòng cung cấp tên component')
  process.exit(1)
}

console.log(argv)

const name = String(argv.n).toLowerCase()
const pascalName = name.charAt(0).toUpperCase() + name.slice(1)

const componentNameTemplate = 'HnComponent'
const componentName = `Hn${pascalName}`

const componentFileTemplate = './component'
const componentFile = `./${name}`

const sourcePrefix = path.resolve(__dirname, 'template')
const componentPrefix = path.resolve(__dirname, '../../src/components')

try {
  // Tạo folder component
  if (!fs.existsSync(`${componentPrefix}/${name}`)) {
    fs.mkdirSync(`${componentPrefix}/${name}`)
  }

  const componentPaths = [
    {
      source: `${sourcePrefix}/component.vue`,
      target: `${componentPrefix}/${name}/${name}.vue`
    },
    {
      source: `${sourcePrefix}/component.ts`,
      target: `${componentPrefix}/${name}/${name}.ts`
    },
    {
      source: `${sourcePrefix}/index.ts`,
      target: `${componentPrefix}/${name}/index.ts`
    }
  ]

  componentPaths.map(file => {
    // Sao chép file
    fs.copyFileSync(file.source, file.target)

    // Đọc file
    fs.readFile(file.target, 'utf-8', (error, data) => {
      if (error) {
        console.log('Đã có lỗi trong quá trình đọc file component')
        return
      }

      // Đổi tên component
      data = data.replaceAll(componentNameTemplate, componentName)
      // Đổi đường dẫn
      data = data.replaceAll(componentFileTemplate, componentFile)

      // Ghi lại vào file
      fs.writeFileSync(file.target, data, 'utf-8')
    })
  })
} catch (error) {
  console.log('Đã có lỗi trong quá trình tạo component')
  console.error(error)
}
