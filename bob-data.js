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
    },
    {
        id: 'usage-guide',
        title: 'Bob使い方完全ガイド',
        icon: '📚',
        description: 'Bobの全機能を使いこなすための実践的ガイド',
        content: `
            <h2>Bob使い方完全ガイド</h2>
            <p>Bobのポテンシャルを最大限に引き出すための包括的な使い方ガイドです。知らない機能を発見し、生産性を劇的に向上させましょう。</p>

            <div class="usage-section">
                <h3>🚀 基本操作：Bobを起動する</h3>
                <div class="step-by-step">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>VS Codeでプロジェクトを開く</h4>
                            <p>Bobはプロジェクト全体を理解するため、必ずプロジェクトルートを開いてください。</p>
                            <div class="code-example">
                                <pre><code>File → Open Folder → プロジェクトディレクトリを選択</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Bobパネルを開く</h4>
                            <p>サイドバーのBobアイコンをクリック、または以下のショートカットを使用：</p>
                            <div class="shortcut-box">
                                <span class="shortcut">Mac: <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd></span>
                                <span class="shortcut">Windows: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd></span>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>タスクを指示する</h4>
                            <p>自然言語でタスクを入力します。具体的であればあるほど、精度が高まります。</p>
                            <div class="example-prompts">
                                <div class="prompt-example good">
                                    <span class="label">✅ 良い例</span>
                                    <p>「ユーザー認証機能を追加してください。JWT認証を使用し、ログイン・ログアウト・トークン更新のエンドポイントを作成。フロントエンドにはログインフォームとトークン管理を実装。」</p>
                                </div>
                                <div class="prompt-example bad">
                                    <span class="label">❌ 悪い例</span>
                                    <p>「ログイン機能を作って」</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>💡 高度な機能：知られざるBobの力</h3>

                <div class="feature-card">
                    <h4>1. コンテキスト指定：特定のファイルに焦点を当てる</h4>
                    <p>Bobに特定のファイルを参照させることで、より正確な実装が可能です。</p>
                    <div class="feature-usage">
                        <h5>使い方</h5>
                        <div class="code-example">
                            <pre><code>@ファイル名 タスク内容

例：
@auth.js @user.model.js
この2つのファイルを参考に、パスワードリセット機能を追加してください。</code></pre>
                        </div>
                        <h5>実践例</h5>
                        <p><strong>シナリオ：</strong> 既存の認証ロジックを参考に、2要素認証を追加したい</p>
                        <div class="code-example">
                            <pre><code>@auth.js @middleware/auth.middleware.js
既存の認証フローを維持しつつ、2要素認証（TOTP）を追加してください。
- Google Authenticatorと互換性のあるQRコード生成
- 認証コード検証エンドポイント
- 既存ユーザーの2FA有効化フロー</code></pre>
                        </div>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>2. モード切り替え：タスクに応じた最適化</h4>
                    <p>Bobには複数のモードがあり、タスクの性質に応じて切り替えることで効率が向上します。</p>
                    <div class="mode-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>モード</th>
                                    <th>用途</th>
                                    <th>切り替え方法</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Code Mode</strong></td>
                                    <td>コード生成・編集</td>
                                    <td><code>/mode code</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Review Mode</strong></td>
                                    <td>コードレビュー・品質チェック</td>
                                    <td><code>/mode review</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Explain Mode</strong></td>
                                    <td>コード解説・ドキュメント生成</td>
                                    <td><code>/mode explain</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Debug Mode</strong></td>
                                    <td>バグ修正・トラブルシューティング</td>
                                    <td><code>/mode debug</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Architect Mode</strong></td>
                                    <td>システム設計・アーキテクチャ提案</td>
                                    <td><code>/mode architect</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mode-example">
                        <h5>実践例：Review Modeの活用</h5>
                        <div class="code-example">
                            <pre><code>/mode review
このプロジェクトのセキュリティ脆弱性をチェックしてください。
特に以下を重点的に：
- SQL Injection
- XSS
- CSRF
- 認証・認可の不備
- 機密情報のハードコーディング</code></pre>
                        </div>
                        <p><strong>結果：</strong> Bobが全ファイルをスキャンし、脆弱性レポートを生成します。</p>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>3. マルチステップタスク：複雑な作業を分解</h4>
                    <p>大規模なタスクは、Bobに段階的に実行させることで精度が向上します。</p>
                    <div class="feature-usage">
                        <h5>ステップバイステップ指示の例</h5>
                        <div class="code-example">
                            <pre><code>ステップ1: まず、既存のデータベーススキーマを分析してください
ステップ2: 次に、新しいテーブル設計を提案してください
ステップ3: 承認後、マイグレーションファイルを作成してください
ステップ4: 最後に、対応するモデルとリポジトリを実装してください</code></pre>
                        </div>
                        <p><strong>メリット：</strong> 各ステップで確認・修正ができるため、大規模な変更でも安全です。</p>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>4. テンプレート活用：繰り返しタスクの効率化</h4>
                    <p>頻繁に行うタスクはテンプレート化することで、一貫性と効率を向上させます。</p>
                    <div class="template-examples">
                        <div class="template-box">
                            <h5>テンプレート例：RESTful APIエンドポイント追加</h5>
                            <div class="code-example">
                                <pre><code>新しいRESTful APIエンドポイントを追加してください：

リソース名: [リソース名]
エンドポイント:
- GET /api/[リソース名] - 一覧取得
- GET /api/[リソース名]/:id - 詳細取得
- POST /api/[リソース名] - 新規作成
- PUT /api/[リソース名]/:id - 更新
- DELETE /api/[リソース名]/:id - 削除

要件:
- バリデーション実装
- エラーハンドリング
- 認証・認可チェック
- OpenAPI仕様書生成
- ユニットテスト作成</code></pre>
                            </div>
                        </div>
                        <div class="template-box">
                            <h5>テンプレート例：Reactコンポーネント作成</h5>
                            <div class="code-example">
                                <pre><code>新しいReactコンポーネントを作成してください：

コンポーネント名: [コンポーネント名]
場所: src/components/[コンポーネント名]/

要件:
- TypeScript使用
- Propsの型定義
- Storybookストーリー作成
- ユニットテスト（Jest + React Testing Library）
- アクセシビリティ対応（ARIA属性）
- レスポンシブデザイン</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>5. コードレビュー機能：品質向上の自動化</h4>
                    <p>Bobの自動コードレビュー機能は、人間のレビュアーの負担を大幅に削減します。</p>
                    <div class="review-features">
                        <h5>レビュー項目</h5>
                        <ul>
                            <li><strong>コード品質：</strong> 複雑度、重複コード、命名規則</li>
                            <li><strong>セキュリティ：</strong> 脆弱性、機密情報漏洩</li>
                            <li><strong>パフォーマンス：</strong> 非効率なアルゴリズム、メモリリーク</li>
                            <li><strong>ベストプラクティス：</strong> 言語・フレームワーク固有の推奨事項</li>
                            <li><strong>テストカバレッジ：</strong> 不足しているテストケース</li>
                        </ul>
                        <h5>使い方</h5>
                        <div class="code-example">
                            <pre><code>/mode review
プルリクエスト #123 をレビューしてください。
特に以下を重点的に：
- セキュリティ脆弱性
- パフォーマンスの問題
- テストカバレッジ</code></pre>
                        </div>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>6. ドキュメント自動生成：時間のかかる作業を自動化</h4>
                    <p>Bobはコードから自動的にドキュメントを生成し、常に最新の状態を保ちます。</p>
                    <div class="doc-types">
                        <h5>生成可能なドキュメント</h5>
                        <div class="doc-grid">
                            <div class="doc-item">
                                <h6>API仕様書</h6>
                                <p>OpenAPI/Swagger形式で自動生成</p>
                                <div class="code-example">
                                    <pre><code>/mode explain
このプロジェクトのAPI仕様書をOpenAPI 3.0形式で生成してください</code></pre>
                                </div>
                            </div>
                            <div class="doc-item">
                                <h6>README.md</h6>
                                <p>プロジェクト概要、セットアップ手順、使い方</p>
                                <div class="code-example">
                                    <pre><code>/mode explain
このプロジェクトの包括的なREADME.mdを作成してください。
含めるべき内容：
- プロジェクト概要
- 技術スタック
- セットアップ手順
- 使い方
- API仕様
- 貢献ガイドライン</code></pre>
                                </div>
                            </div>
                            <div class="doc-item">
                                <h6>アーキテクチャ図</h6>
                                <p>Mermaid形式でシステム構成を可視化</p>
                                <div class="code-example">
                                    <pre><code>/mode architect
このプロジェクトのアーキテクチャ図をMermaid形式で作成してください</code></pre>
                                </div>
                            </div>
                            <div class="doc-item">
                                <h6>コードコメント</h6>
                                <p>JSDoc、Docstring等の自動追加</p>
                                <div class="code-example">
                                    <pre><code>/mode explain
全ての関数にJSDocコメントを追加してください</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>7. リファクタリング：コード品質の継続的改善</h4>
                    <p>Bobは既存コードを分析し、改善提案と自動リファクタリングを提供します。</p>
                    <div class="refactoring-types">
                        <h5>リファクタリングパターン</h5>
                        <div class="refactoring-grid">
                            <div class="refactoring-item">
                                <h6>関数分割</h6>
                                <p>長い関数を小さな関数に分割</p>
                                <div class="code-example">
                                    <pre><code>この関数が長すぎます。Single Responsibility Principleに従って分割してください</code></pre>
                                </div>
                            </div>
                            <div class="refactoring-item">
                                <h6>重複コード削除</h6>
                                <p>DRY原則に従って共通化</p>
                                <div class="code-example">
                                    <pre><code>プロジェクト全体で重複しているコードを見つけて、共通関数に抽出してください</code></pre>
                                </div>
                            </div>
                            <div class="refactoring-item">
                                <h6>デザインパターン適用</h6>
                                <p>適切なデザインパターンを提案・実装</p>
                                <div class="code-example">
                                    <pre><code>このコードにFactory Patternを適用してください</code></pre>
                                </div>
                            </div>
                            <div class="refactoring-item">
                                <h6>型安全性向上</h6>
                                <p>TypeScript型定義の強化</p>
                                <div class="code-example">
                                    <pre><code>全てのany型を適切な型に置き換えてください</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="feature-card">
                    <h4>8. テスト自動生成：品質保証の効率化</h4>
                    <p>Bobは既存コードから自動的にテストケースを生成し、カバレッジを向上させます。</p>
                    <div class="test-generation">
                        <h5>生成可能なテスト</h5>
                        <ul>
                            <li><strong>ユニットテスト：</strong> 関数・メソッド単位のテスト</li>
                            <li><strong>統合テスト：</strong> モジュール間の連携テスト</li>
                            <li><strong>E2Eテスト：</strong> ユーザーシナリオベースのテスト</li>
                            <li><strong>パフォーマンステスト：</strong> 負荷テスト・ベンチマーク</li>
                        </ul>
                        <h5>実践例</h5>
                        <div class="code-example">
                            <pre><code>@auth.service.js
この認証サービスの包括的なユニットテストを作成してください。
テストケース：
- 正常系：有効な認証情報でログイン成功
- 異常系：無効な認証情報でログイン失敗
- 異常系：アカウントロック後のログイン試行
- 境界値：パスワード長の最小・最大
- セキュリティ：SQLインジェクション試行
- パフォーマンス：1000回連続ログインの処理時間</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>🎯 FDE/営業向け特化機能</h3>

                <div class="fde-feature-card">
                    <h4>1. 顧客デモの即時作成</h4>
                    <p>商談中に顧客の要望を聞きながら、その場でプロトタイプを作成できます。</p>
                    <div class="demo-scenario">
                        <h5>シナリオ：製造業の在庫管理システムデモ</h5>
                        <div class="scenario-steps">
                            <div class="scenario-step">
                                <span class="step-label">顧客の要望</span>
                                <p>「在庫が一定数を下回ったら自動でアラートを出したい」</p>
                            </div>
                            <div class="scenario-step">
                                <span class="step-label">Bobへの指示</span>
                                <div class="code-example">
                                    <pre><code>在庫管理システムのプロトタイプを作成してください：

機能：
1. 在庫一覧表示（商品名、在庫数、閾値）
2. 在庫数が閾値を下回ったら赤色で表示
3. アラート通知機能（メール・Slack）
4. 在庫追加・削減のフォーム

技術スタック：
- フロントエンド：React + Material-UI
- バックエンド：Node.js + Express
- データベース：SQLite（デモ用）

15分以内に動作するデモを作成してください</code></pre>
                                </div>
                            </div>
                            <div class="scenario-step">
                                <span class="step-label">結果</span>
                                <p>✅ 15分後、完全に動作するデモが完成<br>
                                ✅ 顧客がその場で操作して確認<br>
                                ✅ 即座にPoC契約を獲得</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fde-feature-card">
                    <h4>2. 技術提案書の自動生成</h4>
                    <p>実装したコードから、営業資料を自動生成します。</p>
                    <div class="proposal-generation">
                        <h5>生成される提案書の内容</h5>
                        <ul>
                            <li><strong>エグゼクティブサマリー：</strong> 経営層向けの要約</li>
                            <li><strong>技術アーキテクチャ：</strong> システム構成図</li>
                            <li><strong>機能一覧：</strong> 実装された機能の詳細</li>
                            <li><strong>セキュリティ対策：</strong> 実装されたセキュリティ機能</li>
                            <li><strong>スケーラビリティ：</strong> 拡張性の説明</li>
                            <li><strong>ROI試算：</strong> 投資対効果の計算</li>
                        </ul>
                        <h5>使い方</h5>
                        <div class="code-example">
                            <pre><code>/mode explain
このプロジェクトの技術提案書を作成してください。
対象：経営層（非技術者）
形式：PowerPoint用のMarkdown
含めるべき内容：
- エグゼクティブサマリー
- ビジネス価値
- 技術的優位性
- セキュリティ・コンプライアンス
- 実装スケジュール
- コスト試算</code></pre>
                        </div>
                    </div>
                </div>

                <div class="fde-feature-card">
                    <h4>3. セールストーク生成</h4>
                    <p>技術的な価値をビジネス言語に変換し、営業トークを生成します。</p>
                    <div class="sales-talk-example">
                        <h5>技術 → ビジネス言語変換の例</h5>
                        <table class="translation-table">
                            <thead>
                                <tr>
                                    <th>技術的表現</th>
                                    <th>ビジネス言語</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>「マイクロサービスアーキテクチャを採用」</td>
                                    <td>「システムの一部が故障しても、他の機能は正常に動作し続けます。ダウンタイムによる機会損失を最小化できます」</td>
                                </tr>
                                <tr>
                                    <td>「Kubernetes上でコンテナオーケストレーション」</td>
                                    <td>「アクセス急増時に自動でサーバーを増やし、落ち着いたら減らします。無駄なコストを削減しながら、常に最適なパフォーマンスを維持します」</td>
                                </tr>
                                <tr>
                                    <td>「CI/CDパイプラインを構築」</td>
                                    <td>「新機能のリリースが週1回から1日3回に加速します。競合より早く市場に投入できます」</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5>Bobへの指示例</h5>
                        <div class="code-example">
                            <pre><code>このプロジェクトの技術的特徴を、非技術者の経営層に説明するセールストークを作成してください。
重点：
- ビジネス価値（コスト削減、売上向上、リスク低減）
- 競合優位性
- 具体的な数値（ROI、削減時間、向上率）
- 成功事例の引用</code></pre>
                        </div>
                    </div>
                </div>

                <div class="fde-feature-card">
                    <h4>4. ROI試算の自動化</h4>
                    <p>実装コストと削減効果を自動計算し、投資対効果を明確化します。</p>
                    <div class="roi-calculation">
                        <h5>計算される項目</h5>
                        <ul>
                            <li><strong>開発コスト：</strong> 工数 × 単価</li>
                            <li><strong>運用コスト：</strong> インフラ費用、保守費用</li>
                            <li><strong>削減効果：</strong> 業務時間削減、エラー削減</li>
                            <li><strong>売上向上：</strong> 新機能による収益増加</li>
                            <li><strong>回収期間：</strong> 投資回収までの期間</li>
                        </ul>
                        <h5>使い方</h5>
                        <div class="code-example">
                            <pre><code>このプロジェクトのROI試算を作成してください。

前提条件：
- 開発期間：3ヶ月
- 開発チーム：5名
- 平均単価：¥800,000/月
- 対象業務：受注処理（現在1件30分）
- 月間受注件数：1,000件
- 担当者数：10名
- 平均時給：¥3,000

期待効果：
- 受注処理時間を30分→5分に短縮
- エラー率を5%→0.5%に削減</code></pre>
                        </div>
                        <div class="roi-result">
                            <h5>Bobが生成するROI試算例</h5>
                            <div class="roi-table">
                                <table>
                                    <tr>
                                        <th>項目</th>
                                        <th>金額</th>
                                    </tr>
                                    <tr>
                                        <td>開発コスト</td>
                                        <td>¥12,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>年間削減効果</td>
                                        <td>¥15,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>投資回収期間</td>
                                        <td class="highlight">9.6ヶ月</td>
                                    </tr>
                                    <tr>
                                        <td>3年間ROI</td>
                                        <td class="highlight">275%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>⚡ 生産性を最大化するTips</h3>

                <div class="tips-grid">
                    <div class="tip-card">
                        <h4>Tip 1: プロジェクトコンテキストを最初に設定</h4>
                        <p>Bobに最初にプロジェクトの全体像を理解させることで、以降の精度が向上します。</p>
                        <div class="code-example">
                            <pre><code>このプロジェクトについて説明します：
- 目的：ECサイトの構築
- 技術スタック：React, Node.js, PostgreSQL
- アーキテクチャ：マイクロサービス
- 開発規約：ESLint, Prettier使用
- テスト：Jest, Cypress

この情報を記憶して、以降のタスクで参照してください</code></pre>
                        </div>
                    </div>

                    <div class="tip-card">
                        <h4>Tip 2: 段階的な承認フロー</h4>
                        <p>大規模な変更は段階的に承認することで、リスクを最小化します。</p>
                        <div class="code-example">
                            <pre><code>ステップ1: まず設計案を提示してください（実装はまだしない）
→ 承認後
ステップ2: 承認されたので実装してください</code></pre>
                        </div>
                    </div>

                    <div class="tip-card">
                        <h4>Tip 3: エラーハンドリングを明示</h4>
                        <p>エラー処理の方針を明確にすることで、堅牢なコードが生成されます。</p>
                        <div class="code-example">
                            <pre><code>エラーハンドリング方針：
- 全てのAPI呼び出しにtry-catchを実装
- エラーログは構造化ログで出力
- ユーザーにはフレンドリーなエラーメッセージ
- 開発者には詳細なスタックトレース</code></pre>
                        </div>
                    </div>

                    <div class="tip-card">
                        <h4>Tip 4: パフォーマンス要件を指定</h4>
                        <p>パフォーマンス要件を明示することで、最適化されたコードが生成されます。</p>
                        <div class="code-example">
                            <pre><code>パフォーマンス要件：
- API応答時間：200ms以内
- ページロード時間：2秒以内
- 同時接続数：10,000ユーザー
- データベースクエリ：N+1問題を回避</code></pre>
                        </div>
                    </div>

                    <div class="tip-card">
                        <h4>Tip 5: セキュリティ要件を明示</h4>
                        <p>セキュリティ要件を指定することで、安全なコードが生成されます。</p>
                        <div class="code-example">
                            <pre><code>セキュリティ要件：
- 全ての入力値をサニタイズ
- SQLインジェクション対策（プリペアドステートメント）
- XSS対策（エスケープ処理）
- CSRF対策（トークン検証）
- 機密情報は環境変数で管理</code></pre>
                        </div>
                    </div>

                    <div class="tip-card">
                        <h4>Tip 6: コーディング規約を共有</h4>
                        <p>プロジェクトのコーディング規約をBobに伝えることで、一貫性が保たれます。</p>
                        <div class="code-example">
                            <pre><code>コーディング規約：
- 命名：camelCase（変数・関数）、PascalCase（クラス）
- インデント：2スペース
- 行の長さ：最大100文字
- コメント：JSDocで全ての関数に記述
- import順序：外部ライブラリ → 内部モジュール</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>🚨 よくある失敗と対策</h3>

                <div class="failure-cases">
                    <div class="failure-card">
                        <h4>失敗例 1: 曖昧な指示</h4>
                        <div class="failure-example">
                            <div class="bad-example">
                                <span class="label">❌ 悪い例</span>
                                <p>「ログイン機能を作って」</p>
                                <p class="problem">問題：認証方式、UI、エラーハンドリングなどが不明確</p>
                            </div>
                            <div class="good-example">
                                <span class="label">✅ 良い例</span>
                                <p>「JWT認証を使用したログイン機能を作成してください。メールアドレスとパスワードでログイン、トークンの有効期限は24時間、リフレッシュトークン機能も実装。フロントエンドはReactでログインフォームを作成し、トークンはlocalStorageに保存。」</p>
                            </div>
                        </div>
                    </div>

                    <div class="failure-card">
                        <h4>失敗例 2: 一度に大量のタスクを指示</h4>
                        <div class="failure-example">
                            <div class="bad-example">
                                <span class="label">❌ 悪い例</span>
                                <p>「ECサイト全体を作って」</p>
                                <p class="problem">問題：範囲が広すぎて、Bobが混乱する</p>
                            </div>
                            <div class="good-example">
                                <span class="label">✅ 良い例</span>
                                <p>段階的に指示：<br>
                                1. まず商品一覧ページを作成<br>
                                2. 次に商品詳細ページ<br>
                                3. その後カート機能<br>
                                4. 最後に決済機能</p>
                            </div>
                        </div>
                    </div>

                    <div class="failure-card">
                        <h4>失敗例 3: プロジェクトコンテキストを無視</h4>
                        <div class="failure-example">
                            <div class="bad-example">
                                <span class="label">❌ 悪い例</span>
                                <p>既存のReactプロジェクトで「Vueで実装して」</p>
                                <p class="problem">問題：プロジェクトの技術スタックと矛盾</p>
                            </div>
                            <div class="good-example">
                                <span class="label">✅ 良い例</span>
                                <p>「既存のReactプロジェクトに合わせて、Reactで実装してください」</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>📊 Bobの効果測定</h3>
                <p>Bobの導入効果を定量的に測定し、継続的な改善に活用しましょう。</p>

                <div class="metrics-tracking">
                    <h4>測定すべきKPI</h4>
                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <h5>開発速度</h5>
                            <ul>
                                <li>機能実装時間の短縮率</li>
                                <li>コード行数/時間</li>
                                <li>プルリクエスト数の増加</li>
                            </ul>
                        </div>
                        <div class="kpi-card">
                            <h5>コード品質</h5>
                            <ul>
                                <li>バグ発生率の減少</li>
                                <li>コードレビュー指摘事項の減少</li>
                                <li>テストカバレッジの向上</li>
                            </ul>
                        </div>
                        <div class="kpi-card">
                            <h5>ビジネス成果</h5>
                            <ul>
                                <li>デモ作成時間の短縮</li>
                                <li>商談成約率の向上</li>
                                <li>顧客満足度の向上</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>🔌 API接続の実装方法</h3>
                <p>BobでAPI接続を実装する際の実践的なガイドです。REST API、GraphQL、WebSocketなど、様々なAPI接続パターンに対応できます。</p>

                <div class="api-guide">
                    <h4>📡 REST API接続の基本</h4>
                    <div class="step-by-step">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h5>Bobに指示する</h5>
                                <div class="prompt-box">
                                    <p><strong>プロンプト例：</strong></p>
                                    <pre><code>「https://api.example.com/users からユーザー一覧を取得するAPIクライアントを作成してください。
- axiosを使用
- エラーハンドリングを実装
- ローディング状態の管理
- TypeScriptで型定義も作成」</code></pre>
                                </div>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h5>生成されたコードの例</h5>
                                <pre><code>// api/userApi.ts
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

export const userApi = {
  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get('https://api.example.com/users');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  }
};</code></pre>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h5>環境変数の設定</h5>
                                <p>Bobに「.envファイルを作成してAPI URLを環境変数化して」と指示すると：</p>
                                <pre><code>// .env
VITE_API_BASE_URL=https://api.example.com

// api/config.ts
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;</code></pre>
                            </div>
                        </div>
                    </div>

                    <h4>🔐 認証付きAPI接続</h4>
                    <div class="auth-api-example">
                        <p><strong>プロンプト例：</strong></p>
                        <div class="prompt-box">
                            <pre><code>「JWT認証を使用したAPI接続を実装してください。
- ログイン時にトークンを取得してlocalStorageに保存
- すべてのAPI リクエストにAuthorizationヘッダーを自動付与
- トークン期限切れ時は自動でリフレッシュ
- 401エラー時はログイン画面にリダイレクト」</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="usage-section">
                <h3>🎨 イラスト・デザインをBobで実装する方法</h3>
                <p>デザインツールで作成したイラストやデザインを、Bobを使ってWebサイトに反映させる実践的な方法です。</p>

                <div class="design-implementation">
                    <h4>方法1: 画像ファイルとして実装</h4>
                    <div class="step-by-step">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h5>画像を準備</h5>
                                <p>Figma、Illustrator、Photoshopなどで作成したイラストをエクスポート：</p>
                                <ul>
                                    <li><strong>PNG：</strong> 透過が必要な場合（ロゴ、アイコンなど）</li>
                                    <li><strong>SVG：</strong> 拡大縮小が必要な場合（アイコン、イラスト）</li>
                                    <li><strong>WebP：</strong> 写真やイラストで軽量化したい場合</li>
                                </ul>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h5>Bobに指示</h5>
                                <div class="prompt-box">
                                    <pre><code>「/public/images/hero-illustration.svg を使用して、
ヒーローセクションに以下のレイアウトで配置してください：
- 左側にテキスト（タイトル、説明、CTAボタン）
- 右側にイラスト
- レスポンシブ対応（モバイルでは縦並び）
- イラストはホバー時に少し浮き上がるアニメーション」</code></pre>
                                </div>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h5>生成されたコード例</h5>
                                <pre><code><div class="hero">
  <div class="hero-content">
    <h1>あなたのサービス名</h1>
    <p>サービスの説明文</p>
    <button>今すぐ始める</button>
  </div>
  <div class="hero-illustration">
    <img src="/images/hero-illustration.svg" alt="Hero Illustration">
  </div>
</div>

<style>
.hero-illustration img {
  transition: transform 0.3s ease;
}
.hero-illustration img:hover {
  transform: translateY(-10px);
}
</style></code></pre>
                            </div>
                        </div>
                    </div>

                    <h4>方法2: SVGコードとして直接実装</h4>
                    <div class="svg-implementation">
                        <p>SVGファイルの中身をコピーして、Bobに渡す方法：</p>
                        <div class="step-by-step">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>SVGコードを取得</h5>
                                    <p>Figmaの場合：オブジェクトを選択 → 右クリック → Copy as SVG</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>Bobに指示</h5>
                                    <div class="prompt-box">
                                        <pre><code>「以下のSVGコードをReactコンポーネント化してください。
- propsでサイズと色を変更可能に
- TypeScriptで型定義
- アクセシビリティ対応（aria-label追加）

[ここにSVGコードを貼り付け]」</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4>方法3: デザインシステムの実装</h4>
                    <div class="design-system">
                        <p><strong>プロンプト例：</strong></p>
                        <div class="prompt-box">
                            <pre><code>「Figmaのデザインシステムを基に、以下のコンポーネントを作成してください：
- カラーパレット（Primary: #0066FF, Secondary: #00CC88）
- タイポグラフィ（見出し、本文、キャプション）
- ボタンコンポーネント（Primary、Secondary、Outline）
- カードコンポーネント
- すべてTailwind CSSで実装」</code></pre>
                        </div>
                    </div>

                    <h4>💡 実践的なTips</h4>
                    <div class="tips-grid">
                        <div class="tip-card">
                            <h5>🎯 画像最適化</h5>
                            <p>「画像を最適化してください。WebP形式に変換し、遅延読み込みを実装」とBobに指示</p>
                        </div>
                        <div class="tip-card">
                            <h5>📱 レスポンシブ画像</h5>
                            <p>「srcsetを使用して、デバイスサイズに応じた画像を配信」と指示</p>
                        </div>
                        <div class="tip-card">
                            <h5>🎨 CSSアニメーション</h5>
                            <p>「イラストにスクロールアニメーションを追加。画面に入ったらフェードイン」と指示</p>
                        </div>
                        <div class="tip-card">
                            <h5>♿ アクセシビリティ</h5>
                            <p>「すべての画像にalt属性を追加し、装飾的な画像はaria-hidden="true"を設定」と指示</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'extensions',
        title: 'おすすめVS Code拡張機能',
        icon: '🔌',
        description: '開発効率を劇的に向上させる20の必須拡張機能',
        contentFile: 'bob-extensions-content.html'
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