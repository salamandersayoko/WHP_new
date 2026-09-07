# Waseda Heat Pump Consortium — Responsive Website Prototype

添付のビジュアル・モックアップと「ホームページ作成指示書」をもとに，HTML + Tailwind CSSで再構築した静的サイト一式です．

## ページ
- `index.html` — HOME
- `vision.html` — VISION
- `value.html` — VALUE
- `programs.html` — PROGRAMS
- `projects.html` — PROJECTS
- `global.html` — GLOBAL
- `partners.html` — PARTNERS
- `about.html` — ABOUT
- `join-us.html` — JOIN US
- `news.html` — NEWS & INSIGHTS

## 使い方
`index.html` をブラウザで開けば動作します．Tailwind CSSは `assets/css/tailwind-build.css` にローカルビルド済みなので，CDN接続は不要です．

開発時にTailwind CSSを再ビルドする場合：

```bash
npm install
npm run build:css
```

## 実装内容
- PC / Tablet / Smartphone対応
- デスクトップ／モバイルナビゲーション
- HOME → VISION → VALUE → PROGRAMS → PROJECTS → GLOBAL / PARTNERS → JOIN US の導線
- 6 Value Domains
- 5 Strategic Programs
- Project status / roadmap表現
- WASEAN / ASEAN co-creation構成
- Partners / membership構成
- FAQアコーディオン
- JOIN US問い合わせフォーム（デモ動作）
- NEWS & INSIGHTSのフィルタUIモック
- HTMLテキスト中心でアクセシビリティ・SEOを考慮

## 公開前に必ず差し替える項目
このプロトタイプ内の画像は，ユーザー提供のビジュアル・モックアップからWeb表示用にトリミングしたものです．また，会員名，ロゴ，人数，数値，年表，連絡先，大学名，地図，イベント日付等にはモックアップ例・ダミー情報を含みます．本番公開時には，事務局承認済みの正式情報・正式ロゴ・権利処理済み写真へ置換してください．

フォームの送信先，CMS，多言語管理，Analytics，OGP/canonical/構造化データ等は本番環境に合わせて接続してください．
