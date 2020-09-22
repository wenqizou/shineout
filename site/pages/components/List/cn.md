# list *列表*

<example />

## API

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | -- | --- |
| data | any[] | [] | 是 | 需要渲染成列表的数据 |
| className | string | 无 | 否 | 扩展外层类名 |
| renderItem | function | 无 | 是 | 渲染列表 |
| onChange | (rowData, rowIndex) => void | 无 | 否 | 选择行。rowData为选中的数据，rowIndex为选中行号。如果需要数据需要格式化的处理，建议配置 format。 |
| keygen | ((data: object) => any) \| string \| boolean | 无 | 是 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |
| value | any[] | 无 | 否 | 当前选中值，格式和 onChange 返回值一致 |
| format | (data: object) => any \| string | d => d | 否 | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |
| footer | (() => React.node) \| React.node | 无 | 否 | 底部内容 |
| style | object | 无 | 否 | 扩展容器样式 |
| scrollLoading | (() => void) | 无 | 否 | 滚动到底部时触发 |
| loading | boolean | 无 | 否 | 加载中 |
| rowClassName | ((rowData, index) => string) \| string | 无 | 否 | 自定义行 className |