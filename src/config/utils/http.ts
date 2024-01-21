import {UniAdapter} from "uniapp-axios-adapter";

class HttpRequest<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    public CourseController = new CourseApi(this)
    public SearchController = new SearchController(this)
    public TagController = new TagApi(this)
}

const api = new HttpRequest({
    // paramsSerializer: (params) => qs.stringify(params, { indices: false }),
    baseURL: "http://192.168.50.42:5508/",
    adapter: UniAdapter, // 指定适配器
    timeout: 3000
})

api.instance.interceptors.request.use(
    config => {
        config.headers!["token"] = `Berry ${useTokenStore().token}`
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

api.instance.interceptors.response.use(
    res => {
        const code = res.data.state.code
        const msg = res.data.state.msg || '系统未知错误，请反馈给管理员'
        if (code !== 0) {
            console.error(msg)
            return Promise.reject(new Error(msg))
        } else {
            return res
        }
    },
    error => {
        let {errMsg: msg} = error
        if (msg === 'Network Error') {
            msg = '后端接口连接异常'
        } else if (msg.includes('timeout')) {
            msg = '系统接口请求超时'
        } else if (msg.includes('Request failed with status code')) {
            // 获得异常http状态码
            const statusCode = +msg.substr(msg.length - 3)
            if (statusCode === 401) {

                return Promise.reject(new Error('无效的会话，或者会话已过期，请重新登录。'))
            }
            msg = '系统接口' + statusCode + '异常'
        }
        console.error(msg)
        return Promise.reject(error)
    }
)
export default api
