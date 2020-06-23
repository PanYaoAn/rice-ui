// 这是整个包的入口
import Button from './button'
import CheckboxGroup from './checkbox-group'
import Checkbox from './checkbox'
import Dialog from './dialog'
import FormItem from './form-item'
import Form from './form'
import Input from './input'
import RadioGroup from './radio-group'
import Radio from './radio'
import Switch from './switch'
import './fonts/iconfont.css'

// 存储组件列表
const components = [
        Button,
        CheckboxGroup,
        Checkbox,
        Dialog,
        FormItem,
        Form,
        Input,
        RadioGroup,
        Radio,
        Switch
    ]
    // 判断是否直接引入文件,如果是,几不用调用Vue.use
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
const install = function(Vue) {

    //全局注册所有组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })

}
export default install