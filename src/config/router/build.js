const fs = require('fs')
const router = require('./index.js')

const home = require('./modules/home.js')
const error = require('./modules/error.js')
const user = require('./modules/user.js')

const allPageSetting = [
    home,
    error,
    user,
    require('./modules/course'),
    require('./modules/find'),
    require('./modules/group'),
    require('./modules/message'),
]

/**
 * 加载'./modules'目录子路由配置文件
 * @returns {*[]}
 */
const getRouter = () => {
    let router = []
    allPageSetting.forEach(item => {
        router = [...router, ...buildRouter(item)]
    })
    return router
}

/**
 * 将子路由模块配置文件转化为pages.json配置文件格式
 * @param route
 * @returns {*[]}
 */
const buildRouter = route => {
    const res = []
    const {baseUrl, children} = route
    children.forEach(item => {
        let obj = {};
        item.path ? obj.path = baseUrl + item.path : null;
        item.name ? obj.name = item.name : null;
        obj.path = `${obj.path}/index`
        obj = {
            ...obj,
            style: {
                navigationBarTitleText: item.text
            }
        }
        item.style ? obj.style = item.name : null;
        res.push(obj)
    })
    return res
}

/**
 * 构建 pages 并写入 pages.json 文件
 * 用两个空格缩进pages.json，如果喜欢制表符，第三个参数更换你为\t即可
 * @type {*[]}
 */
router.pages = getRouter()

fs.writeFile('src/pages.json',
    JSON.stringify(router, null, '  '),
    err => {
        err ? console.error(err) : console.log('pages.json文件更新成功!')
    }
)
