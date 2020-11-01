# pic2webp

pic2webp 把 png、jpg 和 gif 图片转成 webp 格式，实现图片的压缩。

## 安装

- 安装全局依赖：`sudo npm i -g --unsafe-perm=true --allow-root --registry=https://registry.npm.taobao.org cwebp-bin gif2webp-bin`
- 全局安装：`sudo npm i -g pic2webp`

## 使用

- 把 src 目录下的图片压缩存放到 dst 目录下：`pic2webp src dst`
- src 默认为 images
- dst 默认为 dist
- 默认路径可以不写
- 命令执行后，打印报表，报表中压缩后尺寸变大的图片，不要使用
