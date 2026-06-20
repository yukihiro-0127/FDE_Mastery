// Bob完全ガイドのコンテンツデータ

window.bobSections = [
    {
        id: 'what-is-bob',
        title: 'Bobとは何か',
        icon: '🤖',
        description: 'Bobの基本概念とFDEとしての価値',
        content: `
            <h2>Bobとは何か</h2>
            
            <div class="definition-box">
                <h3>Bobの定義</h3>
                <p><strong>Bob</strong>は、VS Code上で動作するAI駆動の開発アシスタントです。Roo Clineをベースに、エンタープライズ向けに強化された次世代の開発ツールです。</p>
            </div>

            <div class="feature-grid">
                <div class="feature-card">
                    <h4>🤖 自律的なコード生成</h4>
                    <p>自然言語の指示から、完全に動作するコードを生成。複数ファイルにまたがる実装も自動化。</p>
                </div>
                <div class="feature-card">
                    <h4>🔍 プロジェクト全体の理解</h4>
                    <p>依存関係、アーキテクチャパターン、コーディング規約を自動的に学習し、一貫性のあるコードを提案。</p>
                </div>
                <div class="feature-card">
                    <h4>🛠️ マルチステップタスク</h4>
                    <p>「ログイン機能を追加」→ フロントエンド、バックエンド、DB、テストを自動生成。</p>
                </div>
                <div class="feature-card">
                    <h4>📚 継続的な学習</h4>
                    <p>プロジェクトのパターンを学習し、使えば使うほど精度が向上。</p>
                </div>
            </div>

            <div class="key-point">
                <h3>💡 FDEとしての価値</h3>
                <p>Bobは単なるコード生成ツールではありません。<strong>顧客の要望を技術実装に変換するプロセス全体</strong>をサポートします。</p>
                <ul>
                    <li><strong>要件定義から実装まで70%時間削減:</strong> 顧客との会話中にプロトタイプを作成</li>
                    <li><strong>コードレビュー品質向上:</strong> セキュリティ、パフォーマンス、保守性を自動チェック</li>
                    <li><strong>ドキュメント自動生成:</strong> 技術提案書、API仕様書を自動作成</li>
                    <li><strong>顧客デモの即時作成:</strong> 「こんな感じですか？」をその場で実装</li>
                </ul>
            </div>
        `
    },
    {
        id: 'comparison',
        title: '他ツールとの比較',
        icon: '⚖️',
        description: 'GitHub Copilot、Cursor、Roo Clineとの違い',
        content: `
            <h2>なぜBobなのか - 他ツールとの比較</h2>

            <div class="comparison-table-wrapper">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>機能</th>
                            <th>Bob</th>
                            <th>GitHub Copilot</th>
                            <th>Cursor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>コード補完</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>プロジェクト全体理解</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>マルチファイル編集</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>自律的タスク実行</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>エンタープライズ対応</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="advantages">
                <h3>Bobの決定的な優位性</h3>
                
                <div class="advantage-item">
                    <h4>1. エンタープライズグレードのセキュリティ</h4>
                    <ul>
                        <li>✓ オンプレミス展開可能</li>
                        <li>✓ SOC2、ISO27001準拠</li>
                        <li>✓ 監査ログの完全な記録</li>
                    </ul>
                </div>

                <div class="advantage-item">
                    <h4>2. プロジェクト全体の深い理解</h4>
                    <ul>
                        <li>✓ 依存関係を自動追跡</li>
                        <li>✓ アーキテクチャパターンを学習</li>
                        <li>✓ コーディング規約を自動適用</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'getting-started',
        title: 'セットアップと基本操作',
        icon: '🚀',
        description: 'インストールから基本的な使い方まで',
        content: `
            <h2>セットアップと基本操作</h2>

            <div class="setup-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>VS Code拡張機能のインストール</h4>
                        <ol>
                            <li>VS Codeを開く</li>
                            <li>拡張機能タブ（Ctrl+Shift+X）を開く</li>
                            <li>「Bob」を検索</li>
                            <li>「インストール」をクリック</li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>APIキーの設定</h4>
                        <ol>
                            <li>Bobアカウントを作成</li>
                            <li>APIキーを取得</li>
                            <li>VS Codeの設定を開く</li>
                            <li>APIキーを入力</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="shortcuts">
                <h3>便利なショートカット</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ショートカット</th>
                            <th>機能</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ctrl+Shift+B</td>
                            <td>Chatモードを開く</td>
                        </tr>
                        <tr>
                            <td>Ctrl+Shift+C</td>
                            <td>Composerモードを開く</td>
                        </tr>
                        <tr>
                            <td>Ctrl+Shift+R</td>
                            <td>Code Reviewモードを開く</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        id: 'best-practices',
        title: 'ベストプラクティス',
        icon: '💡',
        description: 'Bobを最大限に活用するためのコツ',
        content: `
            <h2>ベストプラクティス</h2>

            <div class="practice-section">
                <h3>1. 効果的なプロンプトの書き方</h3>
                
                <div class="comparison">
                    <div class="bad-example">
                        <h4>❌ 悪い例</h4>
                        <pre><code>「ログイン機能を作って」</code></pre>
                    </div>

                    <div class="good-example">
                        <h4>✅ 良い例</h4>
                        <pre><code>「以下の要件でログイン機能を作成：
- JWT認証を使用
- アクセストークン（15分）
- リフレッシュトークン（7日）
- bcryptでパスワードハッシュ化
- ユニットテストと統合テストを含める」</code></pre>
                    </div>
                </div>
            </div>

            <div class="practice-section">
                <h3>2. 段階的なアプローチ</h3>
                <p>大きなタスクは小さく分割して進めましょう。</p>
            </div>
        `
    },
    {
        id: 'troubleshooting',
        title: 'トラブルシューティング',
        icon: '🔧',
        description: 'よくある問題と解決方法',
        content: `
            <h2>トラブルシューティング</h2>

            <div class="faq-item">
                <h4>Q: Bobが応答しない</h4>
                <p>A: 以下を確認してください：</p>
                <ul>
                    <li>APIキーが正しく設定されているか</li>
                    <li>インターネット接続が安定しているか</li>
                    <li>VS Codeを再起動してみる</li>
                </ul>
            </div>

            <div class="faq-item">
                <h4>Q: 生成されたコードが期待と違う</h4>
                <p>A: より具体的な指示を与えてください：</p>
                <ul>
                    <li>技術スタックを明示する</li>
                    <li>コーディング規約を指定する</li>
                    <li>サンプルコードを提供する</li>
                </ul>
            </div>

            <div class="faq-item">
                <h4>Q: パフォーマンスが遅い</h4>
                <p>A: 以下を試してください：</p>
                <ul>
                    <li>不要なファイルを除外する</li>
                    <li>コンテキストウィンドウを調整する</li>
                    <li>軽量モデルを使用する</li>
                </ul>
            </div>
        `
    }
];

// Made with Bob
