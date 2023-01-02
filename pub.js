import fs from 'fs'
let plugin_content = fs.readFileSync("./plugin.json","utf-8")
plugin_content = JSON.parse(plugin_content)
plugin_content["development"] = undefined
plugin_content = JSON.stringify(plugin_content, null, '\t')
fs.writeFileSync("./dist/plugin.json",plugin_content,"utf-8")

let content = fs.readFileSync("./logo.png")
fs.writeFileSync("./dist/logo.png",content)