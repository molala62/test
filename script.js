/* ===== 1. 質問データ ===== */
const questions = [
  "配信まだ？ 毎日してほしいと頻繁に言ってくる",
  "誰と一緒にいたの？と私生活に踏み込んでくる",
  "他の配信者とコラボしないで、など独占的",
  "○○駅で見たかも、など住まいの特定を試みる",
  "元気なかった？声のトーンを細かく指摘する",
  "いつかリアルで会おうねと接触をほのめかす",
  "他の人より俺の方が理解してる等特別視する",
  "読んでくれないならもう投げないと圧をかける",
  "なんでコメント読まないの？と不満を口にする",
  "昨日のツイート意味深だった？と詮索してくる",
  "他のリスナーを攻撃・排除しようとする",
  "○○のこと全部知ってる等、監視アピールをする",
  "家族構成や暮らしに踏み込んだ質問をする",
  "名字は？過去の学校は？など詮索する",
  "注意や距離を置かれると情緒不安定になる",
  "イベント行ってた？など現地行動を特定しようとする",
  "君がいないと生きがいがない等、依存的な発言",
  "サブ垢からもコメント・DMしてくる",
  "夢に出てきたなど、妄想的な発言がある",
  "奪われるくらいなら…など支配的な表現がある"
];
/* カテゴリ割り当て（4問ずつ）*/
const categories = ["境界線","依存","支配","脅迫","監視"].flatMap(c=>Array(4).fill(c));

/* ===== 2. 画像マップ ===== */
const imageMap = {
  "リアル掌握型":"https://i.imgur.com/lJZI018.png",
  "情緒爆弾型":"https://i.imgur.com/KgRYMtQ.png",
  "支配レーダー型":"https://i.imgur.com/ZVYOYly.png",
  "密着ストーキング型":"https://i.imgur.com/QkWJhA4.png",
  "愛着侵入型":"https://i.imgur.com/WJn65W0.png",
  "複合リスク型":"https://i.imgur.com/ysD7HzF.png",
  "ドアガチャ型":"https://i.imgur.com/ocrOG9u.png",
  "リモコン操作型":"https://i.imgur.com/UhRqVKS.png",
  "情緒操作型":"https://i.imgur.com/CunWboX.png",
  "隠しカメラ型":"https://i.imgur.com/fZsDolK.png",
  "境界線やや接近型":"https://i.imgur.com/E2GQoBQ.png",
  "応援圧強め型":"https://i.imgur.com/1n5llxQ.png",
  "リクエスト依存型":"https://i.imgur.com/3ySntnm.png",
  "馴れ合いコメント型":"https://i.imgur.com/Wxuv5Yx.png",
  "質問詰め型":"https://i.imgur.com/eHexfvZ.png",
  "愛情つよつよ型":"https://i.imgur.com/2LuIOBZ.png",
  "健全リスナー型":"https://i.imgur.com/JIlbL2G.png"
};

/* ===== 3. タイプ詳細（17タイプ） ===== */
/* 文字数の都合でダイジェスト形式。必要に応じて内容を調整してください。*/
const typeDetails = {
  "リアル掌握型":{
    category:"境界線 × 支配",
    serif:["近くにいるんだから会いたいな","今度のイベント来る？","リアルで会おうよ"],
      /* ▼ここをコピペで置き換え */
  summary: "配信者の現実世界に深く踏み込もうとするタイプ。距離感を詰めて行動や人間関係に介入しようとする傾向があり、リアル接触を目論むことも。軽い発言に見えても、背後に強い支配欲が潜んでいる可能性があるため注意が必要。",
  /* ▲ここまで */
  advice: [
    "個人情報やリアルの予定は共有しすぎない",
    "軽いノリでも会おうとする発言には毅然と拒否を",
    "違和感がある時は即座に距離を置く"
  ]
},
  "情緒爆弾型":{
    category:"依存 × 脅迫",
    serif:["無視されたら死にたくなる…","かまってくれないと爆発しちゃうよ","好きなのにどうして…"],
    summary:"強い依存と感情の揺さぶりで、配信者の反応を引き出そうとするタイプ。構ってもらえないと極端な言動に走りやすく、罪悪感を刺激してコントロールしようとする傾向がある。愛情を理由に過剰な要求をしてくるため、関係が負担になりやすい",
    advice:[
    "過剰に共感しすぎず、感情の境界線を保つ",
    "配信者自身のペースを大切にして無理に応えない",
    "一貫した態度を取ることで振り回されにくくなる"
  ]
  },
  "支配レーダー型":{
    category:"支配 × 監視",
    serif:["今日はこのテーマで！","あの人と絡まないで","君のやり方間違ってる"],
    summary:"配信の内容や交友関係に口出しし、自分の思い通りにしようとするタイプ。「応援」を装って配信方針に干渉し、他のリスナーを排除しようとすることも。正義感や忠告に見えて、実は強い支配欲があるケースも少なくない。",
    advice:[
    "要望すべてに応える必要はないと明確に伝える",
    "他人を排除しようとする言動にはルールで対処",
    "コメント制限や注意喚起を適切に行う"
  ]
  },
  "密着ストーキング型":{
    category:"依存 × 監視",
    serif:["声が違う…何かあった？","配信見てたよ全部","コメント全部したのに…"],
    summary:"感情的に密着し、常に配信者の様子を観察・把握していないと不安になるタイプ。反応がないと不満を感じたり、繰り返し確認行動に出ることがある。好意に見えても、実際には依存心や監視欲が強い傾向がある。",
    advice:[
           "接触頻度を下げ距離を保つ。",
           "毎回反応しなくてもよいというスタンスを持つ。",
           "リアルタイムでの配信に縛られすぎない"
      ]
  },
  "愛着侵入型":{
    category:"境界線 × 依存",
    serif:["全部知りたいの","私生活もっと教えて","リアルで応援するね"],
    summary:"好意や親しみを強調し、配信者の私生活や内面に深く入り込もうとするタイプ。善意に見えるアプローチの裏で、プライバシーの境界を曖昧にしてしまい、次第にコントロール的になることもある。",
      advice:[
    "公開情報と非公開の線引きを明確にする",
    "個人的な情報開示には慎重になる",
    "親しみ”に応じすぎない意識を持つ"
  ]  
  },
  "複合リスク型":{
    category:"複数カテゴリ高リスク",
    serif:["誰にも渡したくない","全部わかってるよ","反応くれないと壊れそう"],
   summary: "支配・依存・脅迫・監視など複数の危険傾向が同時に高得点となる非常に高リスクなタイプ。強い執着心から配信者をコントロールしようとしたり、拒絶されると逆上して攻撃的に転じる恐れがあるため、早期の線引きと対処が不可欠。",
  advice: [
    "境界線を明確に示し、関わり方を最小限に制限する",
    "必要に応じてミュート・ブロック・通報をためらわない",
    "証拠を残しつつ専門窓口や信頼できる第三者に相談する"
  ]
},
  "ドアガチャ型": {
  category: "境界線 × 物理接近",
  serif: [
    "○○駅で見たかも？",
    "その背景って自宅？",
    "どこ住んでるの？"
  ],
  summary: "オンライン配信という前提を越えて、配信者の居場所や日常に物理的に接近しようとするタイプ。些細な発言や部屋の背景などから住所や行動範囲を特定しようとすることもあり、無意識的な悪意であっても重大なプライバシー侵害につながる。最悪の場合、実際に接触を試みるリスクもある。",
  advice: [
    "背景や話題から住所・生活圏が特定されないよう配慮する",
    "接近・来訪をほのめかす発言には即座に警戒し距離を置く",
    "必要があれば運営や警察への相談も視野に入れる"
  ]
  },
"リモコン操作型": {
  category: "支配傾向 強",
  serif: [
    "この時間に配信して！",
    "今日このゲームやって",
    "あの人呼ばないで"
  ],
  summary: "“リクエスト”の形をとりながら、配信者を自分好みに操作しようとするタイプ。要望が一方的で、反応しないと不満を表すことがあり、応じ続けると主導権が奪われてしまう。配信内容・人間関係への干渉がエスカレートすることもあるため、最初のうちに境界を引いておくことが重要。",
  advice: [
    "要望の取捨選択は配信者が主導で行うと明示する",
    "配信方針への強い干渉には距離を置く",
    "他リスナーの自由も守る視点を持つ"
  ]
  },
  "情緒操作型": {
  category: "脅迫 × コントロール",
  serif: [
    "応えてくれないなら離れる…",
    "私のこと嫌いなの？",
    "ずっと泣いてたのに気づいてくれなかった"
  ],
  summary: "罪悪感や不安を刺激し、配信者の行動をコントロールしようとするタイプ。無視された・気づいてくれなかったなどと訴え、情緒的な反応を引き出そうとする。対応を続けることで配信者が“見捨ててはいけない存在”と認識してしまい、疲弊や心理的負担が蓄積する危険がある。",
  advice: [
    "感情的な訴えに振り回されず、冷静な対応を心がける",
    "必要以上に責任を感じず、反応を減らして境界を保つ",
    "依存的な訴えが続く場合はコメント制限も検討する"
  ]
  },
"隠しカメラ型": {
  category: "監視 × 境界線",
  serif: [
    "去年の配信で言ってたよね？",
    "この前言ってたことと矛盾してない？",
  ],
  summary: "配信内容や SNS 発言を逐一チェックし、細部まで指摘してくる“常時監視”タイプ。配信者の情報を集めることや詮索が癖になっているケースや、過去の発言を盾にしてコントロールを試みる事もある",
  advice: [
    "過去発言の指摘に過剰反応せず、事実のみ簡潔に説明する",
    "監視発言が続くようならコメントをスルーまたは制限する",
    "配信中の生活音や情報をできるだけ最小限に抑える工夫を（例：環境音を消す／反響防止)"
  ]
},
  /* ▼ 要注意グループ 5タイプ追加 ▼ */
"境界線やや接近型": {
  category: "境界線のみ注意",
  serif: [
    "昨日どこ行ってたの？",
    "背景ってベッドかな？",
    "もう寝た？"
  ],
  summary: "親しみを込めたつもりの発言でも、配信者の私生活に踏み込みすぎてしまうタイプ。悪気はないが境界線が曖昧なため、プライバシーを侵害する小さな積み重ねがストレスになることもある。",
  advice: [
    "質問にすべて応える必要はないと自覚する",
    "配信で話す情報の範囲をあらかじめ決めておく",
    "境界線を守ってくれる人を大切にする"
  ]
},
"応援圧強め型": {
  category: "依存傾向 注意",
  serif: [
    "毎日配信してほしい！",
    "出てこないと寂しい…",
    "もっと頑張ってよ！"
  ],
  summary: "熱心な応援がプレッシャーに変わりやすいタイプ。善意のつもりでも、配信者の都合を考えず期待をぶつけるため、無自覚に疲弊させてしまうことがある。",
  advice: [
    "感謝を伝えつつ、応援の受け止め方は自分で選ぶ",
    "「毎日は無理」と明るく伝えておく",
    "定期配信ではない自由さを大切にする"
  ]
},
"リクエスト依存型": {
  category: "支配傾向 注意",
  serif: [
    "またあのネタやって！",
    "これだけやってくれたらいいのに",
    "その企画より前の方が面白かった"
  ],
  summary: "過去のヒットや自分の好みに執着し、特定の配信内容を繰り返し求めるタイプ。自由な発想や他の視聴者とのバランスを崩す要因になりやすい。",
  advice: [
    "提案と指示の違いをはっきり区別する",
    "全てに応える必要はないことを態度で示す",
    "今日は違うテーマと自然に流す選択を持つ"
  ]
},
"馴れ合いコメント型": {
  category: "境界線 × 支配（軽度）",
  serif: [
    "○○ちゃんってさ〜昔より優しくなったよね（笑）",
    "仲良いよね、俺たち",
    "身内ノリ最高！"
  ],
  summary: "友達ノリで距離が近すぎるコメントを繰り返し、特別な関係を演出しようとするタイプ。内輪感が強まり他リスナーとの温度差を生むことがある。",
  advice: [
    "誰でも入りやすい雰囲気作りを意識する",
    "配信がオープンな場であると伝える",
    "馴れ合いが行き過ぎれば他視聴者離脱のリスクを自覚する"
  ]
},
"質問詰め型": {
  category: "監視傾向 注意",
  serif: [
    "今日は何時に起きたの？",
    "何食べた？",
    "夜は何するの？"
  ],
  summary: "無邪気に会話を広げようとして個人的な質問を連発するタイプ。悪気はないがプライバシーに踏み込み疲労感を与えやすい。",
  advice: [
    "質問に答えなくても良いと認識する",
    "質問が続くときは話題を変える",
    "一方的な聞き手に振り回されないようにする"
  ]
/* ▲ ここまで追加 ▲ */
   },
  "愛情つよつよ型": {
  category: "依存 × 情緒過多",
  serif: [
    "あなたしか勝たん！",
    "秒で推し尊い！",
    "推しがいないと生きていけない！"
  ],
  summary: "ポジティブな愛情表現が非常に強く、配信者に“過剰な応援”をぶつけてくるタイプ。一見ありがたいファンに見えるが、感情の波が激しく、リアクションを強く求めすぎる傾向がある。配信者の発言や態度に過敏に反応し、応えてくれないと傷ついたり、気分の浮き沈みが激しくなることも。放っておけずに対応し続けると、依存関係を深めてしまう可能性がある。",
  advice: [
    "好意は感謝しつつも、必要以上に応えすぎない姿勢を保つ",
    "感情的な起伏に巻き込まれないよう距離感を一定に保つ",
    "期待される“神対応”に疲弊しないよう反応の線引きを意識する"
  ]
},
"健全リスナー型": {
  category: "問題なし",
  serif: [
    "いつも楽しい配信ありがとう！",
    "無理せず続けてね！",
    "応援してます！"
  ],
  summary: "距離感が適切で、配信者の都合やペースを尊重しながらポジティブに応援してくれる理想的なリスナータイプ。過度な要求や干渉がなく、配信者の負担にならない形でエールを送り続けてくれるため、配信が長く続く大きな支えとなる。",
  advice: [
    "感謝の気持ちを伝え、良好な関係を保つ",
    "適度に反応を返しつつも無理はしない",
    "他のリスナーと同様に公平なコミュニケーションを心がける"
  ]
},
};

/* ===== 4. 質問フォーム生成 & 診断ロジック ===== */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quizForm');

  // 質問生成
  questions.forEach((q,i)=>{
    form.insertAdjacentHTML('beforeend',`
      <div class="question">
        <p>Q${i+1}. ${q}</p>
        <label><input type="radio" name="q${i}" value="2" required>よくある</label>
        <label><input type="radio" name="q${i}" value="1">たまにある</label>
        <label><input type="radio" name="q${i}" value="0">ほぼない</label>
      </div>`);
  });

  /* 診断 */
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const scores={境界線:0,依存:0,支配:0,脅迫:0,監視:0};
    let total=0;
    for(let i=0;i<20;i++){
      const val=parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
      scores[categories[i]]+=val; total+=val;
    }

    /* グラフ */
    if(window.myChart) window.myChart.destroy();
    window.myChart=new Chart(document.getElementById('resultChart'),{
      type:'bar',
      data:{
        labels:Object.keys(scores),
        datasets:[{
          label:'スコア',
          data:Object.values(scores),
          backgroundColor:Object.values(scores).map(v=>v>=7?"#f54242":v>=5?"#f5c542":"#6fb3ff")
        }]
      },
      options:{indexAxis:'y',scales:{x:{max:8,ticks:{stepSize:1}}}}
    });

    /* 判定ロジック */
    /* ===== しきい値を 1 点下げたロジック ===== */
const HIGH = 6;   // ←危険ライン
const MID  = 4;   // ←要注意ライン

/* ── 複合リスク：高リスクが 3 カテゴリ以上 ── */
if (Object.values(scores).filter(v => v >= HIGH).length >= 3) {
  type = "複合リスク型";
}
/* ── 2 カテゴリ危険ペア ── */
else if (scores.依存 >= HIGH && scores.脅迫 >= HIGH)      type = "情緒爆弾型";
else if (scores.支配 >= HIGH && scores.監視 >= HIGH)      type = "支配レーダー型";
else if (scores.依存 >= HIGH && scores.監視 >= HIGH)      type = "密着ストーキング型";
else if (scores.境界線 >= HIGH && scores.支配 >= HIGH)    type = "リアル掌握型";
else if (scores.境界線 >= HIGH && scores.依存 >= HIGH)    type = "愛着侵入型";
/* ── 愛情つよつよ型：依存 & 脅迫 が危険ライン ── */
else if (scores.依存 >= HIGH && scores.脅迫 >= MID)       type = "愛情つよつよ型";
/* ── 高リスクが 2 カテゴリ以上（複合リスクとして扱う）── */
else if (Object.values(scores).filter(v => v >= HIGH).length >= 2) {
  type = "複合リスク型";
}
/* ── 単カテゴリ注意ライン ── */
else if (scores.境界線 >= MID)      type = "境界線やや接近型";
else if (scores.依存   >= MID)      type = "応援圧強め型";
else if (scores.支配   >= MID)      type = "リクエスト依存型";
else if (scores.支配   >= MID-1 && scores.境界線 >= MID-1)
                                    type = "馴れ合いコメント型";
else if (scores.監視   >= MID)      type = "質問詰め型";
/* ── 最後に健全 ── */
else                                type = "健全リスナー型";
    
    const d=typeDetails[type];
    document.getElementById('resultDisplay').innerHTML=`
      <h2>診断結果</h2>
      <img src="${imageMap[type]}" alt="${type}">
      <h3>タイプ：${type}（${d.category}）</h3>
      <p><strong>代表的なセリフ：</strong><br>
         「${d.serif[0]}」<br>「${d.serif[1]}」<br>「${d.serif[2]}」</p>
      <p><strong>解説：</strong><br>${d.summary}</p>
      <p><strong>アドバイス：</strong><br>${d.advice}</p>`;
  });
});