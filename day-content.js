// Day 1-30 Complete Content
// 根源的理解と実践的洞察を重視

window.dayContents = {
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
        subtitle: 'データ交換フォーマットの歴史と実践',
        goals: [
            'JSONが生まれた歴史的背景を理解する',
            'JSONの構造を完全に理解する',
            'APIレスポンスを読んで問題を特定できる',
            '実際のビジネスシーンでJSONを活用できる'
        ],
        content: `
<div class="content-section">
    <h2>JSONの歴史: なぜJSONが生まれたのか</h2>
    
    <div class="timeline-box">
        <h3>データ交換の進化</h3>
        <div class="timeline-item">
            <h4>1990年代: XML全盛期</h4>
            <p>Webサービスが登場した当初、データ交換にはXMLが使われていた。</p>
            <pre><code><user>
  <id>12345</id>
  <name>山田太郎</name>
  <tags>
    <tag>VIP</tag>
    <tag>企業顧客</tag>
  </tags>
</user></code></pre>
            <p><strong>問題点:</strong> 冗長で読みにくい、パース（解析）が遅い、人間が書くのが大変</p>
        </div>
        
        <div class="timeline-item">
            <h4>2001年: JSONの誕生</h4>
            <p>Douglas Crockfordが、JavaScriptのオブジェクト記法をデータ交換フォーマットとして提案。</p>
            <pre><code>{
  "id": 12345,
  "name": "山田太郎",
  "tags": ["VIP", "企業顧客"]
}</code></pre>
            <p><strong>革新点:</strong> シンプル、読みやすい、JavaScriptで直接扱える</p>
        </div>
        
        <div class="timeline-item">
            <h4>2010年代: JSON標準化</h4>
            <p>REST APIの普及とともに、JSONがデファクトスタンダードに。</p>
            <p><strong>理由:</strong> モバイルアプリの台頭で、軽量なデータ形式が必要になった</p>
        </div>
    </div>
    
    <div class="insight-box">
        <h4>💡 なぜJSONが勝ったのか</h4>
        <p><strong>技術的理由:</strong> JavaScriptで直接扱える = Webブラウザで処理が速い</p>
        <p><strong>ビジネス的理由:</strong> モバイルファーストの時代に、データ量が少ない = 通信コストが安い</p>
        <p><strong>人間的理由:</strong> 読みやすい = デバッグが楽 = 開発速度が上がる</p>
    </div>
</div>

<div class="content-section">
    <h2>JSONの構造を完全理解する</h2>
    
    <h3>1. 基本データ型</h3>
    <div class="code-explanation">
        <pre><code>{
  "文字列": "これは文字列です",
  "数値": 12345,
  "真偽値": true,
  "null値": null,
  "配列": [1, 2, 3],
  "オブジェクト": {"key": "value"}
}</code></pre>
        <div class="explanation">
            <p><strong>文字列:</strong> ダブルクォート必須（シングルクォート不可）</p>
            <p><strong>数値:</strong> 整数も小数も同じ扱い</p>
            <p><strong>真偽値:</strong> true/false（小文字のみ）</p>
            <p><strong>null:</strong> 値が存在しないことを明示</p>
        </div>
    </div>
    
    <h3>2. 実際のAPIレスポンス例</h3>
    <div class="code-explanation">
        <pre><code>{
  "status": "success",
  "data": {
    "user": {
      "id": 12345,
      "name": "山田太郎",
      "email": "yamada@example.com",
      "created_at": "2024-01-15T10:30:00Z",
      "is_active": true,
      "roles": ["admin", "editor"],
      "profile": {
        "company": "IBM",
        "department": "FDE",
        "projects": [
          {
            "id": 1,
            "name": "顧客A RAG導入",
            "status": "in_progress"
          },
          {
            "id": 2,
            "name": "顧客B PoC支援",
            "status": "completed"
          }
        ]
      }
    }
  },
  "meta": {
    "request_id": "abc-123",
    "timestamp": "2024-01-20T15:45:00Z"
  }
}</code></pre>
        <div class="explanation">
            <h4>このJSONから読み取れること:</h4>
            <ul>
                <li><strong>status:</strong> APIリクエストが成功したか</li>
                <li><strong>data.user.name:</strong> ユーザー名は「山田太郎」</li>
                <li><strong>data.user.roles:</strong> 管理者権限と編集者権限を持つ</li>
                <li><strong>data.user.profile.projects:</strong> 2つのプロジェクトに参加中</li>
                <li><strong>meta.request_id:</strong> 問題発生時のトラブルシューティングに使用</li>
            </ul>
        </div>
    </div>
    
    <h3>3. よくあるエラーパターン</h3>
    <div class="error-patterns">
        <div class="error-card">
            <h4>❌ エラー1: カンマの位置</h4>
            <pre><code>{
  "name": "山田",
  "age": 30,  ← 最後の要素にカンマは不要
}</code></pre>
            <p><strong>正解:</strong> 最後の要素の後にカンマを付けない</p>
        </div>
        
        <div class="error-card">
            <h4>❌ エラー2: シングルクォート</h4>
            <pre><code>{
  'name': 'yamada'  ← シングルクォートは使えない
}</code></pre>
            <p><strong>正解:</strong> 必ずダブルクォートを使う</p>
        </div>
        
        <div class="error-card">
            <h4>❌ エラー3: コメント</h4>
            <pre><code>{
  "name": "yamada"  // これはコメント ← コメントは書けない
}</code></pre>
            <p><strong>正解:</strong> JSONにはコメント機能がない</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>実践: FDEとしてJSONを読む</h2>
    
    <h3>シナリオ: 顧客のAPIエラーを調査</h3>
    <div class="scenario-box">
        <p><strong>状況:</strong> 顧客から「APIが動かない」と連絡が来た</p>
        <p><strong>エラーレスポンス:</strong></p>
        <pre><code>{
  "status": "error",
  "error": {
    "code": "INVALID_TOKEN",
    "message": "認証トークンが無効です",
    "details": {
      "token_expired_at": "2024-01-20T10:00:00Z",
      "current_time": "2024-01-20T15:30:00Z"
    }
  },
  "request_id": "xyz-789"
}</code></pre>
        
        <div class="analysis">
            <h4>FDEとしての読み方:</h4>
            <ol>
                <li><strong>status: "error"</strong> → APIリクエストが失敗している</li>
                <li><strong>error.code: "INVALID_TOKEN"</strong> → 認証トークンの問題</li>
                <li><strong>token_expired_at vs current_time</strong> → トークンが5時間30分前に期限切れ</li>
                <li><strong>request_id: "xyz-789"</strong> → サポートに問い合わせる際に必要</li>
            </ol>
            
            <h4>顧客への説明:</h4>
            <p>「認証トークンの有効期限が切れています。トークンは10:00に期限切れになりましたが、現在15:30なので、新しいトークンを取得してください。」</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>JSONとビジネス</h2>
    
    <div class="business-context">
        <h3>なぜFDEがJSONを読めないといけないのか</h3>
        
        <div class="reason-card">
            <h4>理由1: API連携の設計</h4>
            <p>顧客システムとIBM製品を連携させる際、どのデータをどう渡すかを設計する必要がある。</p>
            <p><strong>例:</strong> 「顧客の既存システムから、ユーザー情報をどのJSON形式で受け取るか」</p>
        </div>
        
        <div class="reason-card">
            <h4>理由2: エラーの切り分け</h4>
            <p>「動かない」と言われた時、JSONを読んでエラー原因を特定できる。</p>
            <p><strong>例:</strong> 「認証エラーなのか、データ形式エラーなのか、サーバーエラーなのか」</p>
        </div>
        
        <div class="reason-card">
            <h4>理由3: 技術者との会話</h4>
            <p>エンジニアと「このフィールドが必要」「この形式で返してほしい」と具体的に話せる。</p>
            <p><strong>例:</strong> 「user.profile.company ではなく user.company_name で返してください」</p>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'JSONが生まれた最大の理由は？',
                options: [
                    'XMLより見た目がきれいだから',
                    'JavaScriptで直接扱えて、軽量だから',
                    'Googleが推奨したから',
                    'セキュリティが高いから'
                ],
                correct: 1,
                explanation: 'JSONの最大の利点は、JavaScriptで直接扱える（パースが不要）ことと、XMLより軽量（データ量が少ない）こと。これがモバイル時代に重要だった。'
            },
            {
                question: '次のJSONで、ユーザーの所属部署を取得するには？',
                options: [
                    'data.user.department',
                    'data.user.profile.department',
                    'user.profile.department',
                    'profile.department'
                ],
                correct: 1,
                explanation: 'JSONは階層構造なので、data → user → profile → department の順にアクセスする。'
            },
            {
                question: 'APIエラーレスポンスで最初に確認すべきフィールドは？',
                options: [
                    'timestamp',
                    'request_id',
                    'status と error.code',
                    'details'
                ],
                correct: 2,
                explanation: '最初に status（成功/失敗）と error.code（エラーの種類）を確認することで、問題の大枠を把握できる。'
            }
        ],
        exercise: {
            title: '実践演習: 顧客にJSONエラーを説明する',
            prompt: `顧客から以下のエラーが報告された。顧客に分かりやすく説明せよ。

<pre><code>{
  "status": "error",
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "API呼び出し回数の上限を超えました",
    "details": {
      "limit": 1000,
      "used": 1523,
      "reset_at": "2024-01-21T00:00:00Z"
    }
  }
}</code></pre>`,
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例</h4>
    <p>「APIの呼び出し回数が上限を超えています。1日の上限は1000回ですが、現在1523回呼び出されています。上限は明日の0時にリセットされますので、それまでお待ちいただくか、上限の引き上げをご検討ください。」</p>
    
    <h4>技術者への説明</h4>
    <p>「RATE_LIMIT_EXCEEDED エラーです。limit: 1000 に対して used: 1523 なので、523回オーバーしています。reset_at が明日0時なので、それまで待つか、リトライロジックを実装するか、プラン変更が必要です。」</p>
</div>
            `
        },
        nextSteps: [
            'Code Gymで実際のAPIレスポンスを読む練習をする',
            'Day 5でSQLを学び、データベースとAPIの関係を理解する',
            '自分の担当案件で使われているAPIのドキュメントを読んでみる'
        ]
    },
    
    5: {
        title: 'SQLを読む',
        subtitle: 'データベースの歴史から実践まで',
        goals: [
            'SQLが生まれた歴史的背景を理解する',
            'SELECT、JOIN、WHEREを完全に理解する',
            '実際のビジネスクエリを読んで意味を説明できる',
            'パフォーマンス問題を発見できる'
        ],
        content: `
<div class="content-section">
    <h2>SQLの歴史: なぜSQLが生まれたのか</h2>
    
    <div class="timeline-box">
        <h3>データベースの進化</h3>
        <div class="timeline-item">
            <h4>1960年代: ファイルシステム時代</h4>
            <p>データは単純なファイルに保存されていた。</p>
            <pre><code>user001.txt: 山田太郎,30,東京
user002.txt: 佐藤花子,25,大阪</code></pre>
            <p><strong>問題点:</strong> 検索が遅い、データの整合性が保てない、複数人で同時編集できない</p>
        </div>
        
        <div class="timeline-item">
            <h4>1970年: リレーショナルモデルの誕生</h4>
            <p>IBM研究員のEdgar F. Coddが、データを「表（テーブル）」で管理する概念を提案。</p>
            <p><strong>革新点:</strong> データを構造化し、関係性（リレーション）で結びつける</p>
        </div>
        
        <div class="timeline-item">
            <h4>1974年: SQLの誕生</h4>
            <p>IBMがSEQUEL（後のSQL）を開発。「英語のような文法」でデータベースを操作できるように。</p>
            <pre><code>SELECT name FROM users WHERE age > 25;</code></pre>
            <p><strong>革新点:</strong> プログラマーでなくても、データを取得できる</p>
        </div>
        
        <div class="timeline-item">
            <h4>1980年代〜現在: SQL標準化</h4>
            <p>Oracle、MySQL、PostgreSQL、SQL Serverなど、様々なデータベースが登場。</p>
            <p><strong>重要:</strong> 基本的なSQLは共通だが、各製品で方言（独自拡張）がある</p>
        </div>
    </div>
    
    <div class="insight-box">
        <h4>💡 なぜSQLが50年以上使われ続けているのか</h4>
        <p><strong>技術的理由:</strong> リレーショナルモデルが、ビジネスデータの構造に最適</p>
        <p><strong>ビジネス的理由:</strong> データの整合性を保証できる（お金の計算で重要）</p>
        <p><strong>人間的理由:</strong> 英語のような文法で、非エンジニアでも理解しやすい</p>
    </div>
</div>

<div class="content-section">
    <h2>SQLの基本構造を完全理解する</h2>
    
    <h3>1. SELECT文の基本</h3>
    <div class="code-explanation">
        <pre><code>SELECT name, age, department
FROM employees
WHERE age >= 30
ORDER BY age DESC
LIMIT 10;</code></pre>
        <div class="explanation">
            <p><strong>SELECT:</strong> 取得したい列（カラム）を指定</p>
            <p><strong>FROM:</strong> どのテーブルから取得するか</p>
            <p><strong>WHERE:</strong> 条件を指定（フィルタリング）</p>
            <p><strong>ORDER BY:</strong> 並び順を指定（DESC=降順、ASC=昇順）</p>
            <p><strong>LIMIT:</strong> 取得する行数を制限</p>
        </div>
    </div>
    
    <h3>2. JOIN: テーブルを結合する</h3>
    <div class="code-explanation">
        <pre><code>SELECT
    users.name,
    orders.order_date,
    orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.order_date >= '2024-01-01';</code></pre>
        <div class="explanation">
            <h4>このクエリの意味:</h4>
            <p>「2024年1月1日以降に注文したユーザーの名前と、注文日、金額を取得」</p>
            
            <h4>JOINの種類:</h4>
            <ul>
                <li><strong>INNER JOIN:</strong> 両方のテーブルに存在するデータのみ</li>
                <li><strong>LEFT JOIN:</strong> 左のテーブルは全て、右は一致するもののみ</li>
                <li><strong>RIGHT JOIN:</strong> 右のテーブルは全て、左は一致するもののみ</li>
            </ul>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>実践: FDEとしてSQLを読む</h2>
    
    <h3>シナリオ: 顧客の業務クエリを理解する</h3>
    <div class="scenario-box">
        <p><strong>状況:</strong> 顧客が「このクエリが遅い」と相談してきた</p>
        <pre><code>SELECT
    c.customer_name,
    COUNT(o.order_id) as order_count,
    SUM(o.total_amount) as total_spent
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2023-01-01'
GROUP BY c.customer_id, c.customer_name
HAVING SUM(o.total_amount) > 1000000
ORDER BY total_spent DESC;</code></pre>
        
        <div class="analysis">
            <h4>FDEとしての読み方:</h4>
            <ol>
                <li><strong>ビジネス的意味:</strong> 「2023年以降に100万円以上購入した顧客を、購入額の多い順に表示」</li>
                <li><strong>パフォーマンス問題:</strong> WHERE句で order_date を使っているが、LEFT JOINなので全顧客をスキャン</li>
                <li><strong>改善提案:</strong> INNER JOINに変更し、order_date にインデックスを追加</li>
            </ol>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'SQLが50年以上使われ続けている最大の理由は？',
                options: [
                    'IBMが作ったから',
                    'リレーショナルモデルがビジネスデータに最適だから',
                    '他に選択肢がないから',
                    '学習コストが低いから'
                ],
                correct: 1,
                explanation: 'リレーショナルモデル（表形式でデータを管理し、関係性で結びつける）が、ビジネスデータの構造に最適だったため、50年以上使われ続けている。'
            },
            {
                question: '次のSQLの意味は？ SELECT COUNT(*) FROM users WHERE age >= 30;',
                options: [
                    '30歳以上のユーザーの名前を取得',
                    '30歳以上のユーザーの数を取得',
                    '30歳のユーザーを削除',
                    '30歳以上のユーザーを更新'
                ],
                correct: 1,
                explanation: 'COUNT(*) は行数をカウントする関数。WHERE age >= 30 で30歳以上に絞り込んでいるので、「30歳以上のユーザーの数」を取得する。'
            }
        ],
        exercise: {
            title: '実践演習: 顧客のSQLを読んで説明する',
            prompt: '顧客から「このクエリの意味を教えてほしい」と言われた。ビジネス的な意味を説明せよ。',
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例</h4>
    <p>「このクエリは、2024年の売上トップ10商品を表示します。各商品について、販売個数と売上金額を集計し、売上金額の多い順に並べています。」</p>
</div>
            `
        },
        nextSteps: [
            'Code GymでSQLクエリを読む練習をする',
            'Day 6でPythonを学び、SQLとプログラミングの関係を理解する'
        ]
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
        subtitle: 'AI時代のプログラミング言語',
        goals: [
            'Pythonが生まれた歴史とAI時代に選ばれた理由を理解する',
            'Python基本構文を完全に理解する',
            'AIライブラリ（pandas, numpy）の役割を理解する',
            '実際のAIコードを読んで説明できる'
        ],
        content: `
<div class="content-section">
    <h2>Pythonの歴史: なぜAI時代に選ばれたのか</h2>
    
    <div class="timeline-box">
        <h3>Pythonの進化</h3>
        <div class="timeline-item">
            <h4>1991年: Pythonの誕生</h4>
            <p>Guido van Rossumが、「読みやすく、書きやすい」言語として開発。</p>
            <pre><code>print("Hello, World!")</code></pre>
            <p><strong>設計思想:</strong> 「コードは書くより読まれることの方が多い」</p>
        </div>
        
        <div class="timeline-item">
            <h4>2000年代: 科学計算の台頭</h4>
            <p>NumPy、SciPy、pandasなど、科学計算ライブラリが充実。</p>
            <p><strong>理由:</strong> 研究者が使いやすい（C/C++より簡単、MATLABより安い）</p>
        </div>
        
        <div class="timeline-item">
            <h4>2010年代: 機械学習の標準言語に</h4>
            <p>TensorFlow、PyTorch、scikit-learnなど、ML/AIライブラリが登場。</p>
            <p><strong>決定的要因:</strong> Googleが TensorFlow をPythonで公開</p>
        </div>
        
        <div class="timeline-item">
            <h4>2020年代: AI時代の標準</h4>
            <p>ChatGPT、LangChain、LlamaIndexなど、最新AI技術はPythonファースト。</p>
            <p><strong>現状:</strong> AI開発者の90%以上がPythonを使用</p>
        </div>
    </div>
    
    <div class="insight-box">
        <h4>💡 なぜPythonがAI時代に選ばれたのか</h4>
        <p><strong>技術的理由:</strong> 豊富なライブラリエコシステム（車輪の再発明不要）</p>
        <p><strong>ビジネス的理由:</strong> 学習コストが低い = 人材確保が容易</p>
        <p><strong>歴史的理由:</strong> 研究者が使っていた = 最新論文の実装がPythonで公開される</p>
    </div>
</div>

<div class="content-section">
    <h2>Python基本構文を完全理解する</h2>
    
    <h3>1. 変数とデータ型</h3>
    <div class="code-explanation">
        <pre><code># 変数の定義（型宣言不要）
name = "山田太郎"
age = 30
is_active = True
scores = [85, 90, 78]
user_info = {"name": "山田", "age": 30}</code></pre>
        <div class="explanation">
            <p><strong>文字列:</strong> シングルまたはダブルクォートで囲む</p>
            <p><strong>数値:</strong> 整数も小数も同じ扱い</p>
            <p><strong>真偽値:</strong> True/False（大文字始まり）</p>
            <p><strong>リスト:</strong> [ ] で複数の値を格納</p>
            <p><strong>辞書:</strong> { } でキーと値のペアを格納</p>
        </div>
    </div>
    
    <h3>2. 制御構文</h3>
    <div class="code-explanation">
        <pre><code># if文（インデントで構造を表現）
if age >= 30:
    print("30歳以上です")
elif age >= 20:
    print("20歳以上です")
else:
    print("20歳未満です")

# forループ
for score in scores:
    print(f"スコア: {score}")

# while文
count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
        <div class="explanation">
            <p><strong>重要:</strong> Pythonはインデント（字下げ）で構造を表現</p>
            <p><strong>if文:</strong> 条件分岐</p>
            <p><strong>forループ:</strong> リストの各要素を処理</p>
            <p><strong>whileループ:</strong> 条件が真の間、繰り返す</p>
        </div>
    </div>
    
    <h3>3. 関数の定義</h3>
    <div class="code-explanation">
        <pre><code>def calculate_average(scores):
    """スコアの平均を計算する関数"""
    total = sum(scores)
    count = len(scores)
    return total / count

# 関数の呼び出し
avg = calculate_average([85, 90, 78])
print(f"平均: {avg}")</code></pre>
        <div class="explanation">
            <p><strong>def:</strong> 関数を定義</p>
            <p><strong>"""...""":</strong> 関数の説明（docstring）</p>
            <p><strong>return:</strong> 結果を返す</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>AIライブラリを理解する</h2>
    
    <h3>1. pandas: データ分析の基礎</h3>
    <div class="code-explanation">
        <pre><code>import pandas as pd

# CSVファイルを読み込む
df = pd.read_csv('users.csv')

# データの確認
print(df.head())  # 最初の5行を表示
print(df.describe())  # 統計情報を表示

# データの絞り込み
active_users = df[df['is_active'] == True]
high_scorers = df[df['score'] > 80]</code></pre>
        <div class="explanation">
            <h4>pandasの役割:</h4>
            <p>表形式のデータ（CSV、Excel、SQLなど）を簡単に扱える</p>
            <p><strong>FDEとして:</strong> 顧客データの品質確認、前処理に使う</p>
        </div>
    </div>
    
    <h3>2. numpy: 数値計算の基礎</h3>
    <div class="code-explanation">
        <pre><code>import numpy as np

# 配列の作成
scores = np.array([85, 90, 78, 92, 88])

# 統計計算
print(np.mean(scores))  # 平均
print(np.std(scores))   # 標準偏差
print(np.max(scores))   # 最大値</code></pre>
        <div class="explanation">
            <h4>numpyの役割:</h4>
            <p>大量の数値データを高速に処理</p>
            <p><strong>FDEとして:</strong> ベクトル計算、類似度計算の基礎</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>実践: FDEとしてAIコードを読む</h2>
    
    <h3>シナリオ: RAGのコードを理解する</h3>
    <div class="scenario-box">
        <p><strong>状況:</strong> エンジニアが書いたRAGのコードを確認する</p>
        <pre><code>import pandas as pd
from sentence_transformers import SentenceTransformer

# ドキュメントを読み込む
df = pd.read_csv('documents.csv')

# ベクトル化モデルを初期化
model = SentenceTransformer('all-MiniLM-L6-v2')

# 各ドキュメントをベクトル化
embeddings = model.encode(df['content'].tolist())

# ベクトルをデータフレームに追加
df['embedding'] = embeddings.tolist()

# 保存
df.to_csv('documents_with_embeddings.csv', index=False)</code></pre>
        
        <div class="analysis">
            <h4>FDEとしての読み方:</h4>
            <ol>
                <li><strong>1-2行目:</strong> 必要なライブラリをインポート</li>
                <li><strong>5行目:</strong> CSVファイルからドキュメントを読み込む</li>
                <li><strong>8行目:</strong> ベクトル化モデルを初期化（all-MiniLM-L6-v2は軽量モデル）</li>
                <li><strong>11行目:</strong> 各ドキュメントの内容をベクトルに変換</li>
                <li><strong>14行目:</strong> ベクトルをデータフレームに追加</li>
                <li><strong>17行目:</strong> 結果をCSVに保存</li>
            </ol>
            
            <h4>顧客への説明:</h4>
            <p>「このコードは、御社のドキュメントを機械が理解できる数値（ベクトル）に変換しています。これにより、キーワードではなく意味で検索できるようになります。」</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>よくあるエラーと対処法</h2>
    
    <div class="error-patterns">
        <div class="error-card">
            <h4>❌ IndentationError</h4>
            <pre><code>def hello():
print("Hello")  # インデントがない</code></pre>
            <p><strong>原因:</strong> インデント（字下げ）が正しくない</p>
            <p><strong>対処:</strong> 関数やif文の中は、必ず4スペースまたは1タブ字下げ</p>
        </div>
        
        <div class="error-card">
            <h4>❌ NameError: name 'pd' is not defined</h4>
            <pre><code>df = pd.read_csv('data.csv')  # pdがインポートされていない</code></pre>
            <p><strong>原因:</strong> ライブラリをインポートしていない</p>
            <p><strong>対処:</strong> <code>import pandas as pd</code> を追加</p>
        </div>
        
        <div class="error-card">
            <h4>❌ KeyError: 'column_name'</h4>
            <pre><code>df['column_name']  # 存在しない列名</code></pre>
            <p><strong>原因:</strong> 指定した列名がデータフレームに存在しない</p>
            <p><strong>対処:</strong> <code>df.columns</code> で列名を確認</p>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'PythonがAI開発で選ばれた最大の理由は？',
                options: [
                    '実行速度が速いから',
                    '豊富なAI/MLライブラリエコシステムがあるから',
                    'Googleが作ったから',
                    '無料だから'
                ],
                correct: 1,
                explanation: 'Pythonの最大の強みは、TensorFlow、PyTorch、scikit-learnなど、豊富なAI/MLライブラリエコシステム。これにより、車輪の再発明をせずに最新技術を使える。'
            },
            {
                question: '次のコードの出力は？ scores = [85, 90, 78]; print(len(scores))',
                options: [
                    '85',
                    '90',
                    '3',
                    '253'
                ],
                correct: 2,
                explanation: 'len() はリストの要素数を返す関数。scores には3つの要素があるので、3が出力される。'
            },
            {
                question: 'pandasの主な用途は？',
                options: [
                    '画像処理',
                    '表形式データの分析',
                    'Web開発',
                    'ゲーム開発'
                ],
                correct: 1,
                explanation: 'pandasは表形式データ（CSV、Excel、SQLなど）の読み込み、加工、分析に特化したライブラリ。データ品質確認や前処理に必須。'
            }
        ],
        exercise: {
            title: '実践演習: Pythonコードを顧客に説明する',
            prompt: `顧客から「このコードは何をしているの？」と聞かれた。非エンジニアに分かりやすく説明せよ。

<pre><code>import pandas as pd

df = pd.read_csv('customer_data.csv')
high_value = df[df['purchase_amount'] > 100000]
print(f"高額顧客数: {len(high_value)}")</code></pre>`,
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例（顧客向け）</h4>
    <p>「このコードは、顧客データのCSVファイルを読み込んで、購入金額が10万円を超える高額顧客を抽出し、その人数を表示しています。」</p>
    
    <h4>詳細説明（必要に応じて）</h4>
    <ul>
        <li><strong>1行目:</strong> pandasというデータ分析ライブラリを読み込む</li>
        <li><strong>3行目:</strong> customer_data.csvファイルを読み込む</li>
        <li><strong>4行目:</strong> purchase_amount（購入金額）が100,000を超える行だけを抽出</li>
        <li><strong>5行目:</strong> 抽出された顧客の数を表示</li>
    </ul>
    
    <h4>ビジネス的な意味</h4>
    <p>「このコードを使えば、VIP顧客を自動的に特定できます。例えば、高額顧客だけに特別なキャンペーンを送る、といった施策に活用できます。」</p>
</div>
            `
        },
        nextSteps: [
            'Code GymでPythonコードを読む練習をする',
            'Day 8でAPIを学び、PythonでAPIを呼び出す方法を理解する',
            '実際のAIプロジェクトのコードを読んでみる（GitHub等）'
        ]
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
        subtitle: 'システムの声を聞く技術',
        goals: [
            'ログが生まれた歴史と重要性を理解する',
            'ログレベルの意味と使い分けを完全に理解する',
            '実際のログからエラー原因を特定できる',
            'FDEとしてログを活用したトラブルシューティングができる'
        ],
        content: `
<div class="content-section">
    <h2>ログの歴史: なぜログが重要なのか</h2>
    
    <div class="timeline-box">
        <h3>ログの進化</h3>
        <div class="timeline-item">
            <h4>1960年代: デバッグの始まり</h4>
            <p>コンピューターが登場した当初、プログラムの動作を確認する手段は「print文」だけだった。</p>
            <pre><code>PRINT "Processing record 1"
PRINT "Processing record 2"</code></pre>
            <p><strong>問題点:</strong> 本番環境で使えない、後から確認できない、大量のprint文で遅くなる</p>
        </div>
        
        <div class="timeline-item">
            <h4>1980年代: ログファイルの登場</h4>
            <p>UNIXシステムで、システムの動作をファイルに記録する仕組みが標準化。</p>
            <pre><code>/var/log/system.log
/var/log/error.log</code></pre>
            <p><strong>革新点:</strong> 後から確認できる、本番環境でも使える、レベル別に分類できる</p>
        </div>
        
        <div class="timeline-item">
            <h4>2000年代: 構造化ログ</h4>
            <p>JSONやXML形式でログを記録し、機械的に解析できるように。</p>
            <pre><code>{"timestamp": "2024-01-20T10:30:00Z", "level": "ERROR", "message": "Connection timeout"}</code></pre>
            <p><strong>革新点:</strong> 自動分析、可視化、アラート設定が可能に</p>
        </div>
        
        <div class="timeline-item">
            <h4>2010年代〜現在: 分散ログ管理</h4>
            <p>Splunk、ELK Stack、CloudWatchなど、複数サーバーのログを集約・分析するツールが登場。</p>
            <p><strong>現状:</strong> マイクロサービス時代に、ログは「システムの健康診断書」として不可欠</p>
        </div>
    </div>
    
    <div class="insight-box">
        <h4>💡 なぜログが重要なのか</h4>
        <p><strong>技術的理由:</strong> 本番環境で起きた問題を、後から再現・分析できる唯一の手段</p>
        <p><strong>ビジネス的理由:</strong> システム障害の原因特定が早い = ダウンタイムが短い = 損失が少ない</p>
        <p><strong>法的理由:</strong> セキュリティインシデント発生時、ログが証拠になる</p>
    </div>
</div>

<div class="content-section">
    <h2>ログレベルを完全理解する</h2>
    
    <div class="log-levels">
        <div class="log-level-card debug">
            <h4>DEBUG（デバッグ）</h4>
            <p><strong>重要度:</strong> 最低</p>
            <p><strong>用途:</strong> 開発中のデバッグ情報</p>
            <p><strong>例:</strong></p>
            <pre><code>2024-01-20 10:30:00 DEBUG [UserService] Fetching user data for ID: 12345
2024-01-20 10:30:01 DEBUG [Database] Query executed: SELECT * FROM users WHERE id=12345
2024-01-20 10:30:01 DEBUG [UserService] User data retrieved: {name: "山田太郎", age: 30}</code></pre>
            <p><strong>FDEとして:</strong> 本番環境では通常オフ。開発時のみ使用。</p>
        </div>
        
        <div class="log-level-card info">
            <h4>INFO（情報）</h4>
            <p><strong>重要度:</strong> 低</p>
            <p><strong>用途:</strong> 正常な動作の記録</p>
            <p><strong>例:</strong></p>
            <pre><code>2024-01-20 10:30:00 INFO [Application] Server started on port 8080
2024-01-20 10:30:05 INFO [UserService] User login successful: user_id=12345
2024-01-20 10:30:10 INFO [OrderService] Order created: order_id=67890, amount=10000</code></pre>
            <p><strong>FDEとして:</strong> システムが正常に動いているか確認するために使う。</p>
        </div>
        
        <div class="log-level-card warn">
            <h4>WARN（警告）</h4>
            <p><strong>重要度:</strong> 中</p>
            <p><strong>用途:</strong> 問題になる可能性がある状況</p>
            <p><strong>例:</strong></p>
            <pre><code>2024-01-20 10:30:00 WARN [Database] Connection pool 80% full (8/10 connections in use)
2024-01-20 10:30:05 WARN [Cache] Cache hit rate below 50% (current: 45%)
2024-01-20 10:30:10 WARN [API] Response time exceeded threshold: 3.5s (threshold: 3.0s)</code></pre>
            <p><strong>FDEとして:</strong> 今すぐ問題ではないが、放置すると問題になる可能性がある。監視が必要。</p>
        </div>
        
        <div class="log-level-card error">
            <h4>ERROR（エラー）</h4>
            <p><strong>重要度:</strong> 高</p>
            <p><strong>用途:</strong> 処理が失敗した</p>
            <p><strong>例:</strong></p>
            <pre><code>2024-01-20 10:30:00 ERROR [Database] Connection timeout after 30s
2024-01-20 10:30:05 ERROR [PaymentService] Payment failed: insufficient_funds, user_id=12345
2024-01-20 10:30:10 ERROR [FileService] File not found: /data/documents/report.pdf</code></pre>
            <p><strong>FDEとして:</strong> 即座に対応が必要。ユーザーに影響が出ている可能性が高い。</p>
        </div>
        
        <div class="log-level-card fatal">
            <h4>FATAL / CRITICAL（致命的）</h4>
            <p><strong>重要度:</strong> 最高</p>
            <p><strong>用途:</strong> システムが停止する重大なエラー</p>
            <p><strong>例:</strong></p>
            <pre><code>2024-01-20 10:30:00 FATAL [Application] Out of memory: Cannot allocate 1GB
2024-01-20 10:30:05 FATAL [Database] All database connections failed
2024-01-20 10:30:10 FATAL [Security] Unauthorized access detected, shutting down</code></pre>
            <p><strong>FDEとして:</strong> 緊急対応が必要。システム全体が停止している可能性がある。</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>実践: FDEとしてログを読む</h2>
    
    <h3>シナリオ1: RAGシステムのエラー調査</h3>
    <div class="scenario-box">
        <p><strong>状況:</strong> 顧客から「RAGシステムが動かない」と連絡が来た</p>
        <p><strong>ログ:</strong></p>
        <pre><code>2024-01-20 10:25:00 INFO [RAGService] Starting document retrieval for query: "製品Aの仕様"
2024-01-20 10:25:01 DEBUG [VectorDB] Searching for similar documents, query_vector_size: 384
2024-01-20 10:25:02 WARN [VectorDB] Query took 2.5s (threshold: 2.0s)
2024-01-20 10:25:03 INFO [VectorDB] Found 5 similar documents
2024-01-20 10:25:04 INFO [LLMService] Sending prompt to LLM, context_size: 2048 tokens
2024-01-20 10:25:05 ERROR [LLMService] LLM API call failed: rate_limit_exceeded
2024-01-20 10:25:05 ERROR [LLMService] Retry 1/3 after 1s
2024-01-20 10:25:06 ERROR [LLMService] LLM API call failed: rate_limit_exceeded
2024-01-20 10:25:06 ERROR [LLMService] Retry 2/3 after 2s
2024-01-20 10:25:08 ERROR [LLMService] LLM API call failed: rate_limit_exceeded
2024-01-20 10:25:08 ERROR [LLMService] Retry 3/3 failed, giving up
2024-01-20 10:25:08 ERROR [RAGService] Document retrieval failed: LLM service unavailable</code></pre>
        
        <div class="analysis">
            <h4>FDEとしての読み方:</h4>
            <ol>
                <li><strong>10:25:00-10:25:03:</strong> ベクトル検索は成功（5件のドキュメントを取得）</li>
                <li><strong>10:25:02 WARN:</strong> 検索に2.5秒かかっている（閾値2.0秒超過）→ パフォーマンス問題の兆候</li>
                <li><strong>10:25:05-10:25:08 ERROR:</strong> LLM APIの呼び出しが3回とも失敗</li>
                <li><strong>エラー原因:</strong> rate_limit_exceeded = API呼び出し回数の上限超過</li>
            </ol>
            
            <h4>顧客への説明:</h4>
            <p>「RAGシステム自体は正常に動作していますが、LLM（言語モデル）のAPI呼び出し回数が上限を超えています。これは、同時に多くのユーザーがシステムを使用しているためです。対策として、APIプランのアップグレードまたはリクエストの分散が必要です。」</p>
            
            <h4>技術者への説明:</h4>
            <p>「ベクトル検索は成功していますが、LLMServiceでrate_limit_exceededが発生しています。リトライロジックは正常に動作していますが、3回とも失敗しています。対策として、1) APIプランのアップグレード、2) リクエストキューイング、3) キャッシュの導入を検討してください。また、VectorDBの検索時間が閾値を超えているので、インデックスの最適化も必要です。」</p>
        </div>
    </div>
    
    <h3>シナリオ2: データベース接続エラー</h3>
    <div class="scenario-box">
        <p><strong>状況:</strong> 本番環境で突然エラーが発生</p>
        <p><strong>ログ:</strong></p>
        <pre><code>2024-01-20 14:30:00 INFO [Application] Processing request: GET /api/users/12345
2024-01-20 14:30:01 DEBUG [Database] Attempting to connect to database: host=db.example.com, port=5432
2024-01-20 14:30:31 ERROR [Database] Connection timeout after 30s
2024-01-20 14:30:31 ERROR [Database] Failed to execute query: SELECT * FROM users WHERE id=12345
2024-01-20 14:30:31 ERROR [Application] Request failed: database_connection_error
2024-01-20 14:30:31 INFO [Application] Returning 500 Internal Server Error to client</code></pre>
        
        <div class="analysis">
            <h4>FDEとしての読み方:</h4>
            <ol>
                <li><strong>14:30:00:</strong> ユーザーからのリクエストを受信</li>
                <li><strong>14:30:01:</strong> データベースへの接続を試行</li>
                <li><strong>14:30:31:</strong> 30秒後にタイムアウト（14:30:01から30秒経過）</li>
                <li><strong>原因:</strong> データベースサーバーに接続できない</li>
            </ol>
            
            <h4>考えられる原因:</h4>
            <ul>
                <li>データベースサーバーがダウンしている</li>
                <li>ネットワークの問題（ファイアウォール、ルーティング）</li>
                <li>データベースの接続数上限に達している</li>
                <li>データベースの認証情報が間違っている</li>
            </ul>
            
            <h4>次のアクション:</h4>
            <ol>
                <li>データベースサーバーの稼働状況を確認</li>
                <li>ネットワーク接続を確認（ping、telnet）</li>
                <li>データベースの接続数を確認</li>
                <li>データベースのログを確認</li>
            </ol>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>ログ分析のベストプラクティス</h2>
    
    <div class="best-practices">
        <div class="practice-card">
            <h4>1. タイムスタンプを追う</h4>
            <p>エラーが発生した時刻から、前後のログを確認する。エラーの「前兆」が見つかることが多い。</p>
            <pre><code>10:29:55 WARN [Database] Connection pool 90% full
10:29:58 WARN [Database] Connection pool 95% full
10:30:00 ERROR [Database] Connection pool exhausted</code></pre>
            <p><strong>分析:</strong> 10:29:55から接続プールが逼迫し始め、10:30:00に枯渇した。</p>
        </div>
        
        <div class="practice-card">
            <h4>2. エラーメッセージをそのまま検索</h4>
            <p>エラーメッセージをGoogle検索すると、同じ問題に遭遇した人の解決策が見つかることが多い。</p>
            <p><strong>例:</strong> "rate_limit_exceeded" → OpenAI APIの呼び出し制限</p>
        </div>
        
        <div class="practice-card">
            <h4>3. ログレベルでフィルタリング</h4>
            <p>まずERRORとFATALだけを見る。次にWARNを見る。INFOとDEBUGは必要に応じて。</p>
            <pre><code># ERRORとFATALだけを表示
grep -E "ERROR|FATAL" application.log

# 特定の時間帯のERRORを表示
grep "2024-01-20 10:3" application.log | grep ERROR</code></pre>
        </div>
        
        <div class="practice-card">
            <h4>4. パターンを見つける</h4>
            <p>同じエラーが繰り返し発生していないか確認する。</p>
            <pre><code># 同じエラーの発生回数をカウント
grep ERROR application.log | sort | uniq -c | sort -nr</code></pre>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>FDEとしてのログ活用</h2>
    
    <div class="fde-usage">
        <div class="usage-card">
            <h4>1. PoC中のデバッグ</h4>
            <p>PoCで問題が発生した時、ログを見てエンジニアに具体的に報告できる。</p>
            <p><strong>悪い報告:</strong> 「動きません」</p>
            <p><strong>良い報告:</strong> 「10:30:00にrate_limit_exceededエラーが発生しています。LLM APIの呼び出し制限に達したようです。」</p>
        </div>
        
        <div class="usage-card">
            <h4>2. パフォーマンス問題の発見</h4>
            <p>WARNレベルのログから、将来の問題を予測できる。</p>
            <p><strong>例:</strong> 「検索時間が閾値を超えています。データ量が増えると、さらに遅くなる可能性があります。」</p>
        </div>
        
        <div class="usage-card">
            <h4>3. 顧客への説明</h4>
            <p>ログを根拠に、技術的な問題を非エンジニアに説明できる。</p>
            <p><strong>例:</strong> 「ログを確認したところ、データベースへの接続が30秒でタイムアウトしています。これは、データベースサーバーに問題がある可能性が高いです。」</p>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'ログが重要な最大の理由は？',
                options: [
                    '開発者が好きだから',
                    '本番環境で起きた問題を後から分析できる唯一の手段だから',
                    '法律で義務付けられているから',
                    'ファイルサイズを大きくするため'
                ],
                correct: 1,
                explanation: 'ログは、本番環境で起きた問題を後から再現・分析できる唯一の手段。デバッガーが使えない本番環境では、ログが唯一の情報源。'
            },
            {
                question: '次のログで、最初に確認すべき問題は？',
                options: [
                    'DEBUG: Query executed',
                    'INFO: User login successful',
                    'WARN: Connection pool 90% full',
                    'ERROR: Database connection timeout'
                ],
                correct: 3,
                explanation: 'ERRORが最優先。ユーザーに影響が出ている可能性が高い。次にWARNを確認し、将来の問題を予測する。'
            },
            {
                question: 'rate_limit_exceededエラーの意味は？',
                options: [
                    'データベースが満杯',
                    'API呼び出し回数の上限超過',
                    'メモリ不足',
                    'ネットワーク切断'
                ],
                correct: 1,
                explanation: 'rate_limit_exceededは、API呼び出し回数が上限を超えたことを示す。対策として、APIプランのアップグレードやリクエストの分散が必要。'
            }
        ],
        exercise: {
            title: '実践演習: ログからエラー原因を特定する',
            prompt: `顧客から「システムが遅い」と連絡が来た。以下のログから原因を特定し、顧客に説明せよ。

<pre><code>2024-01-20 15:00:00 INFO [Application] Request received: GET /api/search?q=製品A
2024-01-20 15:00:01 DEBUG [VectorDB] Searching for similar documents
2024-01-20 15:00:15 WARN [VectorDB] Query took 14.2s (threshold: 2.0s)
2024-01-20 15:00:15 INFO [VectorDB] Found 100 similar documents
2024-01-20 15:00:16 INFO [LLMService] Sending prompt to LLM, context_size: 8192 tokens
2024-01-20 15:00:25 WARN [LLMService] LLM response took 9.1s (threshold: 5.0s)
2024-01-20 15:00:25 INFO [Application] Request completed in 25.3s</code></pre>`,
            sampleAnswer: `
<div class="sample-answer">
    <h4>模範解答例（顧客向け）</h4>
    <p>「システムが遅い原因は2つあります。1つ目は、ドキュメント検索に14秒かかっていること（通常は2秒以内）。2つ目は、AIの回答生成に9秒かかっていること（通常は5秒以内）。合計で25秒かかっています。」</p>
    
    <h4>原因分析</h4>
    <ul>
        <li><strong>ベクトル検索が遅い（14.2秒）:</strong> データ量が増えた、またはインデックスが最適化されていない可能性</li>
        <li><strong>LLM応答が遅い（9.1秒）:</strong> コンテキストサイズが大きすぎる（8192トークン）</li>
    </ul>
    
    <h4>改善提案</h4>
    <ol>
        <li><strong>短期対策:</strong> 検索結果を100件から10件に減らす（コンテキストサイズを削減）</li>
        <li><strong>中期対策:</strong> ベクトルデータベースのインデックスを最適化</li>
        <li><strong>長期対策:</strong> キャッシュを導入し、同じ検索は再利用</li>
    </ol>
    
    <h4>技術者への説明</h4>
    <p>「VectorDBの検索時間が14.2秒（閾値2.0秒の7倍）、LLMServiceの応答時間が9.1秒（閾値5.0秒の1.8倍）です。context_sizeが8192トークンと大きいので、検索結果の上限を減らすことを推奨します。また、VectorDBのインデックス最適化とクエリキャッシュの導入を検討してください。」</p>
</div>
            `
        },
        nextSteps: [
            'Code Gymで実際のログを読む練習をする',
            'Day 11でRAGの基礎を学び、RAGシステムのログを理解する',
            '自分の担当案件のログを確認し、WARNレベルの問題がないかチェックする'
        ]
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
        subtitle: '失敗しない実験設計の技術',
        goals: [
            'PoCとは何か、なぜ必要かを完全に理解する',
            '成功基準を定量的に定義できる',
            'スコープを適切に設定できる',
            'FDEとしてPoC設計をリードできる'
        ],
        content: `
<div class="content-section">
    <h2>PoCとは何か: なぜPoCが必要なのか</h2>
    
    <div class="definition-box">
        <h3>PoC (Proof of Concept) の定義</h3>
        <p><strong>PoC</strong>とは、「この技術で、この課題を解決できるか」を<strong>小規模に検証する実験</strong>である。</p>
    </div>
    
    <div class="insight-box">
        <h4>💡 なぜPoCが必要なのか</h4>
        <p><strong>ビジネス的理由:</strong> いきなり本番システムを作ると、失敗した時の損失が大きい（数千万円〜数億円）</p>
        <p><strong>技術的理由:</strong> AIは「やってみないと分からない」ことが多い（データ品質、精度、速度）</p>
        <p><strong>組織的理由:</strong> 小さな成功を見せることで、社内の理解と予算を獲得できる</p>
    </div>
    
    <div class="comparison-table">
        <h3>PoCと本番システムの違い</h3>
        <table>
            <thead>
                <tr>
                    <th>観点</th>
                    <th>PoC</th>
                    <th>本番システム</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>目的</strong></td>
                    <td>技術的実現可能性の検証</td>
                    <td>ビジネス価値の提供</td>
                </tr>
                <tr>
                    <td><strong>期間</strong></td>
                    <td>2週間〜3ヶ月</td>
                    <td>6ヶ月〜2年</td>
                </tr>
                <tr>
                    <td><strong>データ量</strong></td>
                    <td>100〜1,000件</td>
                    <td>10万〜1,000万件</td>
                </tr>
                <tr>
                    <td><strong>ユーザー数</strong></td>
                    <td>5〜20人（社内のみ）</td>
                    <td>100〜10,000人</td>
                </tr>
                <tr>
                    <td><strong>可用性</strong></td>
                    <td>営業時間のみ（9-18時）</td>
                    <td>24時間365日</td>
                </tr>
                <tr>
                    <td><strong>セキュリティ</strong></td>
                    <td>基本的な対策</td>
                    <td>厳格な対策</td>
                </tr>
                <tr>
                    <td><strong>コスト</strong></td>
                    <td>100万〜500万円</td>
                    <td>3,000万〜3億円</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="content-section">
    <h2>PoC設計の5ステップ</h2>
    
    <div class="step-card">
        <h3>Step 1: 目的を明確にする</h3>
        <p>「何を検証したいのか」を一言で言えるようにする。</p>
        
        <div class="example-box bad">
            <h4>❌ 悪い例</h4>
            <p>「RAGを使って社内文書を検索できるようにする」</p>
            <p><strong>問題点:</strong> 「検証したいこと」が不明確。これは目的ではなく手段。</p>
        </div>
        
        <div class="example-box good">
            <h4>✅ 良い例</h4>
            <p>「RAGを使って、社内問い合わせ対応時間を50%削減できるか検証する」</p>
            <p><strong>良い点:</strong> 検証したいこと（対応時間削減）が明確。数値目標がある。</p>
        </div>
    </div>
    
    <div class="step-card">
        <h3>Step 2: 成功基準を定量的に定義する</h3>
        <p>「どうなったら成功か」を数値で定義する。これがPoCで最も重要。</p>
        
        <div class="success-criteria">
            <h4>成功基準の3要素</h4>
            <div class="criteria-grid">
                <div class="criteria-card">
                    <h5>1. 精度（Accuracy）</h5>
                    <p><strong>定義:</strong> AIの回答がどれだけ正確か</p>
                    <p><strong>例:</strong></p>
                    <ul>
                        <li>回答の正解率: 80%以上</li>
                        <li>ユーザー満足度: 5段階評価で4以上</li>
                        <li>人間確認が必要な割合: 20%以下</li>
                    </ul>
                </div>
                
                <div class="criteria-card">
                    <h5>2. 速度（Speed）</h5>
                    <p><strong>定義:</strong> どれだけ速く回答できるか</p>
                    <p><strong>例:</strong></p>
                    <ul>
                        <li>回答生成時間: 3秒以内</li>
                        <li>検索時間: 1秒以内</li>
                        <li>同時ユーザー数: 10人まで対応可能</li>
                    </ul>
                </div>
                
                <div class="criteria-card">
                    <h5>3. コスト（Cost）</h5>
                    <p><strong>定義:</strong> どれだけコストがかかるか</p>
                    <p><strong>例:</strong></p>
                    <ul>
                        <li>1回答あたりのコスト: 10円以下</li>
                        <li>月間運用コスト: 10万円以下</li>
                        <li>初期構築コスト: 300万円以下</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="example-box">
            <h4>実際の成功基準の例</h4>
            <pre><code>【RAG社内問い合わせシステムのPoC成功基準】

1. 精度
   - 回答の正解率: 80%以上
   - ユーザー満足度: 5段階評価で平均4.0以上
   - 「分からない」と回答する割合: 10%以下

2. 速度
   - 回答生成時間: 平均3秒以内
   - 検索時間: 平均1秒以内
   - 同時ユーザー数: 10人まで対応可能

3. コスト
   - 1回答あたりのコスト: 10円以下
   - PoC期間中の総コスト: 100万円以下

4. ビジネス効果
   - 問い合わせ対応時間: 平均10分→5分（50%削減）
   - 担当者の負荷: 1日20件→10件（50%削減）</code></pre>
        </div>
    </div>
    
    <div class="step-card">
        <h3>Step 3: スコープを設定する</h3>
        <p>「何をやるか」だけでなく、「何をやらないか」を明確にする。</p>
        
        <div class="scope-definition">
            <h4>スコープ設定の4要素</h4>
            
            <div class="scope-item">
                <h5>1. 対象データ</h5>
                <div class="example-box good">
                    <p><strong>やる:</strong> 社内FAQ 100件、製品マニュアル 50件</p>
                    <p><strong>やらない:</strong> 過去のメール、Slackログ、外部サイト</p>
                </div>
            </div>
            
            <div class="scope-item">
                <h5>2. 対象ユーザー</h5>
                <div class="example-box good">
                    <p><strong>やる:</strong> カスタマーサポート部門の10名</p>
                    <p><strong>やらない:</strong> 全社員、外部顧客</p>
                </div>
            </div>
            
            <div class="scope-item">
                <h5>3. 機能</h5>
                <div class="example-box good">
                    <p><strong>やる:</strong> 質問応答、関連文書の表示</p>
                    <p><strong>やらない:</strong> 多言語対応、音声入力、画像検索</p>
                </div>
            </div>
            
            <div class="scope-item">
                <h5>4. 期間</h5>
                <div class="example-box good">
                    <p><strong>準備期間:</strong> 2週間（データ収集・前処理）</p>
                    <p><strong>開発期間:</strong> 4週間（システム構築）</p>
                    <p><strong>検証期間:</strong> 2週間（実際に使ってもらう）</p>
                    <p><strong>合計:</strong> 8週間（2ヶ月）</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="step-card">
        <h3>Step 4: リスクを特定する</h3>
        <p>「何が失敗の原因になるか」を事前に考え、対策を立てる。</p>
        
        <div class="risk-table">
            <table>
                <thead>
                    <tr>
                        <th>リスク</th>
                        <th>影響</th>
                        <th>対策</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>データ品質が低い</td>
                        <td>精度が目標に達しない</td>
                        <td>事前にデータ品質を評価、前処理計画を立てる</td>
                    </tr>
                    <tr>
                        <td>データ量が不足</td>
                        <td>検証が不十分</td>
                        <td>最低限必要なデータ量を事前に定義、追加収集計画を立てる</td>
                    </tr>
                    <tr>
                        <td>ユーザーが使ってくれない</td>
                        <td>検証ができない</td>
                        <td>事前に使い方を説明、インセンティブを設定</td>
                    </tr>
                    <tr>
                        <td>コストが予算を超える</td>
                        <td>PoCが中断</td>
                        <td>事前にコスト試算、上限を設定</td>
                    </tr>
                    <tr>
                        <td>技術的に実現できない</td>
                        <td>PoC失敗</td>
                        <td>事前に技術検証、代替案を用意</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div class="step-card">
        <h3>Step 5: 評価方法を決める</h3>
        <p>「どうやって成功基準を測定するか」を具体的に決める。</p>
        
        <div class="evaluation-methods">
            <div class="method-card">
                <h5>1. 定量評価</h5>
                <p><strong>方法:</strong> システムログから自動的に測定</p>
                <ul>
                    <li>回答生成時間: システムログから自動集計</li>
                    <li>検索時間: システムログから自動集計</li>
                    <li>利用回数: システムログから自動集計</li>
                    <li>コスト: API使用量から自動計算</li>
                </ul>
            </div>
            
            <div class="method-card">
                <h5>2. 定性評価</h5>
                <p><strong>方法:</strong> ユーザーアンケート</p>
                <ul>
                    <li>回答の正確性: 5段階評価（1=不正確、5=正確）</li>
                    <li>使いやすさ: 5段階評価（1=使いにくい、5=使いやすい）</li>
                    <li>満足度: 5段階評価（1=不満、5=満足）</li>
                    <li>自由記述: 良かった点、改善点</li>
                </ul>
            </div>
            
            <div class="method-card">
                <h5>3. 人間評価</h5>
                <p><strong>方法:</strong> 専門家が回答を評価</p>
                <ul>
                    <li>100件の質問に対する回答を専門家が評価</li>
                    <li>正解/不正解/部分正解を判定</li>
                    <li>正解率を計算</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>実践: FDEとしてPoC設計をリードする</h2>
    
    <h3>シナリオ: 製造業の品質管理AI導入PoC</h3>
    <div class="scenario-box">
        <p><strong>状況:</strong> 製造業の顧客が「AIで不良品検知を自動化したい」と相談してきた</p>
        
        <div class="poc-design">
            <h4>Step 1: 目的を明確にする</h4>
            <p><strong>目的:</strong> 画像認識AIを使って、製品の不良品検知を自動化し、検査時間を50%削減できるか検証する</p>
            
            <h4>Step 2: 成功基準を定義する</h4>
            <pre><code>【成功基準】
1. 精度
   - 不良品検知率: 95%以上（見逃し5%以下）
   - 誤検知率: 10%以下（正常品を不良品と判定）
   - 人間の検査員との一致率: 90%以上

2. 速度
   - 1枚あたりの検査時間: 1秒以内
   - 同時処理枚数: 10枚まで

3. コスト
   - 1枚あたりの検査コスト: 1円以下
   - PoC期間中の総コスト: 300万円以下

4. ビジネス効果
   - 検査時間: 1枚10秒→5秒（50%削減）
   - 検査員の負荷: 1日1,000枚→500枚（50%削減）</code></pre>
            
            <h4>Step 3: スコープを設定する</h4>
            <pre><code>【やること】
- 対象製品: 製品A（最も不良率が高い製品）
- 対象不良: 傷、汚れ、変形の3種類
- データ量: 正常品1,000枚、不良品300枚
- ユーザー: 品質管理部門の5名
- 期間: 3ヶ月（準備1ヶ月、開発1ヶ月、検証1ヶ月）

【やらないこと】
- 製品B、C、Dは対象外
- 色ムラ、サイズ不良は対象外
- 全社展開は本PoCの範囲外
- 既存システムとの連携は本PoCの範囲外</code></pre>
            
            <h4>Step 4: リスクと対策</h4>
            <pre><code>【リスク1】不良品の画像データが不足
→ 対策: 事前に300枚確保できるか確認。不足なら過去データを掘り起こす

【リスク2】照明条件が一定でない
→ 対策: 撮影環境を標準化。照明を固定

【リスク3】検査員が使ってくれない
→ 対策: 事前に使い方を説明。検査時間が短縮されることを強調

【リスク4】精度が目標に達しない
→ 対策: 複数のAIモデルを試す。人間確認フローを用意</code></pre>
            
            <h4>Step 5: 評価方法</h4>
            <pre><code>【定量評価】
- システムログから検査時間、処理枚数を自動集計
- 検知率、誤検知率を計算

【定性評価】
- 検査員5名にアンケート（使いやすさ、満足度）

【人間評価】
- 検査員が100枚の画像をAIと同時に評価
- AIと人間の判定を比較し、一致率を計算</code></pre>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>PoCでよくある失敗パターン</h2>
    
    <div class="failure-patterns">
        <div class="failure-card">
            <h4>❌ 失敗パターン1: 成功基準が曖昧</h4>
            <p><strong>例:</strong> 「うまくいったら成功」</p>
            <p><strong>問題:</strong> 何をもって「うまくいった」と判断するか不明</p>
            <p><strong>対策:</strong> 数値で定義する（精度80%以上、など）</p>
        </div>
        
        <div class="failure-card">
            <h4>❌ 失敗パターン2: スコープが広すぎる</h4>
            <p><strong>例:</strong> 「全社の全業務を対象にする」</p>
            <p><strong>問題:</strong> 期間内に終わらない、コストが膨らむ</p>
            <p><strong>対策:</strong> 最小限のスコープから始める</p>
        </div>
        
        <div class="failure-card">
            <h4>❌ 失敗パターン3: データ品質を確認しない</h4>
            <p><strong>例:</strong> 「データはあるから大丈夫」</p>
            <p><strong>問題:</strong> 実際には使えないデータだった</p>
            <p><strong>対策:</strong> 事前にデータ品質を評価する</p>
        </div>
        
        <div class="failure-card">
            <h4>❌ 失敗パターン4: ユーザーを巻き込まない</h4>
            <p><strong>例:</strong> 「完成してから見せる」</p>
            <p><strong>問題:</strong> 実際のニーズと合わない</p>
            <p><strong>対策:</strong> 早い段階からユーザーを巻き込む</p>
        </div>
    </div>
</div>
        `,
        quiz: [
            {
                question: 'PoCで最も重要なのは？',
                options: [
                    '完璧な実装',
                    '成功基準を定量的に定義すること',
                    '長期間かけること',
                    '大規模にすること'
                ],
                correct: 1,
                explanation: 'PoCで最も重要なのは、成功基準を定量的に定義すること。「どうなったら成功か」が明確でないと、検証ができない。'
            },
            {
                question: 'PoCのスコープ設定で重要なのは？',
                options: [
                    'できるだけ多くの機能を入れる',
                    '「何をやらないか」を明確にする',
                    '全社展開を前提にする',
                    '完璧を目指す'
                ],
                correct: 1,
                explanation: 'PoCでは「何をやらないか」を明確にすることが重要。スコープを絞ることで、期間内に検証を完了できる。'
            },
            {
                question: '次の成功基準で、最も良いのは？',
                options: [
                    '「うまくいったら成功」',
                    '「ユーザーが満足したら成功」',
                    '「回答の正解率80%以上、レスポンス3秒以内」',
                    '「できるだけ良い結果を出す」'
                ],
                correct: 2,
                explanation: '成功基準は定量的に定義する必要がある。「回答の正解率80%以上、レスポンス3秒以内」のように、数値で測定可能な基準が良い。'
            }
        ],
        exercise: {
            title: '実践演習: PoC設計書を作成する',
            prompt: `顧客から以下の相談を受けた。PoC設計書を作成せよ。

<strong>顧客の要望:</strong>
「社内のコールセンターで、オペレーターが顧客からの問い合わせに回答する際、マニュアルを探すのに時間がかかっている。AIで自動的にマニュアルを検索して、回答案を提示できないか。」

<strong>現状:</strong>
- マニュアル: 500ページ（PDF形式）
- オペレーター: 20名
- 1日の問い合わせ件数: 200件
- 1件あたりの平均対応時間: 10分（うちマニュアル検索に5分）`,
            sampleAnswer: `
<div class="sample-answer">
    <h4>PoC設計書</h4>
    
    <h5>1. 目的</h5>
    <p>RAGを使って、コールセンターのマニュアル検索時間を50%削減できるか検証する</p>
    
    <h5>2. 成功基準</h5>
    <pre><code>【精度】
- 回答案の正解率: 80%以上
- オペレーター満足度: 5段階評価で平均4.0以上
- 「分からない」と回答する割合: 10%以下

【速度】
- 回答案生成時間: 3秒以内
- 同時ユーザー数: 10人まで対応可能

【コスト】
- 1回答あたりのコスト: 10円以下
- PoC期間中の総コスト: 200万円以下

【ビジネス効果】
- マニュアル検索時間: 5分→2.5分（50%削減）
- 1件あたりの対応時間: 10分→7.5分（25%削減）</code></pre>
    
    <h5>3. スコープ</h5>
    <pre><code>【やること】
- 対象マニュアル: 製品Aのマニュアル100ページ（最も問い合わせが多い製品）
- 対象ユーザー: オペレーター5名
- 機能: 質問応答、関連ページの表示
- 期間: 2ヶ月（準備2週間、開発4週間、検証2週間）

【やらないこと】
- 製品B、Cのマニュアルは対象外
- 全オペレーターへの展開は本PoCの範囲外
- 既存システムとの連携は本PoCの範囲外
- 多言語対応は本PoCの範囲外</code></pre>
    
    <h5>4. リスクと対策</h5>
    <pre><code>【リスク1】マニュアルのPDF品質が低い（スキャン画像など）
→ 対策: 事前にPDFの品質を確認。必要ならテキスト化

【リスク2】オペレーターが使ってくれない
→ 対策: 事前に使い方を説明。検索時間が短縮されることを強調

【リスク3】精度が目標に達しない
→ 対策: 複数のAIモデルを試す。人間確認フローを用意

【リスク4】コストが予算を超える
→ 対策: 事前にコスト試算。上限を設定</code></pre>
    
    <h5>5. 評価方法</h5>
    <pre><code>【定量評価】
- システムログから検索時間、利用回数を自動集計
- コストをAPI使用量から自動計算

【定性評価】
- オペレーター5名にアンケート（使いやすさ、満足度）

【人間評価】
- 100件の質問に対する回答案を専門家が評価
- 正解率を計算</code></pre>
</div>
            `
        },
        nextSteps: [
            'Day 17でデータ品質評価を学び、PoCに必要なデータを準備する',
            'Day 18でシステム連携設計を学び、既存システムとの統合を考える',
            '実際の案件でPoC設計書を作成してみる'
        ]
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
