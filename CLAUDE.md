# CLAUDE.md — Equinox Partners コーポレートサイト

このファイルは Claude Code 向けのプロジェクトガイドです。作業を始める前に必ず読んでください。

## このプロジェクトは何か

Equinox Partners株式会社 の **1ページ構成コーポレートサイト**。
React 18 + Vite で構築された、本番デプロイ可能なソースコード一式です。
（元はデザインプロトタイプとして HTML で作成され、この Vite プロジェクトが正式なソースに変換されたもの。）

- 会社: Equinox Partners株式会社（共同事業の座組設計 + 事業推進PMO、中立な第三者）
- サイト言語: 日本語
- タグライン: 「中立が、前を向かせる。」「共同事業の、均衡点。」/ *Designing win-win, business ally.*

## セットアップ

```bash
npm install
npm run dev      # 開発サーバ http://localhost:5173
npm run build    # 本番ビルド → dist/
npm run preview  # ビルド結果のプレビュー
```

## ディレクトリ構成

```
index.html                 # Vite エントリ。Google Fonts と /src/main.jsx を読み込む
src/
  main.jsx                 # React ルート。3つのCSSを順番に読み込む
  App.jsx                  # ページ合成 + スクロール/ナビのモーション制御
  useSiteMotion.js         # ヒーロー登場・スクロールリビール・ナビ凝縮ロジック
  components/              # セクション1つにつき1コンポーネント
    MarketingNav.jsx       # 上部ナビ
    Hero.jsx               # ヒーロー
    Mission.jsx
    PainSection.jsx        # 課題提起
    SectionHead.jsx        # 共通の見出しヘッダー
    SolutionSection.jsx    # 自動送りのサービスカルーセル（useState/useEffect）
    WhyEquinox.jsx
    CaseStudyCards.jsx
    Profile.jsx            # 代表紹介
    CompanyOverview.jsx    # 会社概要
    ContactBlock.jsx       # お問い合わせフォーム（useState）
    MarketingFooter.jsx
  assets/                  # ロゴ + 人物写真（コンポーネントが import → Vite がハッシュ付与）
    logo-horizontal-v2.png
    arai.png
  styles/
    colors_and_type.css    # Equinox Partners デザイントークン（CSS変数・タイプ）
    ds-styles.css          # デザインシステムのベーススタイル
    site.css               # ページ固有スタイル + モーションクラス
```

## デザインシステム（重要）

このサイトは **Equinox Partners Design System** に厳密に準拠しています。色・タイポ・余白・コンポーネントを変更する際は、必ず `src/styles/colors_and_type.css` の CSS 変数（`var(--*)`）を使い、新しい値を勝手に発明しないこと。

主要トークン:
- **Navy `#1A2B5E`**（プライマリ） / **Gold `#C9963A`**（アクセント） / **Blue `#2E86AB`**（セカンダリ） / **Off-White `#F5F7FA`**（サーフェス） / **Deep Navy `#111D3F`**（ダーク面・本文）
- サーフェスペア規則: 明るい面 → Navy + Blue を前景に / 暗い面 → Gold + White を前景に
- **グラデーション禁止**。境界は枠線ではなくヘアライン（`rgba(26,43,94,0.10)` 1px）。
- 見出し直下の **ゴールド短ルール**（32×2px）がブランドの署名。
- ボタンは角丸6pxの **長方形**。pill（999px）はステータスチップ専用。
- フォント: 表示=Cormorant Garamond / Cormorant SC、和文=Noto Serif JP・Noto Sans JP、本文サンセリフ=Manrope。
- 絵文字禁止。ハイプ表現禁止。フォーマルで落ち着いたトーン。

## 実装上の注意

- 画像は ES モジュールとして `import` する（Vite がフィンガープリント・バンドル）。
- モーション（ヒーロー登場・スクロールリビール・ナビ凝縮）は `useSiteMotion.js` にあり、`App.jsx` の `useEffect` から起動。`prefers-reduced-motion` を尊重している。
- フォントは `index.html` から Google Fonts 経由で読み込み。オフラインビルドが必要ならセルフホストする。

## お問い合わせフォームのメール配信

`src/components/ContactBlock.jsx` のフォームは form-mail エンドポイントに POST します。メール配信を有効化するには:

1. https://formspree.io で宛先アドレスのフォームを作成。
2. `ContactBlock.jsx` の `FORM_ENDPOINT` 内の `YOUR_FORM_ID` を発行された URL に置換。
3. コミット & プッシュ。

エンドポイント未設定の間は、送信は画面上の通知でブロックされる（無言の失敗はしない）。

## デプロイ（GitHub → Vercel）

この Vite プロジェクトが **ライブサイトのソース・オブ・トゥルース**です。事前バンドル済みの standalone HTML はコミットしないこと。

1. このプロジェクトを Vercel が監視するリポジトリにプッシュ。
2. Vercel が Vite を自動検出。設定確認:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. `main` への push ごとに本番デプロイが自動実行。
