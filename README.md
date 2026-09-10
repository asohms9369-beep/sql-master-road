# SQLマスターへの道

GitHub Pagesでそのまま公開できる、依存関係なしの静的SQL学習サイトです。

## ファイル
- index.html
- style.css
- script.js
- questions.js

## GitHub Pages公開手順
1. GitHubへサインインし、新しいリポジトリを作成します。名前例: `sql-master-road`
2. リポジトリをPublicで作成します。
3. `Add file` → `Upload files` を選び、このフォルダー内の4ファイルをアップロードしてCommitします。
4. リポジトリの `Settings` → 左側 `Pages` を開きます。
5. `Build and deployment` の `Source` を `Deploy from a branch` にします。
6. Branchを `main`、folderを `/(root)` にして `Save` します。
7. Pages画面に表示される公開URLを開きます。

通常のURL形式は `https://GitHubユーザー名.github.io/sql-master-road/` です。

## 更新方法
ファイルを修正して同じリポジトリへアップロード・Commitすると、公開サイトも更新されます。

## 注意
- 履歴とXPは閲覧者ごとのブラウザlocalStorageに保存されます。ログインや端末間同期はありません。
- GitHub Pages上のサイトは公開サイトです。個人情報・機密情報・実患者情報を入れないでください。
- 現版はSQLを実際にDBへ実行せず、正規化した文字列で正誤判定します。
