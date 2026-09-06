# スマホケア（sumahocare — TechKosupa 姉妹サイト）

iPhone・スマホの **LINEトラブル**（通知・バックアップ・通話・送信）に特化した静的サイトです。
メインサイト：<https://techkosupa.com/>（テックコスパ）

## サイト構成

```
/
├── index.html                        # ホーム（記事一覧・自己紹介）
├── about.html                        # 運営者情報（スライマン）
├── contact.html                      # お問い合わせ（aarbi@mail.com）
├── sitemap.xml                       # サイトマップ（GitHub Pages のURL使用）
├── robots.txt
├── favicon.svg
├── articles/
│   ├── line-notification-not-coming-iphone-2026.html   # LINEの通知が来ない【2026年版】
│   ├── line-backup-stops-at-30-percent.html            # LINEバックアップが30%で止まる
│   ├── line-call-cant-hear-my-voice-iphone.html        # LINE通話で声が聞こえない
│   ├── line-message-not-delivered.html                 # LINEが届いていない
│   └── line-call-echo.html                             # LINE電話でエコー（反響）する
└── assets/
    ├── css/style.css                 # 全ページ共通スタイル
    ├── js/main.js                    # ナビゲーション/フォーム等のJS
    └── img/                          # 各記事のイラスト
```

## 記事とキーワード（Google Search Console）

| 記事 | 対応キーワード |
|---|---|
| 通知が来ない【2026年版】 | line 開かないと通知が来ない iphone 2026 |
| バックアップが30%で止まる | lineバックアップ 30%で止まる |
| 通話で声が聞こえない | line通話 聞こえないと 言 われる iphone |
| 届いていない | line送ったのに相手に届いてない |
| エコー（反響）する | line電話 自分の声が反響する |

各記事内からは、メインサイト（テックコスパ）の深掘り記事へリンクしています。

## Google Search Console

サイト所有権確認メタタグ：
```html
<meta name="google-site-verification" content="AxP508XUdTfS3u-azYbc-wlClozxaHhvm2d45rFyWAY">
```

## コンテンツを更新するには

ビルド（生成）工程は **ありません**。HTMLファイルを直接編集してコミットするだけで、
ホスティング側が自動で公開します。

### 方法1：GitHub のWebエディタ（最も簡単）

1. GitHubのリポジトリ画面で、変更したいファイルを開く
2. 右上の鉛筆アイコン（✏️ Edit this file）をクリック
3. 内容を変更して 「Commit changes」 を押す
4. 1〜2分後にサイトが更新されます

### 方法2：ローカルで編集して push

```bash
git pull origin main
# ファイルを編集
git add -A
git commit -m "Update: 記事を更新"
git push origin main
```

## 新しい記事を追加する

1. `articles/` に、既存の記事HTMLをコピーして名前を変える
   （例：`line-new-topic.html`）
2. `<title>`・メタdescription・本文・目次を更新
3. `index.html` の記事一覧（`<div class="card-grid">` 内）にカードを追加
4. `sitemap.xml` に新しいURLを追加
5. 必要なら `assets/img/` に画像を追加

## ホスティング（無料）

### 1) GitHub Pages（このリポジトリでそのまま使える）

1. GitHub → **Settings → Pages**
2. 「Deploy from a branch」→ ブランチを **main**、フォルダを **/ (root)** にして Save
3. 数分で `https://sulaimanaarbi07.github.io/sumahocare/` が公開される

> ⚠️ 公開URLが変わったら、`sitemap.xml` と `robots.txt`、各HTMLの
> `<meta property="og:url">` / `og:image` のURLも合わせて更新してください。

### 2) Cloudflare Pages（*.pages.dev、無料で帯域無制限）

1. <https://dash.cloudflare.com/sign-up> にアカウント作成
2. **Workers & Pages → Create → Pages → Connect to Git**
3. このGitHubリポジトリを選択 → Build command は **空欄**、Root directory は `/`
4. Deploy → `https://サイト名.pages.dev` で公開

GitHubに push するたびに自動で再デプロイされます。

### 3) その他（無料でサブドメインをくれるもの）

- **Netlify** → `*.netlify.app`（GitHub連携 or ドラッグ&ドロップ）
- **Vercel** → `*.vercel.app`
- **Firebase Hosting** → `*.web.app`
- **GitLab Pages** → `*.gitlab.io`
- **Render** → `*.onrender.com`

## 備考

- 画像はAI生成のイラストです（人物の顔は含んでいません）
- お問い合わせは `aarbi@mail.com` 宛（フォームはmailto方式でサーバー不要）
