// Code Reading Gym - Exercise Data
// FDE視点でのコード読解演習

const gymExercises = {
    json: [
        {
            id: 'json-1',
            difficulty: 'beginner',
            title: 'watsonx APIレスポンスの読解',
            code: `{
  "model_id": "ibm/granite-13b-chat-v2",
  "created_at": "2024-01-15T10:30:00Z",
  "results": [
    {
      "generated_text": "こんにちは。ご質問にお答えします。",
      "generated_token_count": 15,
      "input_token_count": 8,
      "stop_reason": "eos_token"
    }
  ],
  "usage": {
    "prompt_tokens": 8,
    "completion_tokens": 15,
    "total_tokens": 23
  }
}`,
            question: 'このAPIレスポンスから、課金対象となるトークン数を答えよ。',
            answer: '23',
            hint: 'usage.total_tokensを見てください。これが課金対象です。',
            explanation: `
                <p><strong>正解: 23トークン</strong></p>
                <p>watsonx APIでは、<code>usage.total_tokens</code>が課金対象となります。</p>
                <p>これは、<code>prompt_tokens</code>（入力）と<code>completion_tokens</code>（出力）の合計です。</p>
                <p><strong>FDE視点:</strong> 顧客にコスト試算を説明する際、「1リクエストあたり約23トークン消費」と伝えられます。</p>
            `
        },
        {
            id: 'json-2',
            difficulty: 'intermediate',
            title: 'エラーレスポンスの解析',
            code: `{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Please try again in 60 seconds.",
    "status": 429,
    "details": {
      "limit": 100,
      "remaining": 0,
      "reset_at": "2024-01-15T10:31:00Z"
    }
  }
}`,
            question: 'このエラーの原因と、顧客への説明を簡潔に述べよ。',
            answer: 'レート制限超過。1分間に100リクエストまでの制限があり、現在0件残っている。60秒後にリセットされる。',
            hint: 'rate_limit_exceededとdetailsの情報を組み合わせて説明してください。',
            explanation: `
                <p><strong>エラーの原因:</strong> APIのレート制限（1分間に100リクエスト）を超過</p>
                <p><strong>顧客への説明例:</strong></p>
                <p>「現在、APIの利用上限（1分間に100リクエスト）に達しています。60秒後に自動的にリセットされますので、少々お待ちください。頻繁に発生する場合は、リクエストの間隔を調整するか、上位プランへのアップグレードをご検討ください。」</p>
                <p><strong>FDE視点:</strong> レート制限は、システム設計時に考慮すべき重要な制約です。</p>
            `
        },
        {
            id: 'json-3',
            difficulty: 'advanced',
            title: 'RAG検索結果の評価',
            code: `{
  "query": "製品Aの保証期間は？",
  "results": [
    {
      "document_id": "doc_123",
      "content": "製品Aの保証期間は購入日から1年間です。",
      "score": 0.92,
      "metadata": {
        "source": "product_manual_v2.pdf",
        "page": 15,
        "last_updated": "2024-01-10"
      }
    },
    {
      "document_id": "doc_456",
      "content": "製品Aは2年保証に延長可能です（有料）。",
      "score": 0.78,
      "metadata": {
        "source": "warranty_options.pdf",
        "page": 3,
        "last_updated": "2024-01-12"
      }
    }
  ]
}`,
            question: 'この検索結果の品質を評価し、改善点を2つ挙げよ。',
            answer: '1. スコア0.92の結果が最も関連性が高い。2. 改善点: 両方の情報を統合して回答すべき、情報の鮮度（last_updated）を考慮すべき。',
            hint: 'scoreの意味と、2つの結果の関係性を考えてください。',
            explanation: `
                <p><strong>評価:</strong></p>
                <ul>
                    <li>スコア0.92の結果が質問に直接回答している（良い）</li>
                    <li>スコア0.78の結果は補足情報（延長保証）を提供（良い）</li>
                </ul>
                <p><strong>改善点:</strong></p>
                <ol>
                    <li><strong>情報の統合:</strong> 「基本1年、有料で2年に延長可能」と統合して回答すべき</li>
                    <li><strong>鮮度の考慮:</strong> last_updatedが新しい情報を優先すべき</li>
                    <li><strong>出典の明示:</strong> 顧客に「製品マニュアルp.15より」と伝えるべき</li>
                </ol>
                <p><strong>FDE視点:</strong> RAGの精度評価では、スコアだけでなく、情報の統合性や鮮度も重要です。</p>
            `
        }
    ],
    
    sql: [
        {
            id: 'sql-1',
            difficulty: 'beginner',
            title: '顧客データの抽出',
            code: `SELECT 
    customer_id,
    name,
    email,
    created_at
FROM customers
WHERE status = 'active'
ORDER BY created_at DESC
LIMIT 10;`,
            question: 'このクエリは何をしているか、FDE視点で説明せよ。',
            answer: 'アクティブな顧客の情報を、新しい順に10件取得している。顧客ID、名前、メール、登録日を取得。',
            hint: 'WHERE、ORDER BY、LIMITの意味を考えてください。',
            explanation: `
                <p><strong>クエリの意味:</strong></p>
                <ul>
                    <li><code>SELECT</code>: 取得する列を指定</li>
                    <li><code>FROM customers</code>: customersテーブルから</li>
                    <li><code>WHERE status = 'active'</code>: アクティブな顧客のみ</li>
                    <li><code>ORDER BY created_at DESC</code>: 登録日の新しい順</li>
                    <li><code>LIMIT 10</code>: 最大10件</li>
                </ul>
                <p><strong>FDE視点:</strong> 「最近登録したアクティブ顧客のリスト」を取得するクエリ。顧客分析やマーケティング施策の検討に使える。</p>
            `
        },
        {
            id: 'sql-2',
            difficulty: 'intermediate',
            title: '売上集計クエリ',
            code: `SELECT 
    p.category,
    COUNT(o.order_id) as order_count,
    SUM(o.amount) as total_sales,
    AVG(o.amount) as avg_order_value
FROM orders o
JOIN products p ON o.product_id = p.product_id
WHERE o.order_date >= '2024-01-01'
GROUP BY p.category
HAVING total_sales > 100000
ORDER BY total_sales DESC;`,
            question: 'このクエリの結果から、どのような業務判断ができるか？',
            answer: 'カテゴリー別の売上が10万円以上のものを、売上順に表示。売れ筋カテゴリーの特定や、在庫戦略の判断に使える。',
            hint: 'GROUP BY、HAVING、集計関数の意味を考えてください。',
            explanation: `
                <p><strong>クエリの意味:</strong></p>
                <ul>
                    <li>2024年以降の注文データを集計</li>
                    <li>カテゴリー別に、注文数・売上合計・平均注文額を計算</li>
                    <li>売上10万円以上のカテゴリーのみ表示</li>
                    <li>売上の多い順に並べる</li>
                </ul>
                <p><strong>業務判断:</strong></p>
                <ol>
                    <li><strong>在庫戦略:</strong> 売上の多いカテゴリーの在庫を増やす</li>
                    <li><strong>マーケティング:</strong> 売上の少ないカテゴリーの販促を強化</li>
                    <li><strong>商品開発:</strong> 人気カテゴリーの新商品を企画</li>
                </ol>
                <p><strong>FDE視点:</strong> データから業務判断につながる洞察を引き出すことが重要。</p>
            `
        }
    ],
    
    python: [
        {
            id: 'python-1',
            difficulty: 'beginner',
            title: 'データ処理スクリプト',
            code: `import pandas as pd

df = pd.read_csv('customer_data.csv')
df_filtered = df[df['age'] >= 20]
df_sorted = df_filtered.sort_values('purchase_amount', ascending=False)
top_10 = df_sorted.head(10)
print(top_10)`,
            question: 'このスクリプトは何をしているか？',
            answer: '顧客データから20歳以上を抽出し、購入金額の多い順に並べて上位10件を表示。',
            hint: 'フィルタリング、ソート、上位抽出の3ステップです。',
            explanation: `
                <p><strong>処理の流れ:</strong></p>
                <ol>
                    <li>CSVファイルを読み込み</li>
                    <li>20歳以上の顧客のみ抽出</li>
                    <li>購入金額の多い順に並べ替え</li>
                    <li>上位10件を表示</li>
                </ol>
                <p><strong>FDE視点:</strong> 「高額購入者の分析」に使えるスクリプト。VIP顧客の特定やターゲティング施策に活用できる。</p>
            `
        }
    ],
    
    api: [
        {
            id: 'api-1',
            difficulty: 'beginner',
            title: 'REST APIエンドポイント',
            code: `GET /api/v1/users/12345
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json`,
            question: 'このAPIリクエストは何をしているか？',
            answer: 'ユーザーID 12345の情報を取得。認証トークンを使って認証している。',
            hint: 'GETメソッドとURLパスを見てください。',
            explanation: `
                <p><strong>リクエストの意味:</strong></p>
                <ul>
                    <li><code>GET</code>: データを取得（変更しない）</li>
                    <li><code>/api/v1/users/12345</code>: ユーザーID 12345の情報</li>
                    <li><code>Authorization: Bearer ...</code>: 認証トークン</li>
                </ul>
                <p><strong>FDE視点:</strong> RESTful APIの基本パターン。GETは読み取り専用なので、何度実行しても安全。</p>
            `
        }
    ],
    
    yaml: [
        {
            id: 'yaml-1',
            difficulty: 'beginner',
            title: 'Kubernetes設定ファイル',
            code: `apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
  type: LoadBalancer`,
            question: 'この設定ファイルは何を定義しているか？',
            answer: 'my-appという名前のサービスを定義。ポート80で受けて8080に転送。ロードバランサーで公開。',
            hint: 'kind、ports、typeを見てください。',
            explanation: `
                <p><strong>設定の意味:</strong></p>
                <ul>
                    <li><code>kind: Service</code>: Kubernetesのサービスを定義</li>
                    <li><code>port: 80</code>: 外部からは80番ポートでアクセス</li>
                    <li><code>targetPort: 8080</code>: 内部では8080番ポートに転送</li>
                    <li><code>type: LoadBalancer</code>: ロードバランサーで公開</li>
                </ul>
                <p><strong>FDE視点:</strong> アプリケーションを外部公開する設定。インフラ担当者との会話で必要な知識。</p>
            `
        }
    ],
    
    logs: [
        {
            id: 'logs-1',
            difficulty: 'beginner',
            title: 'アプリケーションログの解析',
            code: `2024-01-15 10:30:15 INFO  [main] Application started successfully
2024-01-15 10:30:20 INFO  [http-nio-8080-exec-1] User login: user_id=12345
2024-01-15 10:30:25 WARN  [http-nio-8080-exec-2] Slow query detected: 3.5s
2024-01-15 10:30:30 ERROR [http-nio-8080-exec-3] Database connection failed
2024-01-15 10:30:35 ERROR [http-nio-8080-exec-3] Retry attempt 1/3 failed
2024-01-15 10:30:40 INFO  [http-nio-8080-exec-3] Database connection restored`,
            question: 'このログから、どのような問題が発生し、どう解決されたか？',
            answer: 'データベース接続エラーが発生したが、リトライにより復旧した。また、スロークエリ（3.5秒）も検出されている。',
            hint: 'ERRORとWARNのログに注目してください。',
            explanation: `
                <p><strong>問題:</strong></p>
                <ol>
                    <li><strong>スロークエリ:</strong> 3.5秒かかるクエリが検出（WARN）</li>
                    <li><strong>DB接続エラー:</strong> データベース接続が失敗（ERROR）</li>
                </ol>
                <p><strong>解決:</strong></p>
                <ul>
                    <li>リトライ機能により、自動的に復旧</li>
                    <li>10秒後に接続が回復</li>
                </ul>
                <p><strong>FDE視点:</strong></p>
                <ul>
                    <li>一時的なエラーは自動復旧したが、スロークエリは要調査</li>
                    <li>顧客には「一時的な接続エラーが発生しましたが、自動復旧しました」と報告</li>
                    <li>スロークエリの最適化を提案すべき</li>
                </ul>
            `
        },
        {
            id: 'logs-2',
            difficulty: 'intermediate',
            title: 'エラーログの根本原因分析',
            code: `2024-01-15 10:30:00 INFO  API request received: POST /api/orders
2024-01-15 10:30:01 DEBUG Validating order data
2024-01-15 10:30:02 ERROR Validation failed: Invalid product_id
2024-01-15 10:30:02 ERROR Stack trace: NullPointerException at line 145
2024-01-15 10:30:02 WARN  Returning 400 Bad Request to client`,
            question: 'このエラーの根本原因と、顧客への説明を述べよ。',
            answer: '根本原因: 無効なproduct_idが送信された。顧客への説明: 注文データの商品IDが正しくありません。正しいIDを確認してください。',
            hint: 'Validation failedとInvalid product_idに注目してください。',
            explanation: `
                <p><strong>根本原因:</strong></p>
                <p>注文APIに送信されたデータに、無効な<code>product_id</code>が含まれていた。</p>
                <p><strong>顧客への説明例:</strong></p>
                <p>「注文データの商品ID（product_id）が正しくありません。存在する商品IDを指定してください。商品IDは商品マスタから取得できます。」</p>
                <p><strong>FDE視点:</strong></p>
                <ul>
                    <li>エラーログから、入力データの問題と特定</li>
                    <li>400エラーは顧客側の問題なので、データ修正を依頼</li>
                    <li>頻発する場合は、入力チェックの強化を提案</li>
                </ul>
            `
        }
    ]
};

// Export for use in other files
window.gymExercises = gymExercises;

// Made with Bob
