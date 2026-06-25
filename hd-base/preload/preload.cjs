const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('versions', {
    // 暴露部分安全接口给渲染进程使用
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // 添加ipcRenderer通信暴露给Main进程
    ping: () => ipcRenderer.invoke('ping')
})
