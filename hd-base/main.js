import {app, BrowserWindow} from "electron"

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // 加载的内容
    win.loadFile('index.html')
}

// 声明周期
app.whenReady().then(() => {
    createWindow()
})