---
category: Components
type: Data Entry
title: DatePicker
subtitle: 日期选择
---

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。


## API

适用平台：WEB, React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | 当前选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  |  -  |
| maxDate   | 最大可选日期 | Date  |  -  |
| use12Hours (`WEB only`) | 12小时制 | Boolean | false |
| minuteStep |  分钟数递增步长设置   | Number | 1 |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void | - |
| onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | - |
| format  | 格式化选中的值 | `(value: Date) => date string` / `format string`(对应 mode 下格式分别为:`YYYY-MM-DD`,`HH:mm`,`YYYY-MM-DD HH:mm`) | - |
| title  | 弹框的标题 | string/React.ReactElement |  无  |
| extra   | DatePicker children 建议是 List.Item, 如果不是，需要是自定义组件(组件内需处理`onClick`/`extra`属性) | String  |  `请选择`  |
| prefixCls (`WEB only`) |  class前缀 | string | `am-picker` |
| className (`WEB only`) |  样式类名 | string | - |
