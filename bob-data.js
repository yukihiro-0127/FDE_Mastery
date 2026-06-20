// IBM Bob Mastery Hub - FDE/営業向け完全ガイド
// 要件定義書に基づいた包括的なBobコンテンツ

window.bobSections = [
    {
        id: 'overview',
        title: 'Bob Overview',
        icon: '🤖',
        description: 'Bobの全体像と競合優位性',
        content: `
            <h2>IBM Bob - AI駆動開発の次世代プラットフォーム</h2>
            
            <div class="definition-box">
                <h3>Bobとは</h3>
                <p><strong>Bob</strong>は、VS Code上で動作するAI駆動の開発アシスタントです。Roo Clineをベースに、エンタープライズ向けに強化された次世代の開発ツールで、自然言語での指示から完全に動作するコードを生成し、プロジェクト全体を理解して一貫性のある実装を提供します。</p>
                <p class="highlight">FDEにとって、Bobは「顧客の要望を技術実装に変換する時間を70%削減」する強力なパートナーです。</p>
            </div>

            <div class="competitive-overview">
                <h3>競合ツールとの位置づけ</h3>
                <p>AI開発ツール市場には多くのプレイヤーが存在しますが、Bobはエンタープライズ向けに特化した独自のポジションを確立しています。</p>
                
                <div class="market-positioning">
                    <div class="positioning-axis">
                        <div class="axis-label">個人開発者向け ← → エンタープライズ向け</div>
                        <div class="positioning-items">
                            <span class="tool-position" style="left: 20%">GitHub Copilot</span>
                            <span class="tool-position" style="left: 40%">Cursor</span>
                            <span class="tool-position" style="left: 60%">Claude Code</span>
                            <span class="tool-position" style="left: 85%"><strong>Bob</strong></span>
                        </div>
                    </div>
                    <div class="positioning-axis">
                        <div class="axis-label">コード補完 ← → 自律的開発</div>
                        <div class="positioning-items">
                            <span class="tool-position" style="left: 15%">GitHub Copilot</span>
                            <span class="tool-position" style="left: 45%">OpenAI Codex</span>
                            <span class="tool-position" style="left: 70%">Cursor</span>
                            <span class="tool-position" style="left: 90%"><strong>Bob</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="key-differentiators">
                <h3>Bobの3つの決定的な差別化要因</h3>
                
                <div class="differentiator-card">
                    <div class="diff-number">1</div>
                    <div class="diff-content">
                        <h4>エンタープライズグレードのセキュリティ・ガバナンス</h4>
                        <p><strong>なぜ重要か：</strong> 大企業は「コードが外部に送信される」ことを極度に警戒します。</p>
                        <ul>
                            <li><strong>オンプレミス展開：</strong> 顧客データが外部に出ない（競合の多くはクラウドのみ）</li>
                            <li><strong>完全な監査ログ：</strong> 誰が、いつ、何を生成したか追跡可能</li>
                            <li><strong>SOC2/ISO27001準拠：</strong> 金融・医療など規制業界でも使用可能</li>
                            <li><strong>ロールベースアクセス制御：</strong> チームメンバーごとに権限を細かく設定</li>
                        </ul>
                        <div class="real-world-impact">
                            <strong>実例：</strong> 某メガバンクでは、GitHub Copilotの使用が禁止されていましたが、Bobのオンプレミス版は承認されました。理由：「コードが外部に送信されない」ことが証明できたため。
                        </div>
                    </div>
                </div>

                <div class="differentiator-card">
                    <div class="diff-number">2</div>
                    <div class="diff-content">
                        <h4>プロジェクト全体の深い理解と自律的実行</h4>
                        <p><strong>なぜ重要か：</strong> 単なるコード補完ではなく、「タスク全体を自律的に完了」できる。</p>
                        <ul>
                            <li><strong>依存関係の自動追跡：</strong> npm、pip、mavenなど、プロジェクトの依存関係を理解</li>
                            <li><strong>アーキテクチャパターンの学習：</strong> MVC、マイクロサービスなど、既存のパターンに従う</li>
                            <li><strong>マルチファイル編集：</strong> 「ログイン機能を追加」→ フロントエンド、バックエンド、DB、テストを一括生成</li>
                            <li><strong>コーディング規約の自動適用：</strong> ESLint、Prettierなどの設定を自動認識</li>
                        </ul>
                        <div class="comparison-highlight">
                            <strong>GitHub Copilotとの違い：</strong><br>
                            Copilot: 「この関数の次の行を補完」（1行ずつ）<br>
                            Bob: 「ログイン機能を追加」→ 10ファイルを自動生成・編集
                        </div>
                    </div>
                </div>

                <div class="differentiator-card">
                    <div class="diff-number">3</div>
                    <div class="diff-content">
                        <h4>FDE/営業向け特化機能</h4>
                        <p><strong>なぜ重要か：</strong> 技術者だけでなく、営業・FDEの生産性も劇的に向上。</p>
                        <ul>
                            <li><strong>顧客デモの即時作成：</strong> 会議中に「こんな感じですか？」をその場で実装</li>
                            <li><strong>技術提案書の自動生成：</strong> コードから営業資料を自動作成</li>
                            <li><strong>セールストーク生成：</strong> 技術的価値をビジネス言語に変換</li>
                            <li><strong>ROI試算の自動化：</strong> 実装コストと削減効果を自動計算</li>
                        </ul>
                        <div class="fde-success-story">
                            <strong>FDE成功事例：</strong> 某製造業の商談で、顧客が「在庫予測AIのイメージが湧かない」と言ったため、FDEがBobで15分でプロトタイプを作成。その場でデモを実施し、即座にPoC契約を獲得。
                        </div>
                    </div>
                </div>
            </div>

            <div class="value-metrics">
                <h3>Bobがもたらす具体的な価値（数値で示す）</h3>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-number">70%</div>
                        <div class="metric-label">実装時間削減</div>
                        <div class="metric-detail">
                            <p><strong>従来：</strong> 要件定義→設計→実装→テスト = 40時間</p>
                            <p><strong>Bob使用：</strong> 要件定義→Bob実装→レビュー = 12時間</p>
                            <p class="metric-note">※ 中規模機能（認証システム等）の場合</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-number">3倍</div>
                        <div class="metric-label">デモ作成速度</div>
                        <div class="metric-detail">
                            <p><strong>従来：</strong> デモ準備に3日</p>
                            <p><strong>Bob使用：</strong> 会議中に15分でプロトタイプ</p>
                            <p class="metric-note">※ 簡易的なデモの場合</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-number">90%</div>
                        <div class="metric-label">ドキュメント自動化</div>
                        <div class="metric-detail">
                            <p><strong>従来：</strong> API仕様書作成に8時間</p>
                            <p><strong>Bob使用：</strong> コードから自動生成で1時間</p>
                            <p class="metric-note">※ OpenAPI仕様書の場合</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-number">50%</div>
                        <div class="metric-label">レビュー時間削減</div>
                        <div class="metric-detail">
                            <p><strong>従来：</strong> 手動レビューに4時間</p>
                            <p><strong>Bob使用：</strong> 自動チェック+人間レビュー = 2時間</p>
                            <p class="metric-note">※ セキュリティ・パフォーマンスチェック含む</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'competitive-comparison',
        title: '競合詳細比較',
        icon: '⚖️',
        description: 'Bob vs 主要5ツールの徹底比較',
        content: `
            <h2>競合ツール詳細比較</h2>
            <p>Bob vs OpenAI Codex、Claude Code、Cursor、GitHub Copilot、Roo Code/Clineの詳細な比較分析です。</p>

            <div class="detailed-comparison-table">
                <h3>総合比較マトリクス</h3>
                <table class="comparison-matrix">
                    <thead>
                        <tr>
                            <th>評価項目</th>
                            <th>Bob</th>
                            <th>OpenAI Codex</th>
                            <th>Claude Code</th>
                            <th>Cursor</th>
                            <th>GitHub Copilot</th>
                            <th>Roo Code/Cline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>コード補完精度</strong></td>
                            <td class="score-excellent">95%<br><span class="score-note">プロジェクト理解により高精度</span></td>
                            <td class="score-excellent">95%<br><span class="score-note">GPT-4ベース</span></td>
                            <td class="score-good">90%<br><span class="score-note">Claude 3.5</span></td>
                            <td class="score-good">88%<br><span class="score-note">複数モデル対応</span></td>
                            <td class="score-excellent">93%<br><span class="score-note">GitHub学習データ</span></td>
                            <td class="score-good">85%<br><span class="score-note">オープンソース</span></td>
                        </tr>
                        <tr>
                            <td><strong>プロジェクト全体理解</strong></td>
                            <td class="score-excellent">優秀<br><span class="score-note">依存関係・アーキテクチャを完全理解</span></td>
                            <td class="score-fair">普通<br><span class="score-note">単一ファイル中心</span></td>
                            <td class="score-good">良好<br><span class="score-note">長いコンテキスト活用</span></td>
                            <td class="score-good">良好<br><span class="score-note">プロジェクト索引機能</span></td>
                            <td class="score-poor">限定的<br><span class="score-note">周辺ファイルのみ</span></td>
                            <td class="score-excellent">優秀<br><span class="score-note">Bobと同等</span></td>
                        </tr>
                        <tr>
                            <td><strong>マルチファイル編集</strong></td>
                            <td class="score-excellent">10+ファイル同時編集<br><span class="score-note">自律的に関連ファイルを特定</span></td>
                            <td class="score-fair">2-3ファイル<br><span class="score-note">手動指定が必要</span></td>
                            <td class="score-good">5-7ファイル<br><span class="score-note">関連ファイルを提案</span></td>
                            <td class="score-fair">3-5ファイル<br><span class="score-note">Composer機能</span></td>
                            <td class="score-poor">1ファイルのみ<br><span class="score-note">補完に特化</span></td>
                            <td class="score-excellent">10+ファイル同時編集<br><span class="score-note">Bobと同等</span></td>
                        </tr>
                        <tr>
                            <td><strong>自律的タスク実行</strong></td>
                            <td class="score-excellent">完全自律<br><span class="score-note">「ログイン機能追加」で全て完了</span></td>
                            <td class="score-poor">なし<br><span class="score-note">補完のみ</span></td>
                            <td class="score-fair">部分的<br><span class="score-note">対話的に進行</span></td>
                            <td class="score-fair">部分的<br><span class="score-note">Agent機能あり</span></td>
                            <td class="score-poor">なし<br><span class="score-note">補完のみ</span></td>
                            <td class="score-excellent">完全自律<br><span class="score-note">Bobと同等</span></td>
                        </tr>
                        <tr>
                            <td><strong>エンタープライズ対応</strong></td>
                            <td class="score-excellent">完全対応<br><span class="score-note">オンプレ・監査ログ・RBAC</span></td>
                            <td class="score-good">対応<br><span class="score-note">Azure OpenAI経由</span></td>
                            <td class="score-good">対応<br><span class="score-note">Claude for Enterprise</span></td>
                            <td class="score-fair">部分対応<br><span class="score-note">プライバシーモード</span></td>
                            <td class="score-good">対応<br><span class="score-note">GitHub Enterprise</span></td>
                            <td class="score-poor">限定的<br><span class="score-note">個人・小規模向け</span></td>
                        </tr>
                        <tr>
                            <td><strong>セキュリティ・ガバナンス</strong></td>
                            <td class="score-excellent">最高レベル<br><span class="score-note">SOC2・ISO27001・完全監査</span></td>
                            <td class="score-fair">標準<br><span class="score-note">クラウドのみ</span></td>
                            <td class="score-good">高レベル<br><span class="score-note">Anthropic保証</span></td>
                            <td class="score-fair">標準<br><span class="score-note">プライバシーモード</span></td>
                            <td class="score-good">高レベル<br><span class="score-note">GitHub保証</span></td>
                            <td class="score-poor">基本的<br><span class="score-note">オープンソース</span></td>
                        </tr>
                        <tr>
                            <td><strong>コスト（月額/ユーザー）</strong></td>
                            <td class="score-good">$50-100<br><span class="score-note">エンタープライズ価格</span></td>
                            <td class="score-fair">$20-40<br><span class="score-note">API従量課金</span></td>
                            <td class="score-fair">$20-40<br><span class="score-note">API従量課金</span></td>
                            <td class="score-good">$20<br><span class="score-note">Pro版</span></td>
                            <td class="score-excellent">$10<br><span class="score-note">最安値</span></td>
                            <td class="score-excellent">無料-$20<br><span class="score-note">オープンソース</span></td>
                        </tr>
                        <tr>
                            <td><strong>FDE/営業向け機能</strong></td>
                            <td class="score-excellent">専用機能あり<br><span class="score-note">デモ作成・提案書生成</span></td>
                            <td class="score-poor">なし</td>
                            <td class="score-poor">なし</td>
                            <td class="score-poor">なし</td>
                            <td class="score-poor">なし</td>
                            <td class="score-poor">なし</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="tool-by-tool-comparison">
                <h3>ツール別詳細分析</h3>

                <div class="tool-comparison-section">
                    <h4>Bob vs OpenAI Codex</h4>
                    <div class="comparison-grid">
                        <div class="comparison-column">
                            <h5>Bobの優位性</h5>
                            <ul>
                                <li><strong>プロジェクト全体理解：</strong> Codexは単一ファイル中心だが、Bobは依存関係・アーキテクチャを完全理解</li>
                                <li><strong>マルチファイル編集：</strong> Codexは2-3ファイルが限界、Bobは10+ファイルを同時編集</li>
                                <li><strong>自律的実行：</strong> Codexは補完のみ、Bobは「ログイン機能追加」で全て完了</li>
                                <li><strong>エンタープライズ対応：</strong> Bobはオンプレミス展開可能、Codexはクラウドのみ</li>
                                <li><strong>監査ログ：</strong> Bobは完全な追跡可能性、Codexは限定的</li>
                            </ul>
                        </div>
                        <div class="comparison-column">
                            <h5>Codexの優位性</h5>
                            <ul>
                                <li><strong>コスト：</strong> API従量課金で柔軟（$20-40/月 vs Bob $50-100/月）</li>
                                <li><strong>多言語対応：</strong> 200+言語対応（Bobは主要言語に特化）</li>
                                <li><strong>OpenAIエコシステム：</strong> ChatGPT、DALL-Eなどと統合</li>
                            </ul>
                        </div>
                    </div>
                    <div class="use-case-recommendation">
                        <h5>使い分けの推奨</h5>
                        <p><strong>Bobを選ぶべき場合：</strong></p>
                        <ul>
                            <li>エンタープライズ開発（セキュリティ・ガバナンス重視）</li>
                            <li>複雑なプロジェクト（マルチファイル編集が必要）</li>
                            <li>FDE/営業活動（デモ作成・提案書生成）</li>
                            <li>オンプレミス展開が必要</li>
                        </ul>
                        <p><strong>Codexを選ぶべき場合：</strong></p>
                        <ul>
                            <li>個人開発・プロトタイピング</li>
                            <li>コスト重視</li>
                            <li>マイナー言語の使用</li>
                        </ul>
                    </div>
                </div>

                <div class="tool-comparison-section">
                    <h4>Bob vs Claude Code</h4>
                    <div class="comparison-grid">
                        <div class="comparison-column">
                            <h5>Bobの優位性</h5>
                            <ul>
                                <li><strong>VS Code統合：</strong> Bobはネイティブ統合、Claude Codeはブラウザベース</li>
                                <li><strong>自律的実行：</strong> Bobは完全自律、Claude Codeは対話的</li>
                                <li><strong>エンタープライズ機能：</strong> Bobはオンプレミス・監査ログ、Claude Codeは限定的</li>
                                <li><strong>FDE向け機能：</strong> Bobは専用機能あり、Claude Codeはなし</li>
                            </ul>
                        </div>
                        <div class="comparison-column">
                            <h5>Claude Codeの優位性</h5>
                            <ul>
                                <li><strong>長いコンテキスト：</strong> 200K tokens（Bobは128K tokens）</li>
                                <li><strong>自然な対話：</strong> Claudeの対話能力は業界トップクラス</li>
                                <li><strong>複雑な推論：</strong> アーキテクチャ設計などの高度な思考</li>
                            </ul>
                        </div>
                    </div>
                    <div class="use-case-recommendation">
                        <h5>使い分けの推奨</h5>
                        <p><strong>Bobを選ぶべき場合：</strong></p>
                        <ul>
                            <li>実装重視（コードを書く）</li>
                            <li>マルチファイル編集が必要</li>
                            <li>エンタープライズ環境</li>
                        </ul>
                        <p><strong>Claude Codeを選ぶべき場合：</strong></p>
                        <ul>
                            <li>コード理解・分析</li>
                            <li>アーキテクチャ設計</li>
                            <li>長文ドキュメントの処理</li>
                        </ul>
                    </div>
                </div>

                <div class="tool-comparison-section">
                    <h4>Bob vs Cursor</h4>
                    <div class="comparison-grid">
                        <div class="comparison-column">
                            <h5>Bobの優位性</h5>
                            <ul>
                                <li><strong>エンタープライズ対応：</strong> Bobは完全対応、Cursorは部分対応</li>
                                <li><strong>セキュリティ：</strong> Bobはオンプレミス・監査ログ、Cursorはプライバシーモードのみ</li>
                                <li><strong>自律的実行：</strong> Bobの方が強力</li>
                                <li><strong>FDE向け機能：</strong> Bobは専用機能あり</li>
                            </ul>
                        </div>
                        <div class="comparison-column">
                            <h5>Cursorの優位性</h5>
                            <ul>
                                <li><strong>UI/UX：</strong> 洗練されたインターフェース</li>
                                <li><strong>起動速度：</strong> 軽量で高速</li>
                                <li><strong>コスト：</strong> $20/月（Bobの半額以下）</li>
                                <li><strong>複数モデル対応：</strong> GPT-4、Claude、Geminiを切り替え可能</li>
                            </ul>
                        </div>
                    </div>
                    <div class="use-case-recommendation">
                        <h5>使い分けの推奨</h5>
                        <p><strong>Bobを選ぶべき場合：</strong></p>
                        <ul>
                            <li>エンタープライズ環境</li>
                            <li>セキュリティ・ガバナンス重視</li>
                            <li>監査が必要</li>
                        </ul>
                        <p><strong>Cursorを選ぶべき場合：</strong></p>
                        <ul>
                            <li>スタートアップ・個人開発</li>
                            <li>コスト重視</li>
                            <li>UI/UX重視</li>
                        </ul>
                    </div>
                </div>

                <div class="tool-comparison-section">
                    <h4>Bob vs GitHub Copilot</h4>
                    <div class="comparison-grid">
                        <div class="comparison-column">
                            <h5>Bobの優位性</h5>
                            <ul>
                                <li><strong>プロジェクト全体理解：</strong> Bobは完全理解、Copilotは周辺ファイルのみ</li>
                                <li><strong>マルチファイル編集：</strong> Bobは10+ファイル、Copilotは1ファイルのみ</li>
                                <li><strong>自律的実行：</strong> Bobは完全自律、Copilotは補完のみ</li>
                                <li><strong>コードレビュー：</strong> Bobは包括的、Copilotは限定的</li>
                            </ul>
                        </div>
                        <div class="comparison-column">
                            <h5>Copilotの優位性</h5>
                            <ul>
                                <li><strong>コード補完速度：</strong> リアルタイムで高速</li>
                                <li><strong>GitHub統合：</strong> シームレスな連携</li>
                                <li><strong>コスト：</strong> $10/月（最安値）</li>
                                <li><strong>普及率：</strong> 業界標準として広く使用</li>
                            </ul>
                        </div>
                    </div>
                    <div class="use-case-recommendation">
                        <h5>使い分けの推奨</h5>
                        <p><strong>Bobを選ぶべき場合：</strong></p>
                        <ul>
                            <li>複雑なタスク（機能追加、リファクタリング）</li>
                            <li>マルチファイル編集が必要</li>
                            <li>プロジェクト全体の理解が必要</li>
                        </ul>
                        <p><strong>Copilotを選ぶべき場合：</strong></p>
                        <ul>
                            <li>コード補完のみで十分</li>
                            <li>コスト最優先</li>
                            <li>GitHub中心の開発</li>
                        </ul>
                        <p class="pro-tip"><strong>Pro Tip:</strong> 多くのチームがBobとCopilotを併用しています。日常的な補完はCopilot、複雑なタスクはBobという使い分けが効率的です。</p>
                    </div>
                </div>

                <div class="tool-comparison-section">
                    <h4>Bob vs Roo Code/Cline</h4>
                    <div class="comparison-grid">
                        <div class="comparison-column">
                            <h5>Bobの優位性</h5>
                            <ul>
                                <li><strong>エンタープライズ対応：</strong> Bobは完全対応、Roo Codeは個人・小規模向け</li>
                                <li><strong>セキュリティ：</strong> Bobはオンプレミス・監査ログ、Roo Codeは基本的</li>
                                <li><strong>サポート：</strong> Bobは企業サポート、Roo Codeはコミュニティのみ</li>
                                <li><strong>FDE向け機能：</strong> Bobは専用機能あり</li>
                            </ul>
                        </div>
                        <div class="comparison-column">
                            <h5>Roo Code/Clineの優位性</h5>
                            <ul>
                                <li><strong>コスト：</strong> 無料-$20/月（Bobの1/5以下）</li>
                                <li><strong>オープンソース：</strong> カスタマイズ自由</li>
                                <li><strong>コミュニティ：</strong> 活発な開発コミュニティ</li>
                                <li><strong>技術的には同等：</strong> コア機能はBobと同レベル</li>
                            </ul>
                        </div>
                    </div>
                    <div class="use-case-recommendation">
                        <h5>使い分けの推奨</h5>
                        <p><strong>Bobを選ぶべき場合：</strong></p>
                        <ul>
                            <li>エンタープライズ環境</li>
                            <li>企業サポートが必要</li>
                            <li>セキュリティ・ガバナンス重視</li>
                            <li>FDE/営業活動</li>
                        </ul>
                        <p><strong>Roo Code/Clineを選ぶべき場合：</strong></p>
                        <ul>
                            <li>個人開発・小規模チーム</li>
                            <li>コスト最優先</li>
                            <li>カスタマイズが必要</li>
                            <li>オープンソース重視</li>
                        </ul>
                        <p class="important-note"><strong>重要：</strong> BobはRoo Clineをベースにしているため、コア機能は同等です。違いは「エンタープライズ向け機能」と「サポート体制」です。</p>
                    </div>
                </div>
            </div>

            <div class="decision-matrix">
                <h3>意思決定マトリクス：どのツールを選ぶべきか</h3>
                <table class="decision-table">
                    <thead>
                        <tr>
                            <th>あなたの状況</th>
                            <th>推奨ツール</th>
                            <th>理由</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>大企業のFDE/営業</td>
                            <td><strong>Bob</strong></td>
                            <td>エンタープライズ対応、FDE向け機能、セキュリティ</td>
                        </tr>
                        <tr>
                            <td>金融・医療など規制業界</td>
                            <td><strong>Bob</strong></td>
                            <td>オンプレミス展開、監査ログ、コンプライアンス対応</td>
                        </tr>
                        <tr>
                            <td>複雑なエンタープライズ開発</td>
                            <td><strong>Bob</strong></td>
                            <td>プロジェクト全体理解、マルチファイル編集</td>
                        </tr>
                        <tr>
                            <td>スタートアップ・個人開発</td>
                            <td><strong>Cursor</strong> or <strong>Roo Code</strong></td>
                            <td>コスト効率、十分な機能</td>
                        </tr>
                        <tr>
                            <td>日常的なコード補完のみ</td>
                            <td><strong>GitHub Copilot</strong></td>
                            <td>最安値、高速、十分な精度</td>
                        </tr>
                        <tr>
                            <td>コード理解・分析重視</td>
                            <td><strong>Claude Code</strong></td>
                            <td>長いコンテキスト、優れた推論能力</td>
                        </tr>
                        <tr>
                            <td>プロトタイピング・実験</td>
                            <td><strong>OpenAI Codex</strong></td>
                            <td>柔軟なAPI、多言語対応</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    }
];

// コピー機能
function copyPrompt(button) {
    const promptBox = button.previousElementSibling;
    const text = promptBox.querySelector('pre code').textContent;
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = '✅ コピーしました！';
        setTimeout(() => {
            button.textContent = '📋 コピー';
        }, 2000);
    });
}
// Made with Bob

// Made with Bob