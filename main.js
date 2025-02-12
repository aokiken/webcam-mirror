const { app, BrowserWindow, screen } = require('electron');

let mainWindow;

app.on('ready', () => {
  // 画面情報を取得
  const { width, height } = screen.getPrimaryDisplay().workAreaSize; // ディスプレイの作業領域

  // ウィンドウを作成
  mainWindow = new BrowserWindow({
    width: 210, // ウィンドウの幅
    height: 210, // ウィンドウの高さ
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    alwaysOnTop: true, // 常に前面に表示
    frame: false,// フレームを非表示に
  });

  // ウィンドウの位置を右端に設定
  const x = width - 210; // 画面の幅 - ウィンドウの幅
  const y = 0;           // 上端
  mainWindow.setBounds({ x, y, width: 210, height: 210 });

  // HTMLファイルを読み込む
  mainWindow.loadFile('index.html');
});
