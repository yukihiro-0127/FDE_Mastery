// Day 1-30 Complete Content
// 根源的理解と実践的洞察を重視

const dayContents = {
    1: {
        title: 'FDEとは何か',
        subtitle: '職種名ではなく、能力セットとして理解する',
        goals: [
            'FDEを一言で説明できる',
            '客先常駐コンサルとの違いを説明できる',
            'FDEが強くなる条件を理解する'
        ],
        content: `
<div class="content-section">
    <h2>FDEの定義</h2>
    <div class="definition-box">
        <p><strong>Forward Deployed Engineer (FDE)</strong>とは、顧客の現場に入り、曖昧な課題を技術で検証可能な成果に変え、その知見を自社のソリューションや再利用可能な勝ち筋に戻す人である。</p>
    </div>
    
    <h3>なぜこの定義が重要か</h3>
    <p>多くの人がFDEを「客先に常駐するエンジニア」と誤解する。しかし、それは<strong>手段</strong>であって<strong>本質</strong>ではない。</p>
    
    <div class="insight-box">
        <h4>💡 非明示的な洞察</h4>
        <p>FDEという職種が生まれた背景には、<strong>「製品を売る」から「成果を売る」へのシフト</strong>がある。</p>
        <p>従来: 製品を売って終わり → 顧客が使いこなせず失敗<br>
        現在: 顧客の成果にコミット → そのために現場に入る</p>
        <p>つまりFDEは、<strong>SaaSビジネスモデルの必然的な帰結</strong>である。顧客の成功なしに自社の成功はない。</p>
    </div>
</div>

<div class="content-section">
    <h2>FDEの能力セット</h2>
    <p>FDEは職種名ではなく、以下の能力の掛け算である:</p>
    
    <div class="formula-box">
        <p><strong>FDE力 = 顧客課題理解 × 技術理解 × 実装可能性判断 × ステークホルダー調整 × 再利用資産化</strong></p>
    </div>
    
    <div class="capability-grid">
        <div class="capability-card">
            <h4>1. 顧客課題理解</h4>
            <p>表面的な要望ではなく、<strong>本当の業務課題</strong>を見抜く力。</p>
            <p class="example">例: 「AIで効率化したい」→ 本当は「属人化を解消したい」</p>
        </div>
        
        <div class="capability-card">
            <h4>2. 技術理解</h4>
            <p>実装者レベルではなく、<strong>技術論点を切り分ける</strong>力。</p>
            <p class="example">例: 「RAGで解決できるか」「既存システムと連携できるか」</p>
        </div>
        
        <div class="capability-card">
            <h4>3. 実装可能性判断</h4>
            <p>理想論ではなく、<strong>現実的な制約の中で何ができるか</strong>を判断する力。</p>
            <p class="example">例: 「完全自動化は無理だが、オペレーター支援なら可能」</p>
        </div>
        
        <div class="capability-card">
            <h4>4. ステークホルダー調整</h4>
            <p>技術者・営業・顧客・パートナーの<strong>利害を調整</strong>する力。</p>
            <p class="example">例: 「法務の懸念を技術で解消する方法を提案」</p>
        </div>
        
        <div class="capability-card">
            <h4>5. 再利用資産化</h4>
            <p>個別支援で終わらせず、<strong>次の案件に活かせる形</strong>にする力。</p>
            <p class="example">例: 「この業界特有の課題パターンを文書化」</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>客先常駐コンサルとの違い</h2>
    
    <div class="comparison-table">
        <table>
            <thead>
                <tr>
                    <th>観点</th>
                    <th>FDE</th>
                    <th>客先常駐コンサル</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>主な価値</strong></td>
                    <td>顧客課題を技術成果に変える</td>
                    <td>顧客プロジェクトを推進する</td>
                </tr>
                <tr>
                    <td><strong>成果物</strong></td>
                    <td>動くシステム + 再利用可能な知見</td>
                    <td>プロジェクト完遂</td>
                </tr>
                <tr>
                    <td><strong>知見の帰属</strong></td>
                    <td>自社に戻す</td>
                    <td>顧客に残す</td>
                </tr>
                <tr>
                    <td><strong>期間</strong></td>
                    <td>短期集中（PoC → 本番化）</td>
                    <td>長期（プロジェクト期間）</td>
                </tr>
                <tr>
                    <td><strong>弱くなるパターン</strong></td>
                    <td>便利屋化（何でも屋）</td>
                    <td>人月作業化（管理表職人）</td>
                </tr>
                <tr>
                    <td><strong>強くなる条件</strong></td>
                    <td>自社ソリューションと再利用資産に戻す</td>
                    <td>業務変革の中核を握る</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'FDEの本質的な価値は何か？',
                options: [
                    '顧客先に常駐すること',
                    'コードを書くこと',
                    '顧客課題を技術成果に変え、知見を自社に戻すこと',
                    'プロジェクトを管理すること'
                ],
                correct: 2,
                explanation: 'FDEの本質は「常駐」ではなく、「顧客課題を技術成果に変え、その知見を自社のソリューションや再利用可能な勝ち筋に戻すこと」である。'
            }
        ],
        exercise: {
            title: '実践演習: FDEを説明する',
            prompt: '新入社員の同期に「FDEって何？客先常駐と何が違うの？」と聞かれた。どう答えるか、3文以内で書け。',
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例</h4>
    <p>「FDEは、顧客の現場に入って課題を技術で解決する点では客先常駐と似ている。ただし、個別対応で終わらせず、そこで得た知見を自社のソリューションや次の提案に活かす点が違う。つまり、顧客の成功と自社の成長を同時に実現する役割だ。」</p>
</div>
            `
        }
    },
    
    2: {
        title: '客先常駐コンサルとの違い',
        subtitle: '価値提供の構造から理解する',
        goals: [
            '両者の違いを顧客に説明できる',
            'FDEが便利屋化しない条件を理解する',
            'IBM文脈でのFDEの位置づけを理解する'
        ],
        content: `
<div class="content-section">
    <h2>価値提供の構造比較</h2>
    <p>客先常駐コンサルとFDEの最も本質的な違いは、<strong>ビジネスモデル</strong>にある。</p>
    
    <div class="insight-box">
        <h4>💡 根源的な違い</h4>
        <p><strong>客先常駐コンサル:</strong> 人月ビジネス（時間で課金）</p>
        <p><strong>FDE:</strong> サブスクリプションビジネス（成果で課金）</p>
    </div>
</div>

<div class="content-section">
    <h2>FDEが便利屋化するパターン</h2>
    
    <div class="pattern-grid">
        <div class="pattern-card bad">
            <h4>パターン1: 何でも屋化</h4>
            <p><strong>症状:</strong> 顧客の要望を何でも引き受ける</p>
            <p><strong>対策:</strong> 「できること」と「やるべきこと」を区別する</p>
        </div>
        
        <div class="pattern-card bad">
            <h4>パターン2: 長期滞在化</h4>
            <p><strong>症状:</strong> 同じ顧客先に長期間滞在</p>
            <p><strong>対策:</strong> 「いつまでに何を達成するか」を明確にする</p>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'FDEと客先常駐コンサルの最も本質的な違いは？',
                options: [
                    '滞在期間の長さ',
                    '技術力の高さ',
                    'ビジネスモデル（収益源）の違い',
                    '顧客との距離感'
                ],
                correct: 2,
                explanation: '最も本質的な違いは、ビジネスモデルである。この違いが、インセンティブ構造と行動原理を決定する。'
            }
        ],
        exercise: {
            title: '実践演習: 顧客に違いを説明する',
            prompt: '顧客から「FDEって、要するに客先常駐のSEですよね？」と言われた。どう返答するか？',
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例</h4>
    <p>「見た目は似ていますが、目的が違います。客先常駐SEは、御社のプロジェクトを完遂することが目的です。一方FDEは、御社の課題を解決しながら、その知見を業界全体の課題解決に活かすことが目的です。」</p>
</div>
            `
        }
    },
    
    3: {
        title: '顧客課題の分解',
        subtitle: '曖昧な要望を技術要件に変換する',
        goals: [
            '顧客の「やりたいこと」を3層に分解できる',
            '技術的制約を早期に発見できる',
            '実現可能性を判断できる'
        ],
        content: `
<div class="content-section">
    <h2>課題分解の3層構造</h2>
    
    <div class="layer-structure">
        <div class="layer">
            <h4>Layer 1: ビジネス課題</h4>
            <p>顧客が本当に解決したいこと</p>
        </div>
        
        <div class="layer">
            <h4>Layer 2: 業務要件</h4>
            <p>なぜその課題が起きているのか</p>
        </div>
        
        <div class="layer">
            <h4>Layer 3: 技術要件</h4>
            <p>どの技術で、どう実現するか</p>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: '顧客が「AIで効率化したい」と言った時、最初に聞くべき質問は？',
                options: [
                    'どのAI技術を使いますか？',
                    '予算はいくらですか？',
                    '効率化とは具体的に何を指しますか？',
                    'いつまでに必要ですか？'
                ],
                correct: 2,
                explanation: '最初に聞くべきは「効率化とは具体的に何を指しますか？」である。ビジネス課題を明確にしないと、技術選定も予算も決められない。'
            }
        ],
        exercise: {
            title: '実践演習: 課題を分解する',
            prompt: '顧客:「社内の問い合わせ対応を自動化したい」→ この要望を3層に分解せよ',
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例</h4>
    <p><strong>Layer 1:</strong> 社内の問い合わせ対応に時間がかかりすぎている</p>
    <p><strong>Layer 2:</strong> 同じ質問が繰り返される、担当者が不在だと回答できない</p>
    <p><strong>Layer 3:</strong> FAQをRAGで検索可能にする、チャットボットで24時間対応</p>
</div>
            `
        }
    },
    
    4: {
        title: 'JSONを読む',
        subtitle: 'API連携の基礎',
        goals: ['JSONの構造を理解', 'APIレスポンスを読める', 'エラーの原因を特定できる'],
        content: `
<div class="content-section">
    <h2>JSONの基本</h2>
    <p>JSONは、APIのリクエスト・レスポンスで使われるデータ形式。</p>
    <pre><code>{
  "user_id": 12345,
  "name": "山田太郎",
  "tags": ["VIP", "企業顧客"]
}</code></pre>
</div>
        `,
        quiz: [{question: 'JSONで配列を表すのは？', options: ['{ }', '[ ]', '( )', '< >'], correct: 1, explanation: 'JSONで配列は [ ] で表す。'}],
        exercise: {title: 'JSONを読む', prompt: 'JSONからユーザー名を抽出せよ', sampleAnswer: '<div class="sample-answer"><p>data.user.name</p></div>'}
    },
    
    5: {
        title: 'SQLを読む',
        subtitle: 'データベース操作の理解',
        goals: ['SELECT文を読める', 'JOIN操作を理解', 'WHERE条件を理解'],
        content: `<div class="content-section"><h2>SQLの基本</h2><p>データベースからデータを取得するクエリ言語</p></div>`,
        quiz: [{question: 'SQLでデータを取得するコマンドは？', options: ['GET', 'SELECT', 'FETCH', 'RETRIEVE'], correct: 1, explanation: 'SELECTでデータを取得する。'}],
        exercise: {title: 'SQLを読む', prompt: 'SELECT文を解釈せよ', sampleAnswer: '<div class="sample-answer"><p>ユーザーテーブルから全データを取得</p></div>'}
    },
    
    6: {
        title: 'FDEメモの書き方',
        subtitle: '知見を構造化する',
        goals: ['課題を構造化できる', '再利用可能な形で記録', 'パターンを抽出'],
        content: `<div class="content-section"><h2>FDEメモの目的</h2><p>個別案件の知見を、次の案件で再利用できる形にする</p></div>`,
        quiz: [{question: 'FDEメモで最も重要なのは？', options: ['詳細な記録', 'パターンの抽出', '美しい文章', '長い説明'], correct: 1, explanation: 'パターンを抽出することで再利用可能になる。'}],
        exercise: {title: 'FDEメモを書く', prompt: '案件の知見をメモにまとめよ', sampleAnswer: '<div class="sample-answer"><p>課題パターン、技術選定理由、注意点を記載</p></div>'}
    },
    
    7: {
        title: 'Pythonを読む',
        subtitle: 'AIコードの理解',
        goals: ['Python基本構文', 'ライブラリの役割理解', 'エラーメッセージ解読'],
        content: `<div class="content-section"><h2>Pythonの基本</h2><p>AI開発で最も使われる言語</p></div>`,
        quiz: [{question: 'Pythonでリストを表すのは？', options: ['{ }', '[ ]', '( )', '< >'], correct: 1, explanation: 'Pythonでリストは [ ] で表す。'}],
        exercise: {title: 'Pythonを読む', prompt: 'コードの動作を説明せよ', sampleAnswer: '<div class="sample-answer"><p>リストをループして処理</p></div>'}
    },
    
    8: {
        title: 'APIを理解する',
        subtitle: 'システム連携の基礎',
        goals: ['REST APIの概念', 'HTTPメソッド理解', 'ステータスコード理解'],
        content: `<div class="content-section"><h2>APIとは</h2><p>システム間でデータをやり取りする仕組み</p></div>`,
        quiz: [{question: 'データ取得に使うHTTPメソッドは？', options: ['POST', 'GET', 'PUT', 'DELETE'], correct: 1, explanation: 'GETでデータを取得する。'}],
        exercise: {title: 'APIを理解する', prompt: 'APIエンドポイントを説明せよ', sampleAnswer: '<div class="sample-answer"><p>GET /users でユーザー一覧を取得</p></div>'}
    },
    
    9: {
        title: 'YAMLを読む',
        subtitle: '設定ファイルの理解',
        goals: ['YAML構文理解', '設定の読み方', 'インデントの重要性'],
        content: `<div class="content-section"><h2>YAMLとは</h2><p>設定ファイルでよく使われる形式</p></div>`,
        quiz: [{question: 'YAMLで重要なのは？', options: ['括弧', 'インデント', 'セミコロン', 'カンマ'], correct: 1, explanation: 'YAMLはインデントで構造を表す。'}],
        exercise: {title: 'YAMLを読む', prompt: '設定ファイルを解釈せよ', sampleAnswer: '<div class="sample-answer"><p>サーバー設定とポート番号を定義</p></div>'}
    },
    
    10: {
        title: 'ログを読む',
        subtitle: 'トラブルシューティングの基礎',
        goals: ['ログレベル理解', 'エラー特定', '原因推定'],
        content: `<div class="content-section"><h2>ログの読み方</h2><p>システムの動作を記録したもの</p></div>`,
        quiz: [{question: '最も深刻なログレベルは？', options: ['INFO', 'WARN', 'ERROR', 'DEBUG'], correct: 2, explanation: 'ERRORが最も深刻。'}],
        exercise: {title: 'ログを読む', prompt: 'エラーの原因を特定せよ', sampleAnswer: '<div class="sample-answer"><p>接続タイムアウトエラー</p></div>'}
    },
    
    11: {
        title: 'RAGの基礎',
        subtitle: 'Retrieval-Augmented Generation',
        goals: ['RAGの仕組み理解', 'ベクトル検索理解', 'ユースケース理解'],
        content: `<div class="content-section"><h2>RAGとは</h2><p>外部知識を参照してLLMの回答精度を上げる技術</p></div>`,
        quiz: [{question: 'RAGの主な用途は？', options: ['画像生成', '文書検索', '音声認識', '動画編集'], correct: 1, explanation: 'RAGは文書検索と回答生成に使う。'}],
        exercise: {title: 'RAGを説明する', prompt: '顧客にRAGを説明せよ', sampleAnswer: '<div class="sample-answer"><p>社内文書を検索して正確な回答を生成</p></div>'}
    },
    
    12: {
        title: 'プロンプトエンジニアリング',
        subtitle: 'LLMを使いこなす',
        goals: ['効果的なプロンプト作成', 'Few-shot学習', 'Chain-of-Thought'],
        content: `<div class="content-section"><h2>プロンプトとは</h2><p>LLMへの指示文</p></div>`,
        quiz: [{question: 'プロンプトで重要なのは？', options: ['長さ', '明確さ', '難しさ', '専門用語'], correct: 1, explanation: '明確な指示が重要。'}],
        exercise: {title: 'プロンプトを書く', prompt: '効果的なプロンプトを作成せよ', sampleAnswer: '<div class="sample-answer"><p>具体的な指示と例を含める</p></div>'}
    },
    
    13: {
        title: 'ベクトルデータベース',
        subtitle: '類似検索の仕組み',
        goals: ['ベクトル化理解', '類似度計算理解', 'ユースケース理解'],
        content: `<div class="content-section"><h2>ベクトルDBとは</h2><p>意味的に類似した情報を検索するDB</p></div>`,
        quiz: [{question: 'ベクトルDBの主な用途は？', options: ['数値計算', '類似検索', 'データ集計', 'バックアップ'], correct: 1, explanation: '類似検索に使う。'}],
        exercise: {title: 'ベクトルDBを説明する', prompt: '顧客に説明せよ', sampleAnswer: '<div class="sample-answer"><p>キーワードではなく意味で検索</p></div>'}
    },
    
    14: {
        title: 'Fine-tuning vs RAG',
        subtitle: '技術選定の判断基準',
        goals: ['両者の違い理解', '選定基準理解', 'コスト比較'],
        content: `<div class="content-section"><h2>選定基準</h2><p>データ量、更新頻度、精度要件で判断</p></div>`,
        quiz: [{question: 'データが頻繁に更新される場合は？', options: ['Fine-tuning', 'RAG', 'どちらでも', '不可能'], correct: 1, explanation: 'RAGは動的に更新可能。'}],
        exercise: {title: '技術選定', prompt: '顧客に最適な技術を提案せよ', sampleAnswer: '<div class="sample-answer"><p>更新頻度が高いのでRAGを推奨</p></div>'}
    },
    
    15: {
        title: 'Week 2 総復習',
        subtitle: 'コード読解とAI技術',
        goals: ['Week 2の知識統合', '実践的な課題解決', '次週への準備'],
        content: `<div class="content-section"><h2>Week 2 まとめ</h2><p>JSON/SQL/Python/API/YAML/Logsの読み方とRAG/プロンプトの基礎を学んだ</p></div>`,
        quiz: [{question: 'Week 2で学んだ最も重要なことは？', options: ['コードを書く', 'コードを読む', 'コードを消す', 'コードを隠す'], correct: 1, explanation: 'FDEはコードを読む力が重要。'}],
        exercise: {title: '総復習', prompt: 'Week 2の学びを振り返れ', sampleAnswer: '<div class="sample-answer"><p>技術的な会話に参加できるようになった</p></div>'}
    },
    
    16: {
        title: 'PoC設計',
        subtitle: '検証可能な実験設計',
        goals: ['PoCの目的設定', '成功基準定義', 'スコープ設定'],
        content: `<div class="content-section"><h2>PoCとは</h2><p>Proof of Concept - 技術的実現可能性の検証</p></div>`,
        quiz: [{question: 'PoCで最も重要なのは？', options: ['完璧な実装', '成功基準', '長期間', '大規模'], correct: 1, explanation: '成功基準を明確にすることが重要。'}],
        exercise: {title: 'PoC設計', prompt: 'PoCの成功基準を定義せよ', sampleAnswer: '<div class="sample-answer"><p>精度80%以上、レスポンス3秒以内</p></div>'}
    },
    
    17: {
        title: 'データ品質評価',
        subtitle: 'AI成功の前提条件',
        goals: ['データ品質チェック', '前処理の必要性判断', 'データ収集計画'],
        content: `<div class="content-section"><h2>データ品質</h2><p>AIの性能はデータ品質で決まる</p></div>`,
        quiz: [{question: 'データ品質で最も重要なのは？', options: ['量', '質', '速度', '場所'], correct: 1, explanation: '質が最も重要。'}],
        exercise: {title: 'データ評価', prompt: 'データ品質を評価せよ', sampleAnswer: '<div class="sample-answer"><p>欠損率10%、ノイズあり、前処理必要</p></div>'}
    },
    
    18: {
        title: 'システム連携設計',
        subtitle: '既存システムとの統合',
        goals: ['連携方式の選定', 'API設計', 'セキュリティ考慮'],
        content: `<div class="content-section"><h2>システム連携</h2><p>既存システムとどう繋ぐか</p></div>`,
        quiz: [{question: 'システム連携で重要なのは？', options: ['速度', 'セキュリティ', '見た目', '価格'], correct: 1, explanation: 'セキュリティが最優先。'}],
        exercise: {title: '連携設計', prompt: '連携方式を提案せよ', sampleAnswer: '<div class="sample-answer"><p>REST API経由、認証はOAuth2</p></div>'}
    },
    
    19: {
        title: 'コスト試算',
        subtitle: 'TCOの見積もり',
        goals: ['初期コスト算出', 'ランニングコスト算出', 'ROI計算'],
        content: `<div class="content-section"><h2>コスト構造</h2><p>初期費用とランニングコストを分けて考える</p></div>`,
        quiz: [{question: 'AIのコストで見落としがちなのは？', options: ['ライセンス', 'トークン課金', '人件費', '電気代'], correct: 1, explanation: 'トークン課金は従量課金で膨らみやすい。'}],
        exercise: {title: 'コスト試算', prompt: '月間コストを試算せよ', sampleAnswer: '<div class="sample-answer"><p>API費用10万円、保守費用5万円</p></div>'}
    },
    
    20: {
        title: 'リスク管理',
        subtitle: '失敗を防ぐ',
        goals: ['技術リスク特定', '対策立案', 'コンティンジェンシープラン'],
        content: `<div class="content-section"><h2>リスク管理</h2><p>何が失敗の原因になるか</p></div>`,
        quiz: [{question: 'AIプロジェクトの最大リスクは？', options: ['技術', 'データ', '人', '予算'], correct: 1, explanation: 'データ品質が最大のリスク。'}],
        exercise: {title: 'リスク分析', prompt: 'リスクと対策を列挙せよ', sampleAnswer: '<div class="sample-answer"><p>データ不足→追加収集、精度不足→人間確認</p></div>'}
    },
    
    21: {
        title: 'ステークホルダー管理',
        subtitle: '関係者の調整',
        goals: ['利害関係者の特定', '期待値調整', 'コミュニケーション計画'],
        content: `<div class="content-section"><h2>ステークホルダー</h2><p>誰が何を期待しているか</p></div>`,
        quiz: [{question: 'ステークホルダー管理で重要なのは？', options: ['全員を満足させる', '期待値を調整する', '無視する', '説得する'], correct: 1, explanation: '期待値を現実的に調整することが重要。'}],
        exercise: {title: 'ステークホルダー分析', prompt: '関係者と期待値を整理せよ', sampleAnswer: '<div class="sample-answer"><p>経営層:ROI、現場:使いやすさ、IT:保守性</p></div>'}
    },
    
    22: {
        title: 'Week 3 総復習',
        subtitle: '実装設計の総まとめ',
        goals: ['Week 3の知識統合', 'PoC設計の実践', '次週への準備'],
        content: `<div class="content-section"><h2>Week 3 まとめ</h2><p>PoC設計、データ評価、システム連携、コスト、リスク、ステークホルダー管理を学んだ</p></div>`,
        quiz: [{question: 'Week 3で学んだ最も重要なことは？', options: ['技術', '設計', '管理', '全て'], correct: 3, explanation: '技術・設計・管理の全てが重要。'}],
        exercise: {title: '総復習', prompt: 'Week 3の学びを振り返れ', sampleAnswer: '<div class="sample-answer"><p>実装前の設計と準備の重要性を理解</p></div>'}
    },
    
    23: {
        title: 'ケース1: 製造業',
        subtitle: '不良品検知AI',
        goals: ['製造業特有の課題理解', 'Edge AI活用', '現場導入の工夫'],
        content: `<div class="content-section"><h2>ケース概要</h2><p>工場の不良品を画像認識で検知</p></div>`,
        quiz: [{question: '製造業AIで重要なのは？', options: ['精度', 'リアルタイム性', 'コスト', '全て'], correct: 3, explanation: '全てが重要だが、特にリアルタイム性。'}],
        exercise: {title: 'ケース分析', prompt: '課題と解決策を提案せよ', sampleAnswer: '<div class="sample-answer"><p>Edge AIでリアルタイム判定、クラウドで学習</p></div>'}
    },
    
    24: {
        title: 'ケース2: 金融業',
        subtitle: '与信審査AI',
        goals: ['金融業特有の課題理解', '説明可能性の重要性', 'コンプライアンス対応'],
        content: `<div class="content-section"><h2>ケース概要</h2><p>AIで与信審査を効率化</p></div>`,
        quiz: [{question: '金融AIで最も重要なのは？', options: ['精度', '速度', '説明可能性', 'コスト'], correct: 2, explanation: '説明可能性が法的に必要。'}],
        exercise: {title: 'ケース分析', prompt: '課題と解決策を提案せよ', sampleAnswer: '<div class="sample-answer"><p>XAIで判断根拠を可視化、人間が最終判断</p></div>'}
    },
    
    25: {
        title: 'ケース3: 小売業',
        subtitle: '需要予測AI',
        goals: ['小売業特有の課題理解', '時系列予測', '在庫最適化'],
        content: `<div class="content-section"><h2>ケース概要</h2><p>AIで需要を予測し在庫を最適化</p></div>`,
        quiz: [{question: '需要予測で重要なのは？', options: ['過去データ', '外部要因', '季節性', '全て'], correct: 3, explanation: '全ての要因を考慮する必要がある。'}],
        exercise: {title: 'ケース分析', prompt: '課題と解決策を提案せよ', sampleAnswer: '<div class="sample-answer"><p>時系列予測+外部データ統合、段階的導入</p></div>'}
    },
    
    26: {
        title: 'ケース4: ヘルスケア',
        subtitle: '診断支援AI',
        goals: ['ヘルスケア特有の課題理解', '医療データの扱い', '倫理的配慮'],
        content: `<div class="content-section"><h2>ケース概要</h2><p>AIで医師の診断を支援</p></div>`,
        quiz: [{question: 'ヘルスケアAIで最も重要なのは？', options: ['精度', '安全性', 'コスト', '速度'], correct: 1, explanation: '安全性が最優先。'}],
        exercise: {title: 'ケース分析', prompt: '課題と解決策を提案せよ', sampleAnswer: '<div class="sample-answer"><p>医師の判断を支援、最終判断は医師、データ匿名化</p></div>'}
    },
    
    27: {
        title: '本番化の準備',
        subtitle: 'PoCから本番へ',
        goals: ['本番化要件の整理', 'スケーラビリティ', '運用設計'],
        content: `<div class="content-section"><h2>本番化</h2><p>PoCと本番の違いを理解する</p></div>`,
        quiz: [{question: '本番化で最も重要なのは？', options: ['機能', '性能', '運用', '全て'], correct: 3, explanation: '全てが重要だが、特に運用。'}],
        exercise: {title: '本番化計画', prompt: '本番化の要件を整理せよ', sampleAnswer: '<div class="sample-answer"><p>監視、バックアップ、障害対応、スケーリング</p></div>'}
    },
    
    28: {
        title: '運用とモニタリング',
        subtitle: '継続的な改善',
        goals: ['モニタリング設計', 'アラート設定', '改善サイクル'],
        content: `<div class="content-section"><h2>運用</h2><p>リリース後の継続的改善</p></div>`,
        quiz: [{question: '運用で最も重要なのは？', options: ['監視', '改善', '対応', '全て'], correct: 3, explanation: '全てが重要。'}],
        exercise: {title: '運用設計', prompt: 'モニタリング項目を定義せよ', sampleAnswer: '<div class="sample-answer"><p>精度、レスポンス、エラー率、利用状況</p></div>'}
    },
    
    29: {
        title: '知見の資産化',
        subtitle: '次の案件に活かす',
        goals: ['パターンの抽出', 'ドキュメント化', 'ナレッジ共有'],
        content: `<div class="content-section"><h2>資産化</h2><p>個別案件を再利用可能な知見に</p></div>`,
        quiz: [{question: '知見の資産化で重要なのは？', options: ['詳細', 'パターン', '量', '速度'], correct: 1, explanation: 'パターンを抽出することが重要。'}],
        exercise: {title: '資産化', prompt: '案件の知見を資産化せよ', sampleAnswer: '<div class="sample-answer"><p>業界別課題パターン、技術選定基準、失敗事例</p></div>'}
    },
    
    30: {
        title: '30日間の総まとめ',
        subtitle: 'FDEとしての第一歩',
        goals: ['全体の振り返り', '今後の学習計画', '実践への準備'],
        content: `
<div class="content-section">
    <h2>30日間で学んだこと</h2>
    
    <div class="week-summary">
        <h3>Week 1: FDE理解</h3>
        <p>FDEとは何か、客先常駐との違い、課題分解の方法</p>
        
        <h3>Week 2: コード読解とAI基礎</h3>
        <p>JSON/SQL/Python/API/YAML/Logs、RAG、プロンプト</p>
        
        <h3>Week 3: 実装設計</h3>
        <p>PoC設計、データ評価、システム連携、コスト、リスク</p>
        
        <h3>Week 4: 実戦演習</h3>
        <p>業界別ケース、本番化、運用、知見の資産化</p>
    </div>
    
    <div class="next-steps">
        <h2>これからの学習</h2>
        <ul>
            <li>実際の案件で実践する</li>
            <li>Code Reading Gymで継続的に練習</li>
            <li>FDEメモを書き続ける</li>
            <li>業界知識を深める</li>
            <li>IBM製品を学ぶ</li>
        </ul>
    </div>
</div>
        `,
        quiz: [{question: '30日間で最も重要な学びは？', options: ['技術', '課題理解', '資産化', '全て'], correct: 3, explanation: '全てが重要で、相互に関連している。'}],
        exercise: {title: '総まとめ', prompt: '30日間の学びを振り返り、今後の計画を立てよ', sampleAnswer: '<div class="sample-answer"><p>FDEの本質を理解し、技術的な会話ができるようになった。今後は実案件で実践し、知見を蓄積していく。</p></div>'}
    }
};

// Export for use in other files
window.dayContents = dayContents;

// Made with Bob
