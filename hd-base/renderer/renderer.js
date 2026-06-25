const information = document.getElementById('info')

if (window.versions) {
    information.innerText = `本应用正在使用 Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), 和 Electron (v${window.versions.electron()})`
} else {
    information.innerText = '请通过 pnpm start 在 Electron 中运行应用'
}

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
}

func()