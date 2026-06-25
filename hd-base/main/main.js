import {app, BrowserWindow, ipcMain} from "electron"

import path from "node:path"

// 获取父级目录
const appRoot = path.dirname(import.meta.dirname)
console.log("app root:", appRoot);

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // 使用preload中间人,添加操作node能力
        webPreferences: {
            preload: path.join(appRoot, "preload", "preload.cjs"),
        }
    })

    // 加载的内容
    win.loadFile(path.join(appRoot, "renderer", "index.html"));
}

// 声明周期
app.whenReady().then(() => {
    // 注册一个 Handler（处理器）
    ipcMain.handle('ping', () => {
        console.log("this is ipc preload handle 'ping' in electron")
    })
    createWindow()
    // 当没有窗口打开时,创建新的窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

})

// 当所有的窗口关闭时,停止应用
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
