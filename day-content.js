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
