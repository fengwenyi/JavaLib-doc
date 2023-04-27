
# 日期时间工具类

## 介绍

日期时间，在日常开发中，用的比较多，比如：格式化输出，不同类型转换等操作。

名称：DateTimeUtils

描述：日期时间工具类

## 常量

- DateTimePattern.DATE_TIME ：`yyyy-MM-dd HH:mm:ss`
- DateTimePattern.DATE ：`yyyy-MM-dd`
- DateTimePattern.TIME ：`HH:mm:ss`

## LocalDateTime格式化

```java
LocalDateTime localDateTime = LocalDateTime.now();
String result = DateTimeUtils.format(localDateTime, DateTimePattern.DateTime);
System.out.println(result);
```

## LocalDate格式化

```java
LocalDate localDate = LocalDate.now();
String result = DateTimeUtils.format(localDate, DateTimePattern.Date);
System.out.println(result);
```

## Date格式化

```java
Date date = new Date();
String result = DateTimeUtils.format(date, DateTimePattern.DateTime);
System.out.println(result);
```

## 时间戳格式化

```java
long timestamp = System.currentTimeMillis();
String result = DateTimeUtils.format(timestamp, DateTimePattern.DateTime);
System.out.println(result);
```

::: warning 注意
时间戳格式是毫秒！
:::

## 字符串解析为LocalDateTime

```java
String dateTimeStr = "2023-04-27 18:00:00";
String result = DateTimeUtils.parseLocalDateTime(dateTimeStr, DateTimePattern.DateTime);
System.out.println(result);
```

## 字符串解析为LocalDate

```java
String dateTimeStr = "2023-04-27 18:00:00";
String result = DateTimeUtils.parseLocalDate(dateTimeStr, DateTimePattern.DateTime);
System.out.println(result);
```

## 字符串解析为Date

```java
String dateTimeStr = "2023-04-27 18:00:00";
String result = DateTimeUtils.parseDate(dateTimeStr, DateTimePattern.DateTime);
System.out.println(result);
```

## Date转换成毫秒

```java
Date date = new Date();
long result = DateTimeUtils.toMillisecond(date);
System.out.println(result);
```

## LocalDateTime转换成毫秒

```java
LocalDateTime localDateTime = LocalDateTime.now();
long result = DateTimeUtils.toMillisecond(localDateTime);
System.out.println(result);
```

## LocalDate转换成毫秒

```java
LocalDate localDate = LocalDate.now();
long result = DateTimeUtils.toMillisecond(localDate);
System.out.println(result);
```

## Date转换成LocalDateTime

```java
Date date = new Date();
LocalDateTime result = DateTimeUtils.toLocalDateTime(date);
System.out.println(result);
```

## LocalDateTime转换成Date

```java
LocalDateTime localDateTime = LocalDateTime.now();
Date result = DateTimeUtils.toLocalDateTime(localDateTime);
System.out.println(result);
```

## 时间戳转换成LocalDateTime

```java
long timestamp = System.currentTimeMillis();
LocalDateTime result = DateTimeUtils.toLocalDateTime(timestamp);
System.out.println(result);
```

## 字符串合法性校验

```java
String dateTimeStr = "2023-04-27 18:00:00";
boolean result = DateTimeUtils.isValid(dateTimeStr, DateTimePattern.DateTime);
System.out.println(result);
```