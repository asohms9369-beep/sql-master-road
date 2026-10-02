# SQLマスターへの道 v2 - SQL版Duolingo

## 変更点
- 問題入力欄は空欄から開始
- 10ユニット、各5ステップ、合計50学習ステップ
- 各章は「解説 → 選択問題 → 穴埋め → 結果予測 → 自力記述」
- 前章クリアで次章を解放
- XP、ハート、進捗、バッジ、ブラウザ保存
- スマートフォン対応

## GitHub Pagesへの差し替え
1. ZIPを展開する
2. 既存リポジトリのファイルを `index.html`、`style.css`、`app.js`、`lessons.js`、`README.md` に差し替える
3. GitHubでCommit changesを押す
4. GitHub Pagesの公開元が main / (root) のままなら自動更新される

## 注意
- SQLは実DBへ実行せず、学習用の文字列判定を行います。
- 学習進捗は各ブラウザのlocalStorageに保存されます。
