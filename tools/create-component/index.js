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
const destinationPrefix = path.resolve(__dirname, '../../src/components')

try {
  // Tạo folder component
  if (!fs.existsSync(`${destinationPrefix}/${name}`)) {
    fs.mkdirSync(`${destinationPrefix}/${name}`)
  }

  // Tạo file component
  fs.copyFileSync(
    `${sourcePrefix}/component.vue`,
    `${destinationPrefix}/${name}/${name}.vue`
  )
  // Tạo file component type
  fs.copyFileSync(
    `${sourcePrefix}/component.ts`,
    `${destinationPrefix}/${name}/${name}.ts`
  )
  // Tạo file index
  fs.copyFileSync(
    `${sourcePrefix}/index.ts`,
    `${destinationPrefix}/${name}/index.ts`
  )

  fs.readFile(
    `${destinationPrefix}/${name}/${name}.vue`,
    'utf-8',
    (error, data) => {
      if (error) {
        console.log('Đã có lỗi trong quá trình đọc file component')
        return
      }

      // Đổi tên component
      data = data.replaceAll(componentNameTemplate, componentName)
      data = data.replaceAll(componentFileTemplate, componentFile)

      fs.writeFileSync(
        `${destinationPrefix}/${name}/${name}.vue`,
        data,
        'utf-8'
      )
    }
  )

  fs.readFile(
    `${destinationPrefix}/${name}/${name}.ts`,
    'utf-8',
    (error, data) => {
      if (error) {
        console.log('Đã có lỗi trong quá trình đọc file component')
        return
      }

      // Đổi tên component
      data = data.replaceAll(componentNameTemplate, componentName)
      data = data.replaceAll(componentFileTemplate, componentFile)

      fs.writeFileSync(`${destinationPrefix}/${name}/${name}.ts`, data, 'utf-8')
    }
  )

  fs.readFile(
    `${destinationPrefix}/${name}/index.ts`,
    'utf-8',
    (error, data) => {
      if (error) {
        console.log('Đã có lỗi trong quá trình đọc file component')
        return
      }

      // Đổi tên component
      data = data.replaceAll(componentNameTemplate, componentName)
      data = data.replaceAll(componentFileTemplate, componentFile)

      fs.writeFileSync(`${destinationPrefix}/${name}/index.ts`, data, 'utf-8')
    }
  )
} catch (error) {
  console.log('Đã có lỗi trong quá trình tạo component')
  console.error(error)
}
