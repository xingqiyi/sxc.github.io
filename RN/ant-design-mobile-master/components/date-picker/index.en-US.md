---
category: Components
type: Data Entry
title: DatePicker
---

Used to select a date or time.

### Rules
- A maximum of five independent rollers are shown, each of which represents a different value.


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| mode  | mode value, can be a `date` or `time` or `datetime` or `year` or `month` | String | `date` |
| value | the currently selected value | Date | - |
| minDate   | minimum date | Date  |  -  |
| maxDate   | maximum date | Date  |  -  |
| use12Hours (`WEB only`) | 12 hours display mode | Boolean | false |
| minuteStep |   The amount of time, in minutes, between each minute item.    | Number | 1 |
| locale   | international, can override the configuration of the global `[LocaleProvider](https://mobile.ant.design/components/locale-provider)` | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText} |  -  |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange  | change handler | (date: Object): void |  -  |
| onValueChange | fire when picker col change | (vals: any, index: number) => void | - |
| format  | format the selected value | `(value: Date) => date string` / `format string`(corresponding mode under the format are: `YYYY-MM-DD` or `HH:mm` or `YYYY-MM-DD HH:mm`) | - |
| title  | title | string/React.ReactElement |  -  |
| extra   | DatePicker's children is best to `List.Item`, if not, need to be a custom component (the `onClick`/`extra` props need to be handled in the component) | String  |  `请选择`  |
| disabled   | set disabled  | Boolean |    false  |
| prefixCls (`WEB only`) |  prefix class  | string | `am-picker` |
| className (`WEB only`) |  样式类名 | string | - |
