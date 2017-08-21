---
category: Components
type: Data Entry
title: Range
---


A `Range` component for selecting particular value in range, eg: controls the display brightness of the screen.


### Rule

- By default, the minimum value in the left and maximum value in the right of `Silder` .
- Generally `Slider` is positioned horizontally.


## Common API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| min    |  Number     | 0     | The minimum value the slider can slide to. |
| max    |  Number     | 100    | The maximum value the slider can slide to. |
| step    |  Number or null     | 1    | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`. |
| value    |  [Number, Number]|     | The value of Range. |
| defaultValue    |  [Number, Number]   | [0, 0]    | The default value of Range. |
| disabled    |  Boolean     | false    | If true, the slider will not be interactable. |
| onChange    |  Function     | Noop    | Callback function that is called when the user changes the Range's value. |
| onAfterChange    |  Function     | Noop    | Fired when `ontouchend` is fired. |
| marks (`web only`)     |  Object{Number:String}     | { }    | Tick mark of Range, type of key must be number, and must in closed interval [min, max]. |
| dots (`web only`)     |  Boolean     | false    | Whether the thumb can be dragged over tick only. |
| included (`web only`)    |  Boolean     | true    | Make effect when `marks` not null，`true` means containment and `false` means coordinative  |
| count | number | `1` | Determine how many ranges to render, and multiple handles will be rendered (number + 1). |
| allowCross | boolean | `true` | `allowCross` could be set as `true` to allow those handles to cross. |
| pushable | boolean or number | `true` | `pushable` could be set as `true` to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles. Example: ![](http://i.giphy.com/l46Cs36c9HrHMExoc.gif) |
| handleStyle(`web`)    |  Array[Object]    |    | style of handle，will be applied to mutli handle follow the array elemetns order |
| trackStyle(`web`)    | Array[Object]     |    | style of track，will be applied to mutli track follow the array elemetns order |
| railStyle(`web`)    |  Object     |   | style of slider base style, which means the area that not been selected |

## ToolTip(Web Only)

> Note: In order to be used on demand, `Slider` has been split into `Slider`, `Range` and `creatToolTip` in version 1.0.x, eg: use `Slider` with `tooltip` like this:

````jsx
import { Range, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';

const RangeWithTooltip = createTooltip(Range); // High Order Component
<RangeWithTooltip defaultValue={[4, 16]} min={0} max={30} />
````
