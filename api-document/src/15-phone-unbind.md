# 取消手机号绑定

* POST `/capi.php`
* c `15`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| code | string | 手机号验证码 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| code | int | 状态 | 1表示操作成功 |
| message | string | 提示信息 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "data": [],
    "code": 1,
    "message": "操作成功"
  }
}
```
