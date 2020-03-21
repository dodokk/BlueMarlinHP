# BlueMarlinドキュメント

### 使用しているフレームワーク・ライブラリ

- react
- typescript
- react-router
- styled-components
- husky
- lint-staged
- typescript-eslint
- prettier

### 使用しているデザインパターン

- (なし)

### ディレクトリ構造

```
.
├── README.md
├── package.json
├── node_modules/
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── serviceWorker.js
│   ├── utils
│   │   ├── history.ts      <- 履歴情報を作成（変更不要）
│   │   └── size.ts     <- 共通して使いたい長さや大きさがもしあれば
│   └── views
│       ├── Pages.tsx       <- 全体のページ構成を設定
│       ├── BaseWrapper     <- ヘッダーとフッターのこと(全ページの共通部分)
│       │   ├── BaseWrapper.tsx
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   └── index.ts        <- importしやすくするためのファイルなのであんまり気にしなくてOK
│       └── components      <- 個別のページなので、主にここを編集することになると思われる
│           ├── Aboutus.tsx
│           ├── Gallery.tsx
│           ├── Generation.tsx
│           ├── Member.tsx
│           ├── QandA.tsx
│           └── Top.tsx
├── tsconfig.json
└── yarn.lock
```

## サイトマップ

[bluemarlin_hp_sitemap.pdf](https://github.com/dodokk/BlueMarlinHP/files/4363243/bluemarlin_hp_sitemap.pdf)

## 環境構築

    1. cloneする
        ```bash
        git clone https://github.com/dodokk/BlueMarlinHP
        ```

    1. 依存パッケージをインストールする
        ```bash
        yarn
        ```
        もしyarnが使えなければ`npm install -g yarn`でインストール可能  
        npmも使えなければ→https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09

## 起動方法(ローカル)

    1. 環境構築を行う
    
    1. カレントディレクトリが`BlueMarlinHP`なのを確認する
    
    1. 以下のコマンドを実行する
        ```bash
        yarn start
        ```

## 開発方法

    1. 作業開始時に`git pull`する
    
    1. `BlueMarlinHP/src/views/{自分の作業したいファイル}`をモックアップを元に変更する
    
    1. ローカルリポジトリに保存する
        ```bash
        git add .
        git commit -m "作業内容を簡潔に書く！"
        ```
        
    1. masterブランチでOKなのでpushする
        ```bash
        git push origin master
        ```
