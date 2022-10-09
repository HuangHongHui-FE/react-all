# Img

#### 目录结构

```

```



## 图片优化

相关链接

https://juejin.cn/post/6965761736083243044#heading-13

#### webpack配置图片压缩

```
npm install --save-dev image-webpack-loader
```

配置

```js
module.exports = {
...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:7].[ext]'
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.5, 0.65],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: { // 不支持WEBP就不要写这一项
                quality: 75
              },
            },
          },
        ],
      },
    ],
  },
}
```

#### webp格式图片体积小。

#### 精灵图

`backround-position` 属性值来确定图片呈现的位置

##### webpack插件合成精灵图

通过下面配置就能将 src/ico 目录下的所有 png 文件合成雪碧图，并且输出到对应目录，同时还可以生成对应的样式文件，样式文件的语法会根据你配置的样式文件的后缀动态生成。

```js
var path = require('path')
var SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
  // ...
  plugins: [
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'src/ico'),
        glob: '*.png',
      },
      target: {
        image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'),
        css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.styl'),
      },
      apiOptions: {
        cssImageRef: '~sprite.png',
      },
    }),
  ],
}
```

#### 使用 iconfont，字体图标

#### 使用 CDN 图片

#### 图片懒加载

1

```js
function lazyload() {
  let viewHeight = document.body.clientHeight //获取可视区高度
  let imgs = document.querySelectorAll('img[data-src]')
  imgs.forEach((item, index) => {
    if (item.dataset.src === '') return

    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    let rect = item.getBoundingClientRect()
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      item.src = item.dataset.src
      item.removeAttribute('data-src')
    }
  })
}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload)
```

2

```js
const imgs = document.querySelectorAll('img[data-src]')
const config = {
  rootMargin: '0px',
  threshold: 0,
}
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target
      let src = img.dataset.src
      if (src) {
        img.src = src
        img.removeAttribute('data-src')
      }
      // 解除观察
      self.unobserve(entry.target)
    }
  })
}, config)

imgs.forEach((image) => {
  observer.observe(image)
})
```

#### 图片预加载

JavaScript 实现预加载

```js
function preloader() {
  if (document.images) {
    var img1 = new Image()
    var img2 = new Image()
    var img3 = new Image()
    img1.src = 'http://domain.tld/path/to/image-001.gif'
    img2.src = 'http://domain.tld/path/to/image-002.gif'
    img3.src = 'http://domain.tld/path/to/image-003.gif'
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload()
      }
      func()
    }
  }
}
addLoadEvent(preloader);
```

#### 响应式图片加载

在不同分辨率的设备上显示不同尺寸的图片

```js
@media  screen and (min-width: 1200px) {
  img {
    background-image: url('1.png');
  }
}
@media  screen and (min-width: 992px) {
  img {
    background-image: url('2.png');
  }
}
@media  screen and (min-width: 768px) {
  img {
    background-image: url('3.png');
  }
}
@media screen and (min-width: 480px) {
  img {
    background-image: url('4.png');
  }
}
```

