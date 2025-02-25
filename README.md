## 项目搭建

#### 1. 安装ts-node

```
pnpm add ts-node -D
```

#### 2. 安装typescript

```
pnpm add typescript -D
```

#### 3. 安装类型声明

```
pnpm add @types/node -D
```

#### 4. 生成tsconfig.json

```
pnpm tsc --init
```

局部安装的包需要用pnpm脚本或者npx来运行，到node_modules中.bin文件夹中查找命令

#### 5. 配置prettier

```
.prettierrc
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "none",
  "semi": false
}
```

```
.prettierignore
/node_modules/**
```

```
.editorconfig
root = true

[*] # 表示所有文件都通用
charset = utf-8
indent_style = space # 缩进风格
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型
insert_final_newline = true # 始终在文件末尾插入一个空行
trim_trailing_whitespace = true # 去除行首的任意空白字符

[*.md] # 表示仅md文件适用
insert_final_newline = false
trim_trailing_whitespace = fals
```

```
pnpm add prettier -D
```

#### 6. 配置eslint

```
pnpm create @eslint/config
```

#### 7. 配置pnpm脚本

```
"dev": "ts-node ./src/index.ts",
"build": "tsc",
"start": "node ./dist/index.js",
"lint": "eslint",
"prettier": "prettier --write ."
```