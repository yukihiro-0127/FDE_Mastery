// Glossary Data - FDE/営業向け技術用語集

const glossaryTerms = [
    {
        term: 'API',
        reading: 'エーピーアイ',
        category: 'api',
        definition: 'Application Programming Interfaceの略。システム間でデータをやり取りするための仕組み。',
        explanation: `
            <p>APIは、異なるシステムやアプリケーションが互いに通信するための「窓口」です。</p>
            <p><strong>例え:</strong> レストランのメニューのようなもの。メニュー（API）を見て注文（リクエスト）すると、料理（データ）が提供される。</p>
        `,
        customerExplanation: '御社のシステムと他のシステムを連携させる際の「橋渡し役」です。例えば、御社の在庫システムとECサイトをAPIで連携させることで、リアルタイムに在庫情報を同期できます。',
        relatedTerms: ['REST API', 'JSON', 'エンドポイント'],
        ibmProduct: 'IBM API Connect'
    },
    {
        term: 'RAG',
        reading: 'ラグ',
        category: 'ai',
        definition: 'Retrieval-Augmented Generationの略。外部知識を参照してLLMの回答精度を上げる技術。',
        explanation: `
            <p>RAGは、AIが回答する前に、関連する文書を検索して参照する仕組みです。</p>
            <p><strong>例え:</strong> 試験で教科書を見ながら回答するようなもの。記憶だけに頼らず、正確な情報源を参照できる。</p>
            <p><strong>メリット:</strong></p>
            <ul>
                <li>最新情報を反映できる（再学習不要）</li>
                <li>回答の根拠を示せる</li>
                <li>ハルシネーション（嘘の回答）を減らせる</li>
            </ul>
        `,
        customerExplanation: '御社の社内文書やマニュアルをAIに参照させることで、正確な回答を生成できます。例えば、コールセンターのオペレーターが過去の対応履歴を瞬時に検索して、適切な回答を提示できるようになります。',
        relatedTerms: ['LLM', 'ベクトルデータベース', 'Fine-tuning'],
        ibmProduct: 'watsonx.ai'
    },
    {
        term: 'LLM',
        reading: 'エルエルエム',
        category: 'ai',
        definition: 'Large Language Modelの略。大量のテキストデータで学習した大規模言語モデル。',
        explanation: `
            <p>LLMは、人間のように文章を理解し、生成できるAIモデルです。</p>
            <p><strong>代表例:</strong> GPT-4、Claude、IBM Granite</p>
            <p><strong>できること:</strong></p>
            <ul>
                <li>質問応答</li>
                <li>文章生成</li>
                <li>要約</li>
                <li>翻訳</li>
                <li>コード生成</li>
            </ul>
        `,
        customerExplanation: 'ChatGPTのような対話型AIの基盤技術です。御社の業務に合わせてカスタマイズすることで、顧客対応の自動化や社内問い合わせの効率化が可能になります。',
        relatedTerms: ['RAG', 'プロンプト', 'トークン'],
        ibmProduct: 'IBM Granite'
    },
    {
        term: 'ベクトルデータベース',
        reading: 'べくたーでーたべーす',
        category: 'data',
        definition: '意味的に類似した情報を高速に検索できるデータベース。',
        explanation: `
            <p>通常のデータベースは「完全一致」で検索しますが、ベクトルデータベースは「意味の近さ」で検索します。</p>
            <p><strong>例:</strong></p>
            <ul>
                <li>通常のDB: 「リンゴ」で検索 → 「リンゴ」のみヒット</li>
                <li>ベクトルDB: 「リンゴ」で検索 → 「リンゴ」「果物」「アップル」などもヒット</li>
            </ul>
        `,
        customerExplanation: '御社の膨大な文書から、キーワードではなく「意味」で検索できるようになります。例えば、「コスト削減」で検索すると、「経費削減」「費用最適化」なども自動的に見つかります。',
        relatedTerms: ['RAG', 'エンベディング', '類似度検索'],
        ibmProduct: 'watsonx.data'
    },
    {
        term: 'プロンプト',
        reading: 'ぷろんぷと',
        category: 'ai',
        definition: 'AIへの指示文。プロンプトの質が回答の質を決める。',
        explanation: `
            <p>プロンプトは、AIに「何をしてほしいか」を伝える指示文です。</p>
            <p><strong>良いプロンプトの条件:</strong></p>
            <ul>
                <li>具体的である</li>
                <li>文脈を含む</li>
                <li>期待する出力形式を指定</li>
                <li>例を示す（Few-shot）</li>
            </ul>
            <p><strong>悪い例:</strong> 「要約して」</p>
            <p><strong>良い例:</strong> 「以下の会議議事録を、決定事項・TODO・次回議題の3つに分けて、箇条書きで要約してください」</p>
        `,
        customerExplanation: 'AIに適切な指示を出すことで、業務に即した回答を得られます。プロンプトの設計は、AI活用の成否を分ける重要なポイントです。',
        relatedTerms: ['LLM', 'Few-shot学習', 'Chain-of-Thought'],
        ibmProduct: 'watsonx.ai Prompt Lab'
    },
    {
        term: 'Fine-tuning',
        reading: 'ふぁいんちゅーにんぐ',
        category: 'ai',
        definition: '既存のAIモデルを、特定の用途に合わせて再学習させること。',
        explanation: `
            <p>Fine-tuningは、汎用的なAIモデルを、自社のデータで「追加学習」させる手法です。</p>
            <p><strong>RAGとの違い:</strong></p>
            <ul>
                <li><strong>Fine-tuning:</strong> モデル自体を変更（学習データが固定）</li>
                <li><strong>RAG:</strong> モデルは変更せず、参照データを動的に変更</li>
            </ul>
            <p><strong>使い分け:</strong></p>
            <ul>
                <li>データが頻繁に更新される → RAG</li>
                <li>特定の文体や専門用語を学習させたい → Fine-tuning</li>
            </ul>
        `,
        customerExplanation: '御社独自の専門用語や業務フローをAIに学習させることで、より精度の高い回答が得られます。ただし、データ更新のたびに再学習が必要なため、コストと更新頻度を考慮して選択します。',
        relatedTerms: ['RAG', 'LLM', '転移学習'],
        ibmProduct: 'watsonx.ai'
    },
    {
        term: 'トークン',
        reading: 'とーくん',
        category: 'ai',
        definition: 'AIが処理する文章の最小単位。課金の基準にもなる。',
        explanation: `
            <p>トークンは、AIが文章を処理する際の「単位」です。</p>
            <p><strong>目安:</strong></p>
            <ul>
                <li>日本語: 1文字 ≒ 2〜3トークン</li>
                <li>英語: 1単語 ≒ 1トークン</li>
            </ul>
            <p><strong>例:</strong> 「こんにちは」→ 約10トークン</p>
            <p><strong>重要:</strong> 多くのAI APIは、トークン数で課金されます。</p>
        `,
        customerExplanation: 'AIの利用料金は、処理したトークン数で決まります。例えば、1000文字の文書を処理すると、約2000〜3000トークン消費します。コスト試算の際は、想定される文書量からトークン数を見積もる必要があります。',
        relatedTerms: ['LLM', 'コンテキストウィンドウ'],
        ibmProduct: 'watsonx.ai'
    },
    {
        term: 'REST API',
        reading: 'れすとえーぴーあい',
        category: 'api',
        definition: 'HTTPプロトコルを使った、最も一般的なAPI設計方式。',
        explanation: `
            <p>REST APIは、Webの標準技術（HTTP）を使ったAPI設計の方式です。</p>
            <p><strong>主なHTTPメソッド:</strong></p>
            <ul>
                <li><strong>GET:</strong> データを取得（読み取り専用）</li>
                <li><strong>POST:</strong> データを作成</li>
                <li><strong>PUT:</strong> データを更新</li>
                <li><strong>DELETE:</strong> データを削除</li>
            </ul>
            <p><strong>例:</strong> GET /api/users/123 → ユーザーID 123の情報を取得</p>
        `,
        customerExplanation: '御社のシステムと外部サービスを連携させる際、REST APIが最も一般的に使われます。標準的な技術なので、多くのシステムと互換性があります。',
        relatedTerms: ['API', 'JSON', 'エンドポイント'],
        ibmProduct: 'IBM API Connect'
    },
    {
        term: 'JSON',
        reading: 'じぇいそん',
        category: 'api',
        definition: 'データを構造化して表現する形式。APIで最も使われる。',
        explanation: `
            <p>JSONは、データを「キー: 値」の形式で表現する方法です。</p>
            <p><strong>例:</strong></p>
            <pre><code>{
  "name": "山田太郎",
  "age": 30,
  "email": "yamada@example.com"
}</code></pre>
            <p><strong>特徴:</strong></p>
            <ul>
                <li>人間が読みやすい</li>
                <li>プログラムで扱いやすい</li>
                <li>多くのプログラミング言語で対応</li>
            </ul>
        `,
        customerExplanation: 'システム間でデータをやり取りする際の「共通言語」です。御社のシステムと他社のシステムを連携させる際、JSONでデータを送受信します。',
        relatedTerms: ['API', 'REST API', 'XML'],
        ibmProduct: null
    },
    {
        term: 'Kubernetes',
        reading: 'くーばねてぃす',
        category: 'cloud',
        definition: 'コンテナを管理・運用するためのプラットフォーム。',
        explanation: `
            <p>Kubernetesは、複数のコンテナを自動的に管理するシステムです。</p>
            <p><strong>できること:</strong></p>
            <ul>
                <li>自動スケーリング（負荷に応じてサーバー増減）</li>
                <li>自動復旧（障害時に自動再起動）</li>
                <li>ロードバランシング（負荷分散）</li>
            </ul>
        `,
        customerExplanation: 'アプリケーションを安定的に運用するための基盤です。アクセスが急増しても自動的にサーバーを増やし、障害が発生しても自動的に復旧します。',
        relatedTerms: ['コンテナ', 'Docker', 'OpenShift'],
        ibmProduct: 'Red Hat OpenShift'
    },
    {
        term: 'watsonx',
        reading: 'わとそんえっくす',
        category: 'ibm',
        definition: 'IBMのAI・データプラットフォーム。',
        explanation: `
            <p>watsonxは、IBMが提供するエンタープライズ向けAIプラットフォームです。</p>
            <p><strong>3つの柱:</strong></p>
            <ul>
                <li><strong>watsonx.ai:</strong> AIモデルの開発・運用</li>
                <li><strong>watsonx.data:</strong> データ管理</li>
                <li><strong>watsonx.governance:</strong> AIガバナンス</li>
            </ul>
        `,
        customerExplanation: '企業向けに最適化されたAIプラットフォームです。セキュリティ、ガバナンス、コンプライアンスを重視した設計で、安心してAIを業務に活用できます。',
        relatedTerms: ['LLM', 'IBM Granite', 'RAG'],
        ibmProduct: 'watsonx'
    },
    {
        term: 'PoC',
        reading: 'ぴーおーしー',
        category: 'ai',
        definition: 'Proof of Conceptの略。技術的実現可能性を検証する実験。',
        explanation: `
            <p>PoCは、本格導入前に「本当に実現できるか」を小規模で検証することです。</p>
            <p><strong>目的:</strong></p>
            <ul>
                <li>技術的に実現可能か確認</li>
                <li>期待する効果が得られるか検証</li>
                <li>コストを見積もる</li>
            </ul>
            <p><strong>重要:</strong> PoCの成功基準を事前に明確にすることが重要。</p>
        `,
        customerExplanation: '大規模投資の前に、小規模で試してみることです。例えば、AIチャットボットを全社展開する前に、1部署で3ヶ月試験運用して効果を測定します。',
        relatedTerms: ['MVP', 'パイロット'],
        ibmProduct: null
    },
    {
        term: 'ハルシネーション',
        reading: 'はるしねーしょん',
        category: 'ai',
        definition: 'AIが事実ではない情報を、もっともらしく生成してしまう現象。',
        explanation: `
            <p>ハルシネーションは、AIが「嘘」をついてしまう現象です。</p>
            <p><strong>例:</strong></p>
            <ul>
                <li>存在しない論文を引用する</li>
                <li>架空の統計データを示す</li>
                <li>間違った日付や数値を答える</li>
            </ul>
            <p><strong>対策:</strong></p>
            <ul>
                <li>RAGで正確な情報源を参照させる</li>
                <li>人間が最終確認する</li>
                <li>回答に根拠を示させる</li>
            </ul>
        `,
        customerExplanation: 'AIが誤った情報を生成するリスクです。特に重要な業務では、AIの回答を鵜呑みにせず、人間が確認する仕組みが必要です。RAGを使うことで、このリスクを大幅に減らせます。',
        relatedTerms: ['RAG', 'LLM', 'プロンプト'],
        ibmProduct: null
    },
    {
        term: 'エンドポイント',
        reading: 'えんどぽいんと',
        category: 'api',
        definition: 'APIにアクセスするためのURL。',
        explanation: `
            <p>エンドポイントは、APIの「住所」です。</p>
            <p><strong>例:</strong></p>
            <ul>
                <li>https://api.example.com/users → ユーザー一覧</li>
                <li>https://api.example.com/users/123 → ユーザーID 123</li>
            </ul>
        `,
        customerExplanation: 'システム連携の際に、どこにアクセスすればデータを取得できるかを示すURLです。',
        relatedTerms: ['API', 'REST API'],
        ibmProduct: null
    },
    {
        term: 'レート制限',
        reading: 'れーとせいげん',
        category: 'api',
        definition: 'APIの利用回数を制限する仕組み。',
        explanation: `
            <p>レート制限は、APIの過度な利用を防ぐための制限です。</p>
            <p><strong>例:</strong> 1分間に100リクエストまで</p>
            <p><strong>超過すると:</strong> 429エラー（Too Many Requests）が返される</p>
        `,
        customerExplanation: 'APIの利用回数には上限があります。大量のデータを処理する場合は、レート制限を考慮した設計が必要です。',
        relatedTerms: ['API', 'スロットリング'],
        ibmProduct: null
    }
];

// Export for use in other files
window.glossaryTerms = glossaryTerms;

// Made with Bob
