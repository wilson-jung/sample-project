const fs = require('fs')

const generatedFolder = `${__dirname}/../generated`

function errorHandler(err) {
  if (err !== null) {
    console.error(err)
    process.exit(1)
  }
}

function generatedIndex(path) {
  let content = ''
  fs.readdirSync(path).forEach(file => {
    if (file.indexOf('.ts') < 0) {
      generatedIndex(`${path}/${file}`)
      content += `export * from './${file}/index'\n`
    } else {
      const fileName = file.replace('.ts', '')
      content += `export * from './${fileName}'\n`
    }
  })
  fs.writeFile(`${path}/index.ts`, content, errorHandler)
}

generatedIndex(generatedFolder)
