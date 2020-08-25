import { createContext } from 'react'

const AppContext = createContext({})
// React.createContext(defaultValue)
// 如果匹配不到最新的 Provider 则会使用默认值，默认值(defaultValue)一般只有在对组件进行单元测试（组件并未嵌入到父组件中）的时候，比较有用

export default AppContext

// 如果要使用创建的上下文，需要通过 Context.Provider 最外层包装组件，并且需要显示的通过 <MyContext.Provider value={{xx:xx}}> 的方式传入 value，指定 context 要对外暴露的信息。
// Provider 接收一个 value 属性，传递给消费组件。
// 一个 Provider 可以和多个消费组件有对应关系。
// 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。

// 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
// Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新
