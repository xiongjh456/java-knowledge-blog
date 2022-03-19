---
id: spring
title: spring
sidebar_position: 2
---

1. SPI机制了解吗？说说项目中用SPI的一个例子。

    答：SPI 是 Java 提供的一种服务加载方式，全名为 Service Provider Interface。根据 Java 的 SPI 规范，我们可以定义一个服务接口，具体的实现由对应的实现者去提供，即服务提供者。然后在使用的时候再根据 SPI 的规范去获取对应的服务提供者的服务实现。通过 SPI 服务加载机制进行服务的注册和发现，可以有效的避免在代码中将服务提供者写死。从而可以基于接口编程，实现模块间的解耦。

## 注解

1. 注解“@component”和注解“@Bean”的区别？
