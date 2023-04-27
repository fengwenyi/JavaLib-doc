
# 日期时间工具类

## 介绍

日期时间，在日常开发中，用的比较多，比如：格式化输出，不同类型转换等操作。

名称：DateTimeUtils

描述：日期时间工具类

## 常用日期格式

- DateTimePattern.DATE_TIME ：`yyyy-MM-dd HH:mm:ss`
- DateTimePattern.DATE ：`yyyy-MM-dd`
- DateTimePattern.TIME ：`HH:mm:ss`

## 格式化方法

### LocalDateTime格式化

```java
LocalDateTime localDateTime = LocalDateTime.now();
String result = DateTimeUtils.format(localDateTime, DateTimePattern.DateTime);
System.out.println(result);
```

