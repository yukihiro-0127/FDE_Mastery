# FDE Mastery - 30日間でFDEになる

IBM Forward Deployed Engineer (FDE) として働くための実践的な学習プラットフォーム

## 🎯 このプロジェクトについて

FDE Masteryは、IBM Technology Business Unit, Ecosystem Co-creation Division, Alliance Business Departmentに配属された方が、**30日間でFDEとして最低限必要なスキルを習得する**ための学習システムです。

### FDEとは？

**Forward Deployed Engineer (FDE)** = 顧客の現場に入り、曖昧な課題を技術で検証可能な成果に変え、その知見を自社のソリューションや再利用可能な勝ち筋に戻す人

**重要:** FDEは「コードを書く人」ではなく、「コードを読んで、技術的な会話ができる人」です。

## 📚 学習内容

### Week 1: FDE理解 (Day 1-7)
- FDEとは何か
- 客先常駐コンサルとの違い
- 顧客課題の分解
- JSON/SQL/Python/API/YAML/Logsの読み方

### Week 2: コード読解とAI基礎 (Day 8-15)
- RAGの基礎
- プロンプトエンジニアリング
- ベクトルデータベース
- Fine-tuning vs RAG
- 技術選定の判断基準

### Week 3: 実装設計 (Day 16-22)
- PoC設計
- データ品質評価
- システム連携設計
- コスト試算
- リスク管理
- ステークホルダー管理

### Week 4: 実戦演習 (Day 23-30)
- 業界別ケーススタディ（製造業、金融業、小売業、ヘルスケア）
- 本番化の準備
- 運用とモニタリング
- 知見の資産化

## 🚀 使い方

### 1. 開始方法

```bash
# FDE_Masteryフォルダに移動
cd FDE_Mastery

# index.htmlをブラウザで開く
open index.html
# または
# ダブルクリックで開く
```

### 2. 学習の進め方

1. **ダッシュボード (index.html)**
   - 全体の進捗を確認
   - 今日の学習内容を確認
   - 各週のプレビューを確認

2. **ロードマップ (roadmap.html)**
   - 30日間の全体像を確認
   - 各日の学習内容をクリックして詳細へ
   - チェックボックスで進捗を管理

3. **Day詳細ページ (day.html?day=1)**
   - 各日の詳細な学習コンテンツ
   - クイズで理解度チェック
   - 演習問題で実践
   - 完了ボタンで進捗を記録

4. **Code Reading Gym (code-gym.html)**
   - JSON/SQL/Python/API/YAML/Logsの読解演習
   - カテゴリー別・難易度別に練習
   - 進捗を自動保存

5. **用語集 (glossary.html)**
   - FDE/営業向けの技術用語集
   - 検索機能で素早く調べる
   - 顧客への説明例も掲載

## 💡 特徴

### 1. FDE視点での学習
- エンジニア向けではなく、**FDE/営業向け**の説明
- 「コードを書く」ではなく「コードを読む」に特化
- 顧客への説明例を豊富に掲載

### 2. 実践的な内容
- 実際のAPI レスポンス、SQLクエリ、ログを使用
- 業界別のケーススタディ
- IBM製品との関連を明示

### 3. 進捗管理
- LocalStorageで進捗を自動保存
- 完了した日を視覚的に確認
- カテゴリー別の進捗を表示

### 4. インタラクティブ
- クイズで理解度チェック
- 演習問題で実践
- Code Gymで継続的に練習

## 📁 ファイル構成

```
FDE_Mastery/
├── index.html              # ダッシュボード
├── roadmap.html            # 30日間ロードマップ
├── day.html                # Day詳細ページ
├── code-gym.html           # コード読解演習
├── glossary.html           # 用語集
├── styles.css              # 共通スタイル
├── app.js                  # 進捗管理システム
├── day-content.js          # Day 1-30の全コンテンツ
├── day.js                  # Day詳細ページのロジック
├── day-styles.css          # Day詳細ページのスタイル
├── code-gym-data.js        # Code Gym演習データ
├── code-gym.js             # Code Gymのロジック
├── code-gym-styles.css     # Code Gymのスタイル
├── glossary-data.js        # 用語集データ
├── glossary.js             # 用語集のロジック
├── glossary-styles.css     # 用語集のスタイル
├── roadmap.js              # ロードマップのロジック
├── roadmap-styles.css      # ロードマップのスタイル
└── README.md               # このファイル
```

## 🎓 学習のコツ

### 1. 毎日継続する
- 1日1時間でOK
- 完璧を目指さず、まず全体を把握
- 分からないことは後で戻ってくる

### 2. Code Gymを活用
- Day 4-10の学習と並行して、Code Gymで練習
- 毎日1問ずつでも継続することが重要

### 3. 用語集を活用
- 分からない用語はすぐに調べる
- 顧客への説明例を参考にする

### 4. 実案件で実践
- 学んだことを実際の案件で試す
- 失敗を恐れず、小さく始める

## 🔧 技術スタック

- **フロントエンド:** HTML, CSS, JavaScript (Vanilla)
- **データ保存:** LocalStorage
- **デザイン:** IBM Design Language
- **フォント:** IBM Plex Sans, IBM Plex Mono
- **アイコン:** Font Awesome

## 📝 進捗の保存

進捗は自動的にブラウザのLocalStorageに保存されます。

- **保存される情報:**
  - 完了した日（Day 1-30）
  - Code Gymで完了した演習
  - 各カテゴリーの進捗

- **注意:**
  - ブラウザのキャッシュをクリアすると進捗が消えます
  - 別のブラウザでは進捗が共有されません

## 🎯 30日後の目標

このプログラムを完了すると、以下ができるようになります：

1. **FDEの役割を説明できる**
   - 客先常駐コンサルとの違いを明確に説明
   - FDEの価値を顧客に伝えられる

2. **技術的な会話ができる**
   - JSON、SQL、Python、API、YAML、Logsを読める
   - エンジニアとの会話で技術論点を理解できる

3. **顧客課題を分解できる**
   - 曖昧な要望を技術要件に変換
   - 実現可能性を判断できる

4. **AI/RAGを説明できる**
   - RAGとFine-tuningの違いを説明
   - 顧客に最適な技術を提案できる

5. **PoC設計ができる**
   - 成功基準を定義
   - リスクを特定し対策を立案

6. **知見を資産化できる**
   - 個別案件の学びをパターン化
   - 次の案件に活かせる形で文書化

## 🤝 サポート

質問や改善提案がある場合は、チーム内で共有してください。

## 📄 ライセンス

このプロジェクトは、IBM社内での学習目的で作成されています。

---

**Let's master FDE in 30 days! 🚀**