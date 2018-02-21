## 通过Node.js建立一个静态服务器
### 如何启动该服务器
- 将index.js文件拷贝至需要加载网页的根目录下。例如你的根文件夹名字为Root，将node.js拷贝至Root文件夹下，同时你需要在Root文件夹内建立一个文件夹用于放置你的html文件
- 将index.js中的第22行的代码内的'sample'替换为你html文件所在的文件夹名字
> staticRoot(path.join(__dirname,'sample'),req,res)
- 输入 **node index.js** 启动即可
### 可以实现的功能
- 支持静态目录
- 可以处理路由
