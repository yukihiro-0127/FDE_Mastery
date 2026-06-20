// IBM Bob Mastery Hub - FDE/営業向け完全ガイド
// 要件定義書に基づいた包括的なBobコンテンツ

window.bobSectionsExtensions = [
    {
        id: 'extensions',
        title: 'おすすめVS Code拡張機能',
        icon: '🔌',
        description: '開発効率を劇的に向上させる20の必須拡張機能',
        content: `
            <h2>おすすめVS Code拡張機能 20選</h2>
            <p>開発効率を劇的に向上させる、厳選された20の必須拡張機能を様々な角度から紹介します。</p>

            <div class="extensions-overview">
                <h3>📊 カテゴリ別拡張機能マップ</h3>
                <div class="category-summary">
                    <div class="category-item">🤖 AI・コード生成：5個</div>
                    <div class="category-item">🎨 UI・テーマ：3個</div>
                    <div class="category-item">⚡ 生産性向上：4個</div>
                    <div class="category-item">🔍 コード品質：4個</div>
                    <div class="category-item">🌐 Web開発：2個</div>
                    <div class="category-item">🔧 その他：2個</div>
                </div>
            </div>

            <div class="extensions-section">
                <h3>🤖 AI・コード生成系（5個）</h3>

                <div class="ext-card">
                    <h4>1. GitHub Copilot ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 10M+ | 💰 $10/月</p>
                    <p><strong>概要：</strong> OpenAI Codexを使用したAIペアプログラマー。コメントから自動的にコードを生成。</p>
                    <p><strong>主な機能：</strong> リアルタイムコード補完、関数全体の生成、複数の提案、テストコード生成</p>
                    <p><strong>こんな時に：</strong> 定型的なコードを書くのが面倒、テストコードを素早く作りたい</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「GitHub Copilot」を検索してインストール</li>
                            <li><strong>サインイン：</strong> GitHubアカウントでサインイン（学生は無料）</li>
                            <li><strong>コメントで指示：</strong> <code>// ユーザー認証機能を実装</code> と書くと自動でコード生成</li>
                            <li><strong>Tab/Enterで採用：</strong> 提案が表示されたらTabキーで採用</li>
                            <li><strong>複数提案を見る：</strong> <code>Ctrl+Enter</code> (Win) / <code>Cmd+Enter</code> (Mac) で複数の提案を表示</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> REST APIのエンドポイントを作成したい</p>
                        <pre><code>// Express.jsでユーザー一覧を取得するGET APIを作成
// ↓ Copilotが自動生成
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>日本語コメントOK：</strong> 日本語で指示しても理解してくれる</li>
                            <li><strong>関数名から推測：</strong> <code>function calculateTax(</code> と書くだけで税金計算ロジックを提案</li>
                            <li><strong>テストコード生成：</strong> <code>// test for calculateTax</code> でテストコードを自動生成</li>
                            <li><strong>リファクタリング：</strong> 既存コードを選択してCopilot Chatで「このコードをリファクタリングして」</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>2. Tabnine ⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 5M+ | 💰 無料版あり / Pro $12/月</p>
                    <p><strong>概要：</strong> プライバシー重視のAIコード補完。ローカルモデルとクラウドモデルを選択可能。</p>
                    <p><strong>差別化：</strong> コードを外部に送信しないローカルモード、自社コードベースで学習可能</p>
                    <p><strong>Copilotとの違い：</strong> プライバシー◎、カスタマイズ◎、補完精度○</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Tabnine」を検索してインストール</li>
                            <li><strong>モード選択：</strong> 初回起動時にローカルモード or クラウドモードを選択
                                <ul>
                                    <li><strong>ローカルモード：</strong> コードが外部に送信されない（企業向け）</li>
                                    <li><strong>クラウドモード：</strong> より高精度な補完（個人向け）</li>
                                </ul>
                            </li>
                            <li><strong>自動補完：</strong> コードを書き始めると自動的に提案が表示される</li>
                            <li><strong>Tabで採用：</strong> 提案をTabキーで採用</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> React Hooksを使ったコンポーネント作成</p>
                        <pre><code>// "useState"と入力し始めると...
const [count, setCount] = useState(0); // ← 自動補完

// "useEffect"と入力すると...
useEffect(() => {
  // 副作用の処理
  return () => {
    // クリーンアップ
  };
}, [dependencies]); // ← 依存配列まで提案</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>チーム学習：</strong> Pro版ではチームのコードベースから学習し、チーム固有のパターンを提案</li>
                            <li><strong>プライバシー重視：</strong> 金融・医療など機密性の高いプロジェクトではローカルモードを使用</li>
                            <li><strong>複数言語対応：</strong> 30以上のプログラミング言語に対応</li>
                            <li><strong>設定カスタマイズ：</strong> 提案の頻度や表示方法を細かく調整可能</li>
                        </ul>
                        
                        <h5>🆚 Copilotとの使い分け</h5>
                        <ul>
                            <li><strong>Tabnineを選ぶ場合：</strong> プライバシーが最優先、企業の機密コード、オフライン環境</li>
                            <li><strong>Copilotを選ぶ場合：</strong> 最新のAI技術を使いたい、複雑なロジックの生成、英語ドキュメントが豊富</li>
                            <li><strong>併用も可能：</strong> 両方インストールして、プロジェクトごとに使い分けることも可能</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>3. CodeGPT ⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 500K+ | 💰 無料（OpenAI APIキー必要）</p>
                    <p><strong>概要：</strong> VS Code内でChatGPTと対話。コード説明、リファクタリング、バグ修正を支援。</p>
                    <p><strong>実践例：</strong> レガシーコードを選択 → 右クリック → "Explain" → 詳細な説明が表示</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「CodeGPT」を検索してインストール</li>
                            <li><strong>APIキー設定：</strong> OpenAI APIキーを設定（<a href="https://platform.openai.com/api-keys" target="_blank">https://platform.openai.com/api-keys</a>で取得）</li>
                            <li><strong>コードを選択：</strong> 説明やリファクタリングしたいコードを選択</li>
                            <li><strong>右クリックメニュー：</strong> CodeGPTメニューから操作を選択</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ1：</strong> レガシーコードの理解</p>
                        <pre><code>// 複雑なコードを選択 → 右クリック → "CodeGPT: Explain"
function processData(arr) {
  return arr.reduce((acc, val) =>
    acc.concat(val.filter(x => x > 0)), []);
}
// ↓ 説明が表示される
「この関数は配列の配列を受け取り、正の数のみをフラット化して返します」</code></pre>
                        
                        <p><strong>シナリオ2：</strong> コードのリファクタリング</p>
                        <pre><code>// 改善したいコードを選択 → "CodeGPT: Refactor"
// より読みやすく、効率的なコードに変換してくれる</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>バグ修正：</strong> エラーが出ているコードを選択 → "Find Problems" でバグを特定</li>
                            <li><strong>ドキュメント生成：</strong> 関数を選択 → "Add Comments" でJSDoc形式のコメントを自動生成</li>
                            <li><strong>テスト生成：</strong> 関数を選択 → "Generate Tests" でユニットテストを自動生成</li>
                            <li><strong>コード変換：</strong> JavaScriptをTypeScriptに変換、など言語間の変換も可能</li>
                        </ul>
                        
                        <h5>💰 コスト管理</h5>
                        <p>OpenAI APIは従量課金制。月$5-10程度で十分使えます。使いすぎ防止のため、OpenAIダッシュボードで使用量上限を設定しましょう。</p>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>4. IntelliCode ⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 8M+ | 💰 完全無料（Microsoft公式）</p>
                    <p><strong>概要：</strong> GitHubの数千のOSSプロジェクトから学習したAI補完。</p>
                    <p><strong>特徴：</strong> Python、TypeScript、JavaScriptで特に効果的。Copilotと併用可能。</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「IntelliCode」を検索してインストール</li>
                            <li><strong>自動有効化：</strong> インストール後、自動的に有効化される</li>
                            <li><strong>⭐マークの提案：</strong> コード補完候補に⭐マークが付いた提案が表示される</li>
                            <li><strong>優先表示：</strong> ⭐付きの提案が最上位に表示され、採用しやすい</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> Pythonでpandasを使用</p>
                        <pre><code>import pandas as pd
df = pd.read_csv('data.csv')
df.  # ← ここで「.」を入力すると...
# ⭐ head()  ← よく使われるメソッドが⭐付きで最上位に表示
# ⭐ describe()
# ⭐ info()
# groupby()
# sort_values()</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>コンテキスト理解：</strong> 現在のコードの文脈を理解し、最適なメソッドを提案</li>
                            <li><strong>チーム学習：</strong> チームのコードベースから学習し、チーム固有のパターンを提案（Enterprise版）</li>
                            <li><strong>Copilotと併用：</strong> IntelliCodeは短い補完、Copilotは長いコード生成と使い分け</li>
                            <li><strong>完全無料：</strong> Microsoftが提供する完全無料のAI補完ツール</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>5. Codeium ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 1M+ | 💰 完全無料（個人・商用）</p>
                    <p><strong>概要：</strong> GitHub Copilotの無料代替として急成長中。</p>
                    <p><strong>なぜ選ぶべきか：</strong> Copilotと同等の精度で完全無料、企業でも無料、プライバシー重視</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Codeium」を検索してインストール</li>
                            <li><strong>アカウント作成：</strong> 無料アカウントを作成（メールアドレスのみ）</li>
                            <li><strong>自動補完：</strong> コードを書き始めると自動的に提案が表示される</li>
                            <li><strong>Tabで採用：</strong> 提案をTabキーで採用</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> React Componentの作成</p>
                        <pre><code>// "function UserCard"と入力すると...
function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
// ↑ ここまで自動生成される</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>完全無料：</strong> 個人・商用問わず完全無料。企業でも追加料金なし</li>
                            <li><strong>70+言語対応：</strong> Python、JavaScript、TypeScript、Go、Rustなど主要言語すべてに対応</li>
                            <li><strong>高速：</strong> Copilotより応答が速いという評価も</li>
                            <li><strong>プライバシー：</strong> コードを学習に使用しないオプションあり</li>
                            <li><strong>Copilotからの移行：</strong> Copilotの代替として多くの開発者が移行中</li>
                        </ul>
                        
                        <h5>🆚 なぜCopilotより優れているか</h5>
                        <ul>
                            <li>✅ 完全無料（Copilotは$10/月）</li>
                            <li>✅ 企業でも無料（Copilotは企業版$19/月）</li>
                            <li>✅ より多くの言語に対応</li>
                            <li>✅ プライバシー設定が柔軟</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="extensions-section">
                <h3>🎨 UI・テーマ系（3個）</h3>

                <div class="ext-card">
                    <h4>6. One Dark Pro ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 7M+ | 💰 無料</p>
                    <p><strong>概要：</strong> 人気No.1ダークテーマ。目に優しい配色で長時間のコーディングでも疲れにくい。</p>
                    <p><strong>Pro Tip：</strong> フォントは「Fira Code」または「JetBrains Mono」と組み合わせると最高</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「One Dark Pro」を検索してインストール</li>
                            <li><strong>テーマ適用：</strong> <code>Cmd/Ctrl + K → Cmd/Ctrl + T</code> でテーマ選択画面を開く</li>
                            <li><strong>One Dark Proを選択：</strong> リストから「One Dark Pro」を選択</li>
                            <li><strong>バリエーション：</strong> One Dark Pro、One Dark Pro Flat、One Dark Pro Vivid から選択可能</li>
                        </ol>
                        
                        <h5>💡 カスタマイズ</h5>
                        <p><strong>推奨フォント設定：</strong></p>
                        <pre><code>// settings.json
{
  "editor.fontFamily": "Fira Code, JetBrains Mono",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 22
}</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>目の疲労軽減：</strong> ブルーライトを抑えた配色で、長時間作業でも目が疲れにくい</li>
                            <li><strong>コントラスト最適化：</strong> シンタックスハイライトが見やすく、コードの構造を把握しやすい</li>
                            <li><strong>Atom由来：</strong> Atomエディタの人気テーマをVS Codeに移植</li>
                            <li><strong>カスタマイズ可能：</strong> settings.jsonで色をカスタマイズ可能</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>7. Material Icon Theme ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 6M+ | 💰 無料</p>
                    <p><strong>概要：</strong> 1000+のMaterial Designアイコン。ファイルとフォルダの視認性が劇的に向上。</p>
                    <p><strong>効果：</strong> ファイル発見速度が約30%向上（ユーザー調査より）</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Material Icon Theme」を検索してインストール</li>
                            <li><strong>アイコンテーマ適用：</strong> <code>Cmd/Ctrl + Shift + P</code> → 「Preferences: File Icon Theme」</li>
                            <li><strong>Material Icon Themeを選択：</strong> リストから選択</li>
                            <li><strong>即座に反映：</strong> ファイルエクスプローラーのアイコンが変更される</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>ファイル種類の視認性：</strong></p>
                        <ul>
                            <li>📄 <code>.js</code> → 黄色のJavaScriptアイコン</li>
                            <li>📘 <code>.ts</code> → 青色のTypeScriptアイコン</li>
                            <li>⚛️ <code>.jsx/.tsx</code> → Reactアイコン</li>
                            <li>🎨 <code>.css/.scss</code> → スタイルシートアイコン</li>
                            <li>📦 <code>package.json</code> → npmアイコン</li>
                            <li>🔧 <code>.env</code> → 環境変数アイコン</li>
                        </ul>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>フォルダアイコン：</strong> <code>components/</code>、<code>utils/</code>など、フォルダ名に応じたアイコンが表示</li>
                            <li><strong>カスタマイズ：</strong> 設定でアイコンの色や形をカスタマイズ可能</li>
                            <li><strong>ファイル発見：</strong> アイコンで視覚的に識別できるため、目的のファイルを素早く発見</li>
                            <li><strong>プロジェクト構造理解：</strong> 新しいプロジェクトでも、アイコンで構造を直感的に理解</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>8. Peacock ⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 1M+ | 💰 無料</p>
                    <p><strong>概要：</strong> 複数のVS Codeウィンドウを色で区別。プロジェクトごとに異なる色を設定。</p>
                    <p><strong>こんな時に：</strong> 本番環境とステージング環境を同時に開いている時の誤操作防止</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Peacock」を検索してインストール</li>
                            <li><strong>色を変更：</strong> <code>Cmd/Ctrl + Shift + P</code> → 「Peacock: Change to a favorite color」</li>
                            <li><strong>色を選択：</strong> プリセットカラーから選択、またはカスタムカラーを入力</li>
                            <li><strong>自動保存：</strong> プロジェクトごとに色が保存される</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>環境別の色分け：</strong></p>
                        <ul>
                            <li>🔴 <strong>本番環境：</strong> 赤色（危険を示す）</li>
                            <li>🟡 <strong>ステージング：</strong> 黄色（注意を示す）</li>
                            <li>🟢 <strong>開発環境：</strong> 緑色（安全を示す）</li>
                            <li>🔵 <strong>テスト環境：</strong> 青色</li>
                        </ul>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>誤操作防止：</strong> 本番環境を赤色にすることで、誤って変更するリスクを軽減</li>
                            <li><strong>複数プロジェクト：</strong> 複数のプロジェクトを同時に開いている時、どのウィンドウがどのプロジェクトか一目瞭然</li>
                            <li><strong>チーム共有：</strong> チームで色のルールを決めておくと、画面共有時に分かりやすい</li>
                            <li><strong>カスタマイズ：</strong> タイトルバー、ステータスバー、アクティビティバーの色を個別に設定可能</li>
                        </ul>
                        
                        <h5>🎨 推奨カラー設定</h5>
                        <pre><code>// .vscode/settings.json（プロジェクトごと）
{
  "peacock.color": "#f44336",  // 本番環境は赤
  "peacock.affectActivityBar": true,
  "peacock.affectStatusBar": true,
  "peacock.affectTitleBar": true
}</code></pre>
                    </div>
                </div>
            </div>

            <div class="extensions-section">
                <h3>⚡ 生産性向上系（4個）</h3>

                <div class="ext-card">
                    <h4>9. Live Share ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 5M+ | 💰 無料（Microsoft公式）</p>
                    <p><strong>概要：</strong> リアルタイムでコードを共同編集。リモートペアプログラミングに最適。</p>
                    <p><strong>主な機能：</strong> リアルタイム共同編集、音声通話、ターミナル共有、サーバー共有</p>
                    <p><strong>活用例：</strong> 新人教育、オンボーディング、リモートワークでのペアプロ</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Live Share」を検索してインストール</li>
                            <li><strong>サインイン：</strong> Microsoft/GitHubアカウントでサインイン</li>
                            <li><strong>セッション開始：</strong> ステータスバーの「Live Share」をクリック → 「Start collaboration session」</li>
                            <li><strong>リンク共有：</strong> 生成されたリンクをチームメンバーに共有</li>
                            <li><strong>共同編集開始：</strong> メンバーがリンクをクリックすると、リアルタイム共同編集が開始</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> リモートでペアプログラミング</p>
                        <ul>
                            <li><strong>コード共同編集：</strong> 2人が同時に同じファイルを編集。カーソル位置が色分けされて表示</li>
                            <li><strong>音声通話：</strong> VS Code内で音声通話しながらコーディング（別途Zoom不要）</li>
                            <li><strong>ターミナル共有：</strong> ホストのターミナルをゲストも操作可能</li>
                            <li><strong>サーバー共有：</strong> localhost:3000をゲストも閲覧可能</li>
                        </ul>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>新人教育：</strong> 先輩が新人のコードをリアルタイムで見ながら指導</li>
                            <li><strong>バグ修正：</strong> 複雑なバグを2人で協力して解決</li>
                            <li><strong>コードレビュー：</strong> PRレビュー時に、実際にコードを動かしながらレビュー</li>
                            <li><strong>読み取り専用モード：</strong> ゲストを読み取り専用にして、デモやプレゼンに活用</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>10. Todo Tree ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 2M+ | 💰 無料</p>
                    <p><strong>概要：</strong> コード内のTODO、FIXME、HACKコメントを一覧表示。タスク管理が簡単に。</p>
                    <p><strong>使い方：</strong> // TODO: 実装する → サイドバーに自動表示</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Todo Tree」を検索してインストール</li>
                            <li><strong>コメント追加：</strong> コードに<code>// TODO:</code>、<code>// FIXME:</code>などのコメントを追加</li>
                            <li><strong>サイドバー確認：</strong> サイドバーの「Todo Tree」アイコンをクリック</li>
                            <li><strong>一覧表示：</strong> プロジェクト全体のTODOが階層表示される</li>
                            <li><strong>ジャンプ：</strong> TODOをクリックすると該当箇所にジャンプ</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <pre><code>// TODO: ユーザー認証機能を実装
// FIXME: パフォーマンス改善が必要
// HACK: 一時的な回避策、後で修正
// NOTE: この処理は重要
// [ ]: チェックボックス形式のTODO</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>優先度管理：</strong> TODO（通常）、FIXME（バグ）、HACK（技術的負債）で優先度を分ける</li>
                            <li><strong>担当者明記：</strong> <code>// TODO(@username): タスク内容</code> で担当者を明記</li>
                            <li><strong>期限設定：</strong> <code>// TODO(2024-12-31): 年内に完了</code> で期限を設定</li>
                            <li><strong>カスタムタグ：</strong> 設定で独自のタグ（REVIEW、QUESTIONなど）を追加可能</li>
                        </ul>
                        
                        <h5>🎨 カスタマイズ</h5>
                        <pre><code>// settings.json
{
  "todo-tree.general.tags": [
    "TODO", "FIXME", "HACK", "NOTE", "REVIEW"
  ],
  "todo-tree.highlights.defaultHighlight": {
    "foreground": "white",
    "background": "green",
    "icon": "check"
  }
}</code></pre>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>11. Bookmarks ⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 1.5M+ | 💰 無料</p>
                    <p><strong>概要：</strong> コード内に「しおり」を設定して、重要な箇所に素早くジャンプ。</p>
                    <p><strong>活用シーン：</strong> 大規模ファイルの重要箇所をマーク、複数ファイル間を頻繁に行き来</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Bookmarks」を検索してインストール</li>
                            <li><strong>ブックマーク追加：</strong> <code>Cmd/Ctrl + Alt + K</code> で現在行にブックマークを追加</li>
                            <li><strong>ジャンプ：</strong> <code>Cmd/Ctrl + Alt + L</code> で次のブックマークにジャンプ</li>
                            <li><strong>一覧表示：</strong> サイドバーの「Bookmarks」アイコンで全ブックマークを表示</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> 大規模なレガシーコードの解析</p>
                        <ul>
                            <li>重要な関数定義にブックマーク</li>
                            <li>バグが発生している箇所にブックマーク</li>
                            <li>修正が必要な箇所にブックマーク</li>
                            <li>ブックマーク間を素早く移動して効率的に作業</li>
                        </ul>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>ラベル付け：</strong> ブックマークにラベルを付けて管理（右クリック → Label）</li>
                            <li><strong>複数ファイル：</strong> 複数ファイルにまたがるブックマークも一覧で管理</li>
                            <li><strong>ショートカット：</strong> 次/前のブックマークに素早くジャンプ</li>
                            <li><strong>永続化：</strong> ブックマークはプロジェクトごとに保存される</li>
                        </ul>
                        
                        <h5>⌨️ 便利なショートカット</h5>
                        <ul>
                            <li><code>Cmd/Ctrl + Alt + K</code>: ブックマーク追加/削除</li>
                            <li><code>Cmd/Ctrl + Alt + L</code>: 次のブックマークへ</li>
                            <li><code>Cmd/Ctrl + Alt + J</code>: 前のブックマークへ</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>12. Path Intellisense ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 4M+ | 💰 無料</p>
                    <p><strong>概要：</strong> ファイルパスを自動補完。import文やrequire文の入力が劇的に速くなる。</p>
                    <p><strong>効果：</strong> import文の入力時間が約50%削減。タイポによるエラーも防止。</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Path Intellisense」を検索してインストール</li>
                            <li><strong>自動有効化：</strong> インストール後、自動的に有効化される</li>
                            <li><strong>パス入力：</strong> import文やrequire文でパスを入力し始める</li>
                            <li><strong>自動補完：</strong> ファイルとフォルダの候補が自動表示される</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <pre><code>// "import { Button } from './"と入力すると...
import { Button } from './components/Button';
// ↑ components/Button.tsxが自動補完される

// 相対パスも絶対パスも対応
import { api } from '@/utils/api';
import logo from '../assets/logo.png';</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>タイポ防止：</strong> 手入力によるパスのタイポを完全に防止</li>
                            <li><strong>ファイル移動：</strong> ファイルを移動した後も、正しいパスを提案</li>
                            <li><strong>画像パス：</strong> 画像ファイルのパスも補完（src属性など）</li>
                            <li><strong>エイリアス対応：</strong> @/や~/などのパスエイリアスにも対応</li>
                        </ul>
                        
                        <h5>🔧 設定例</h5>
                        <pre><code>// settings.json
{
  "path-intellisense.mappings": {
    "@": "${workspaceFolder}/src",
    "~": "${workspaceFolder}"
  }
}</code></pre>
                    </div>
                </div>
            </div>

            <div class="extensions-section">
                <h3>🔍 コード品質系（4個）</h3>

                <div class="ext-card">
                    <h4>13. ESLint ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 20M+ | 💰 無料</p>
                    <p><strong>概要：</strong> JavaScript/TypeScriptの静的解析ツール。コーディング規約違反やバグを自動検出。</p>
                    <p><strong>必須設定：</strong> 保存時に自動修正を有効化（editor.codeActionsOnSave）</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「ESLint」を検索してインストール</li>
                            <li><strong>プロジェクト設定：</strong> <code>npm install --save-dev eslint</code></li>
                            <li><strong>初期化：</strong> <code>npx eslint --init</code> で設定ファイル作成</li>
                            <li><strong>自動修正設定：</strong> settings.jsonに保存時の自動修正を追加</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <pre><code>// 検出される問題の例
const x = 1;  // ❌ 未使用変数
console.log(y);  // ❌ 未定義変数
if (x = 1) {}  // ❌ 代入演算子（==の誤り）
var name = "test";  // ❌ varの使用（letを推奨）

// ESLintが自動修正
const name = "test";  // ✅ constに修正
if (x === 1) {}  // ✅ 厳密等価演算子に修正</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>保存時自動修正：</strong> ファイル保存時に自動でルール違反を修正</li>
                            <li><strong>チーム共有：</strong> .eslintrc.jsをGitで共有し、チーム全体で統一</li>
                            <li><strong>カスタムルール：</strong> プロジェクトに合わせてルールをカスタマイズ</li>
                            <li><strong>Prettier連携：</strong> eslint-config-prettierでPrettierと併用</li>
                        </ul>
                        
                        <h5>🔧 推奨設定</h5>
                        <pre><code>// settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}</code></pre>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>14. Prettier ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 15M+ | 💰 無料</p>
                    <p><strong>概要：</strong> コードフォーマッター。保存時に自動でコードを整形し、チーム全体のスタイルを統一。</p>
                    <p><strong>メリット：</strong> コードレビューでスタイルの議論が不要、新メンバーのオンボーディングが簡単</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Prettier」を検索してインストール</li>
                            <li><strong>プロジェクト設定：</strong> <code>npm install --save-dev prettier</code></li>
                            <li><strong>デフォルト設定：</strong> settings.jsonでPrettierをデフォルトフォーマッターに設定</li>
                            <li><strong>保存時フォーマット：</strong> 保存時に自動整形を有効化</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <pre><code>// フォーマット前
const user={name:"John",age:30,email:"john@example.com"};

// フォーマット後（保存時に自動整形）
const user = {
  name: "John",
  age: 30,
  email: "john@example.com"
};</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>チーム統一：</strong> .prettierrc.jsonで全員が同じスタイルを使用</li>
                            <li><strong>保存時整形：</strong> ファイル保存時に自動でフォーマット</li>
                            <li><strong>ESLint連携：</strong> ESLintとPrettierを併用してコード品質とスタイルを両立</li>
                            <li><strong>Git Hook：</strong> コミット前に自動フォーマット（husky + lint-staged）</li>
                        </ul>
                        
                        <h5>🔧 推奨設定</h5>
                        <pre><code>// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

// .prettierrc.json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}</code></pre>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>15. Error Lens ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 2M+ | 💰 無料</p>
                    <p><strong>概要：</strong> エラーと警告をコード行の右側に直接表示。エラーの見落としを防止。</p>
                    <p><strong>効果：</strong> エラーの発見速度が約40%向上。特に大規模ファイルで効果的。</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Error Lens」を検索してインストール</li>
                            <li><strong>自動有効化：</strong> インストール後、自動的にエラーが行末に表示される</li>
                            <li><strong>カスタマイズ：</strong> 色や表示位置を設定で変更可能</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>通常のVS Code：</strong></p>
                        <pre><code>const result = data.map(item => item.value);
// ↑ エラーは下部の「問題」パネルに表示（見落としやすい）</code></pre>
                        
                        <p><strong>Error Lens使用時：</strong></p>
                        <pre><code>const result = data.map(item => item.value);
// ↑ 🔴 'data' is not defined  ← 行末に直接表示！</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>即座に気づく：</strong> エラーを書いた瞬間に行末に表示されるため、すぐに修正可能</li>
                            <li><strong>大規模ファイル：</strong> 1000行以上のファイルでも、エラー箇所を見逃さない</li>
                            <li><strong>警告も表示：</strong> エラーだけでなく、警告やヒントも表示</li>
                            <li><strong>色分け：</strong> エラー（赤）、警告（黄）、情報（青）で色分け表示</li>
                        </ul>
                        
                        <h5>🎨 カスタマイズ</h5>
                        <pre><code>// settings.json
{
  "errorLens.enabled": true,
  "errorLens.fontSize": "12px",
  "errorLens.fontWeight": "bold",
  "errorLens.delay": 500  // 0.5秒後に表示
}</code></pre>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>16. SonarLint ⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 1M+ | 💰 無料（Enterprise版は有料）</p>
                    <p><strong>概要：</strong> セキュリティ脆弱性とコード品質の問題を検出。エンタープライズ開発に必須。</p>
                    <p><strong>検出例：</strong> SQLインジェクション、XSS、ハードコードされたパスワード、Null参照</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「SonarLint」を検索してインストール</li>
                            <li><strong>自動解析：</strong> ファイルを開くと自動的にコード解析が開始</li>
                            <li><strong>問題確認：</strong> 問題パネルで検出された問題を確認</li>
                            <li><strong>修正提案：</strong> 各問題に対する修正方法を確認</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <pre><code>// ❌ セキュリティ問題を検出
const password = "admin123";  // ハードコードされたパスワード
const query = "SELECT * FROM users WHERE id=" + userId;  // SQLインジェクション
document.innerHTML = userInput;  // XSS脆弱性

// ✅ SonarLintの修正提案
const password = process.env.DB_PASSWORD;  // 環境変数を使用
const query = "SELECT * FROM users WHERE id=?";  // プリペアドステートメント
document.textContent = userInput;  // XSS対策</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>セキュリティ重視：</strong> OWASP Top 10の脆弱性を自動検出</li>
                            <li><strong>コード品質：</strong> バグの原因となるコードパターンを検出</li>
                            <li><strong>ベストプラクティス：</strong> 言語ごとのベストプラクティスを提案</li>
                            <li><strong>SonarQube連携：</strong> Enterprise版でSonarQubeサーバーと連携可能</li>
                        </ul>
                        
                        <h5>🔍 検出される問題の例</h5>
                        <ul>
                            <li><strong>セキュリティ：</strong> SQLインジェクション、XSS、CSRF、ハードコードされた認証情報</li>
                            <li><strong>バグ：</strong> Null参照、無限ループ、リソースリーク</li>
                            <li><strong>コード臭：</strong> 重複コード、複雑すぎる関数、マジックナンバー</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="extensions-section">
                <h3>🌐 Web開発系（2個）</h3>

                <div class="ext-card">
                    <h4>17. Live Server ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 25M+ | 💰 無料</p>
                    <p><strong>概要：</strong> ローカル開発サーバーを起動し、ファイル保存時に自動リロード。Web開発の必須ツール。</p>
                    <p><strong>使い方：</strong> HTMLファイルを右クリック → "Open with Live Server" → 自動リロード開始</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Live Server」を検索してインストール</li>
                            <li><strong>サーバー起動：</strong> HTMLファイルを右クリック → "Open with Live Server"</li>
                            <li><strong>自動リロード：</strong> ファイルを保存すると、ブラウザが自動的にリロード</li>
                            <li><strong>停止：</strong> ステータスバーの「Port: 5500」をクリックして停止</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> HTML/CSS/JSの開発</p>
                        <pre><code>// index.html を編集
<h1>Hello World</h1>
// ↓ 保存すると...
// ブラウザが自動リロードされて変更が即座に反映！

// styles.css を編集
h1 { color: blue; }
// ↓ 保存すると...
// ブラウザが自動リロードされて色が変わる！</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>デュアルモニター：</strong> 片方でコード編集、もう片方でブラウザ表示</li>
                            <li><strong>カスタムポート：</strong> 設定でポート番号を変更可能（デフォルト: 5500）</li>
                            <li><strong>HTTPS対応：</strong> 設定でHTTPSサーバーとして起動可能</li>
                            <li><strong>プロキシ設定：</strong> APIサーバーへのプロキシ設定も可能</li>
                        </ul>
                        
                        <h5>🔧 便利な設定</h5>
                        <pre><code>// settings.json
{
  "liveServer.settings.port": 5500,
  "liveServer.settings.root": "/",
  "liveServer.settings.CustomBrowser": "chrome",
  "liveServer.settings.donotShowInfoMsg": true
}</code></pre>
                        
                        <h5>⚠️ 注意点</h5>
                        <ul>
                            <li>React/Vue/Angularなどのフレームワークは、それぞれの開発サーバー（npm run dev）を使用</li>
                            <li>Live Serverは静的HTML/CSS/JSの開発に最適</li>
                        </ul>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>18. Auto Rename Tag ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 10M+ | 💰 無料</p>
                    <p><strong>概要：</strong> HTMLタグの開始タグを変更すると、終了タグも自動で変更。地味だが超便利。</p>
                    <p><strong>効果：</strong> タグ変更時のミスが激減。特にReact/Vue開発で威力を発揮。</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Auto Rename Tag」を検索してインストール</li>
                            <li><strong>自動有効化：</strong> インストール後、自動的に有効化される</li>
                            <li><strong>タグ変更：</strong> 開始タグを変更すると、終了タグも自動で変更される</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <pre><code>// 開始タグを変更
<div>Hello</div>
// ↓ <div> を <span> に変更すると...
<span>Hello</span>
// ↑ 終了タグも自動で </span> に変更される！

// React/JSXでも動作
<Button>Click</Button>
// ↓ <Button> を <Link> に変更すると...
<Link>Click</Link>
// ↑ 終了タグも自動で </Link> に変更される！</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>タイポ防止：</strong> 終了タグの変更忘れによるバグを完全に防止</li>
                            <li><strong>リファクタリング：</strong> タグの種類を変更する際に、終了タグを手動で変更する手間が不要</li>
                            <li><strong>React/Vue対応：</strong> JSX/TSXファイルでも動作</li>
                            <li><strong>ネストされたタグ：</strong> 複雑にネストされたタグでも正確に動作</li>
                        </ul>
                        
                        <h5>🎯 活用シーン</h5>
                        <ul>
                            <li><code><div></code> を <code><section></code> に変更</li>
                            <li><code><span></code> を <code><strong></code> に変更</li>
                            <li><code><Button></code> を <code><Link></code> に変更（React）</li>
                            <li><code><v-btn></code> を <code><v-card></code> に変更（Vue）</li>
                        </ul>
                        
                        <h5>💡 Pro Tip</h5>
                        <p>この拡張機能は地味だが、一度使うと手放せなくなる。特にHTML/JSXを大量に書く開発者には必須。</p>
                    </div>
                </div>
            </div>

            <div class="extensions-section">
                <h3>🔧 その他便利ツール（2個）</h3>

                <div class="ext-card">
                    <h4>19. Docker ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 10M+ | 💰 無料（Microsoft公式）</p>
                    <p><strong>概要：</strong> Dockerコンテナの管理をVS Code内で完結。Dockerfile、docker-compose.ymlの編集支援。</p>
                    <p><strong>主な機能：</strong> コンテナの起動・停止、イメージ管理、ログ表示、シェル接続</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「Docker」を検索してインストール</li>
                            <li><strong>Docker起動：</strong> Docker Desktopを起動（事前にインストール必要）</li>
                            <li><strong>サイドバー：</strong> サイドバーのDockerアイコンをクリック</li>
                            <li><strong>コンテナ管理：</strong> コンテナ、イメージ、ボリューム、ネットワークを管理</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> Node.jsアプリをDockerで開発</p>
                        <pre><code>// Dockerfile を作成（拡張機能が補完してくれる）
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

// docker-compose.yml も補完
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>右クリック操作：</strong> コンテナを右クリックして、起動・停止・削除・ログ表示</li>
                            <li><strong>シェル接続：</strong> コンテナ内にシェルで接続して、デバッグ</li>
                            <li><strong>ログ表示：</strong> コンテナのログをVS Code内で表示</li>
                            <li><strong>イメージ管理：</strong> 不要なイメージを一括削除</li>
                        </ul>
                        
                        <h5>🔧 便利な機能</h5>
                        <ul>
                            <li><strong>Dockerfile補完：</strong> Dockerfileの構文を自動補完</li>
                            <li><strong>docker-compose補完：</strong> docker-compose.ymlの構文を自動補完</li>
                            <li><strong>イメージビルド：</strong> Dockerfileを右クリック → "Build Image"</li>
                            <li><strong>コンテナ実行：</strong> イメージを右クリック → "Run"</li>
                        </ul>
                        
                        <h5>💡 Pro Tip</h5>
                        <p>Docker Desktopを使わずに、VS Code内でDockerの全操作が完結。特にマイクロサービス開発で複数コンテナを管理する際に威力を発揮。</p>
                    </div>
                </div>

                <div class="ext-card">
                    <h4>20. GitLens ⭐⭐⭐⭐⭐</h4>
                    <p class="ext-meta">📥 15M+ | 💰 無料版あり / Pro $10/月</p>
                    <p><strong>概要：</strong> Gitの機能を大幅に強化。コードの変更履歴を視覚的に表示。</p>
                    <p><strong>主な機能：</strong> 行ごとのBlame表示、ファイル履歴、コミット検索、ブランチ比較</p>
                    <p><strong>Pro Tip：</strong> 「誰がいつこのコードを書いたか」が一目でわかる</p>
                    
                    <div class="usage-example">
                        <h5>📖 使い方</h5>
                        <ol>
                            <li><strong>インストール：</strong> VS Code拡張機能から「GitLens」を検索してインストール</li>
                            <li><strong>自動有効化：</strong> インストール後、自動的に有効化される</li>
                            <li><strong>Blame表示：</strong> コード行にカーソルを合わせると、誰がいつ変更したか表示</li>
                            <li><strong>ファイル履歴：</strong> サイドバーでファイルの変更履歴を確認</li>
                        </ol>
                        
                        <h5>💡 実践例</h5>
                        <p><strong>シナリオ：</strong> バグの原因を調査</p>
                        <pre><code>// バグがあるコード行にカーソルを合わせると...
const result = data.map(item => item.value);
// ↑ 「John Doe, 2 months ago: Fix data processing」
// → 2ヶ月前にJohnさんが変更したことがわかる

// その行をクリックすると...
// → コミット全体の差分が表示される
// → 関連する変更も確認できる</code></pre>
                        
                        <h5>⚡ 効果的な使い方</h5>
                        <ul>
                            <li><strong>Blame表示：</strong> 各行の右側に、最終変更者と日時が表示される</li>
                            <li><strong>ファイル履歴：</strong> ファイルの全変更履歴を時系列で表示</li>
                            <li><strong>コミット検索：</strong> コミットメッセージや作者で検索</li>
                            <li><strong>ブランチ比較：</strong> 2つのブランチの差分を視覚的に比較</li>
                        </ul>
                        
                        <h5>🎯 活用シーン</h5>
                        <ul>
                            <li><strong>バグ調査：</strong> 「このバグはいつ混入したか？」を特定</li>
                            <li><strong>コードレビュー：</strong> 「誰がこのコードを書いたか？」を確認</li>
                            <li><strong>リファクタリング：</strong> 「このコードの変更履歴は？」を確認</li>
                            <li><strong>チーム協業：</strong> 「誰に質問すればいいか？」を特定</li>
                        </ul>
                        
                        <h5>💎 Pro版の機能（$10/月）</h5>
                        <ul>
                            <li><strong>Visual File History：</strong> ファイル履歴をグラフィカルに表示</li>
                            <li><strong>Worktrees：</strong> 複数のブランチを同時に作業</li>
                            <li><strong>Advanced Blame：</strong> より詳細なBlame情報</li>
                        </ul>
                        
                        <h5>💡 Pro Tip</h5>
                        <p>無料版でも十分強力。特に「誰がいつこのコードを書いたか」を瞬時に確認できる機能は、チーム開発で必須。</p>
                    </div>
                </div>
            </div>

            <div class="extensions-summary">
                <h3>🎯 まとめ：必須拡張機能の組み合わせ</h3>
                
                <div class="combo-section">
                    <h4>🏆 初心者向け最小構成（5個）</h4>
                    <ol>
                        <li><strong>GitHub Copilot / Codeium</strong> - AI補完</li>
                        <li><strong>ESLint</strong> - コード品質</li>
                        <li><strong>Prettier</strong> - フォーマット</li>
                        <li><strong>Live Server</strong> - Web開発</li>
                        <li><strong>Material Icon Theme</strong> - 視認性向上</li>
                    </ol>
                </div>

                <div class="combo-section">
                    <h4>💼 プロフェッショナル構成（10個）</h4>
                    <p>初心者向け5個 + 以下5個</p>
                    <ol start="6">
                        <li><strong>Error Lens</strong> - エラー可視化</li>
                        <li><strong>GitLens</strong> - Git強化</li>
                        <li><strong>Todo Tree</strong> - タスク管理</li>
                        <li><strong>Path Intellisense</strong> - パス補完</li>
                        <li><strong>Live Share</strong> - リモート協業</li>
                    </ol>
                </div>

                <div class="combo-section">
                    <h4>🚀 エンタープライズ構成（全20個）</h4>
                    <p>プロフェッショナル構成10個 + 残り10個すべて</p>
                    <p><strong>特に追加すべき：</strong> SonarLint（セキュリティ）、Docker（コンテナ管理）、Peacock（複数プロジェクト管理）</p>
                </div>
            </div>

            <div class="extensions-tips">
                <h3>💡 拡張機能活用のベストプラクティス</h3>
                
                <div class="tip-section">
                    <h4>1. 入れすぎ注意</h4>
                    <p>拡張機能が多すぎるとVS Codeが重くなります。本当に使うものだけを厳選しましょう。</p>
                    <p><strong>目安：</strong> 10〜15個程度が最適</p>
                </div>

                <div class="tip-section">
                    <h4>2. 定期的な見直し</h4>
                    <p>使っていない拡張機能は無効化または削除しましょう。</p>
                    <p><strong>方法：</strong> 拡張機能タブ → 歯車アイコン → "無効にする"</p>
                </div>

                <div class="tip-section">
                    <h4>3. プロジェクトごとに推奨拡張機能を設定</h4>
                    <p>.vscode/extensions.jsonファイルでチーム全体の推奨拡張機能を共有できます。</p>
                    <div class="code-example">
                        <pre><code>{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "github.copilot"
  ]
}</code></pre>
                    </div>
                </div>

                <div class="tip-section">
                    <h4>4. ワークスペース固有の設定</h4>
                    <p>プロジェクトごとに異なる拡張機能を有効化できます。</p>
                    <p><strong>例：</strong> Reactプロジェクトでは React関連拡張機能を有効、Pythonプロジェクトでは無効</p>
                </div>
            </div>

            <div class="extensions-faq">
                <h3>❓ よくある質問</h3>
                
                <div class="faq-item">
                    <h4>Q1: GitHub CopilotとCodeiumどちらを選ぶべき？</h4>
                    <p><strong>A:</strong> 予算があればCopilot（精度が若干高い）、無料で使いたいならCodeium（ほぼ同等の精度）。両方試して好みで選ぶのがベスト。</p>
                </div>

                <div class="faq-item">
                    <h4>Q2: 拡張機能が重くてVS Codeが遅い</h4>
                    <p><strong>A:</strong> 開発者ツール（Cmd+Shift+P → "Developer: Show Running Extensions"）で重い拡張機能を特定し、無効化または代替を検討。</p>
                </div>

                <div class="faq-item">
                    <h4>Q3: チームで拡張機能を統一したい</h4>
                    <p><strong>A:</strong> .vscode/extensions.jsonで推奨拡張機能を設定し、Gitで共有。チームメンバーがVS Codeを開くと自動的にインストールを促される。</p>
                </div>

                <div class="faq-item">
                    <h4>Q4: 有料拡張機能は買うべき？</h4>
                    <p><strong>A:</strong> GitHub Copilot（$10/月）は投資価値あり。GitLens Pro（$10/月）は無料版で十分な場合が多い。まず無料版を試してから判断。</p>
                </div>
            </div>
        `
    }
];
