### AST 概述

> AST 全称是是 Abstract Syntax Tree，中文为抽象语法树，将我们所写的代码转换为机器能识别的一种树形结构。其本身是由一堆节点（Node）组成，每个节点都表示源代码中的一种结构。不同结构用类型（Type）来区分，常见的类型有：Identifier(标识符)，Expression(表达式)，VariableDeclaration(变量定义)，FunctionDeclaration(函数定义)等。

### AST 结构

随着 JavaScript 的发展，为了统一 ECMAScript 标准的语法表达。社区中衍生出了 ESTree Spec，是目前社区所遵循的一种语法表达标准。

ESTree 提供了例如 Identifier、Literal 等常见的节点类型。

#### 节点类型

| 类型        | 说明                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- |
| File        | 文件 (顶层节点包含 Program)                                                                  |
| Program     | 整个程序节点 (包含 body 属性代表程序体)                                                      |
| Directive   | 指令 (例如 "use strict")                                                                     |
| Comment     | 代码注释                                                                                     |
| Statement   | 语句 (可独立执行的语句)                                                                      |
| Literal     | 字面量 (基本数据类型、复杂数据类型等值类型)                                                  |
| Identifier  | 标识符 (变量名、属性名、函数名、参数名等)                                                    |
| Declaration | 声明 (变量声明、函数声明、Import、Export 声明等)                                             |
| Specifier   | 关键字 (ImportSpecifier、ImportDefaultSpecifier、 ImportNamespaceSpecifier、ExportSpecifier) |
| Expression  | 表达式                                                                                       |

#### 公共属性

| 类型             | 说明                                             |
| ---------------- | ------------------------------------------------ |
| type             | AST 节点的类型                                   |
| start            | 记录该节点代码字符串起始下标                     |
| end              | 记录该节点代码字符串结束下标                     |
| loc              | 内含 line、column 属性，分别记录开始结束的行列号 |
| leadingComments  | 开始的注释                                       |
| innerComments    | 中间的注释                                       |
| trailingComments | 结尾的注释                                       |
| extra            | 额外信息                                         |

#### AST 示例

[AST Explorer (常用)](https://astexplorer.net/)
[AST 可视化](https://resources.jointjs.com/demos/rappid/apps/Ast/index.html)
