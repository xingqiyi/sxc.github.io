---
category: Components
type: Data Entry
title: Switch
---



Select between two status, e.g. Select On or Off.

### Rules
- Used in `List` only.
- There is no need to add extra text to describe the value of  `Switch` .


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| checked    | Whether is checked by default    | Boolean       |   false  |
| disabled   | whether is disabled    | Boolean       |   false  |
| color | Background color when the switch is turned on. | String | #4dd865 |
| onChange   | The callback function that is triggered when the selected state changes. | (checked: bool): void |  -  |
| name(`web only`)  | name of `switch`    | String   |      |
| platform (`web only`) |  set the special style depends on platform, Options  `android`, `ios`， default to be `cross`， which means we will detect UA and change the component style | String | `'cross'`|
