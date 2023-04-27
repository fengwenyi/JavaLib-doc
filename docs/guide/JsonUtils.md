# JSON工具类

## 介绍

com.fengwenyi.javalib.convert.JsonUtils

## 对象转JSON字符串

```java
User user = new User();
user.setName("张三");
user.setAge(16)
String result = JsonUtils.convertString(user);
System.out.println(result);
```

## JSON字符串转换成对象

```java
String jsonStr = "{\"name\":\"张三\",\"age\":16}";
String result = JsonUtils.convertObject(jsonStr, User.class);
System.out.println(result);
```

## JSON字符串转换成对象 2

待转换的JSON字符串如下：

```json
{
    "code":"success",
    "message":"Success",
    "data":{
        "name":"张三",
        "age":16
    }
}
```

ResultTemplate如下：

```java
public class ResultTemplate<T> {
    String code;
    String message;
    T data;
}
```

User类如下：

```java
public class User {
    String name;
    int age;
}
```

我们就可以这样进行转换：

```java
String jsonStr = "{\"code\":\"success\",\"message\":\"Success\",\"data\":{\"name\":\"张三\",\"age\":16}}";
ResultTemplate<User> result = JsonUtils.convertObject(
    jsonStr,
    new TypeReference(ResultTemplate<User>(){})
);
System.out.println(result);
```

## JSON字符串转换成集合

```java
String jsonStr = "[{\"name\":\"张三\",\"age\":16}]";
List<User> result = JsonUtils.convertCollection(jsonStr, List.class, User.class);
System.out.println(result);
```

## JSON字符串转换成集合 2

```java
String jsonStr = "[{\"name\":\"张三\",\"age\":16}]";
List<User> result = JsonUtils.convertCollection(
    jsonStr,
    new TypeReference(List<User>(){})
);
System.out.println(result);
```

## JSON字符串转换成Map

```java
String jsonStr = "{\"name\":\"张三\"}";
Map<String, String> result = JsonUtils.convertMap(jsonStr, String.class, String.class);
System.out.println(result);
```

::: tip 提示
第二个参数是Map的key的类型。<br>
第三个参数是Map的value的类型。
:::