# Optical Atlas — 光学系のギャラリー

光学方式と実製品68項目を巡る、日本語の静的ギャラリー。対物9、アイピース13、カメラレンズ32、反射・屈折反射系14項目を収録しています。方式のSVG模式図、実製品の公表仕様、カテゴリ・メーカー系統の絞り込み、別名・複数語検索、詳細ダイアログ、回折限界MTFの操作画面を備えています。

Nikon / NIKKORは、NIKKOR-P 10.5cm f/2.5、Ai 105mm f/2.5、Ai Noct 58mm f/1.2、Ai Micro 55mm f/2.8、Ai 28mm f/2.8S、AF-S 14–24mm f/2.8G ED、AF-S 300mm f/4E PF ED VR、Z Noct、Z Plena、Z MC 105mmの10本。公式の「NIKKOR 千夜一夜物語」と製品仕様を出典とし、105mmの設計変更やNoctの点像補正、Microの近接補正を辿れます。

タカハシは、旧ε-130、MT-130、ε-130D、FSQ-106ED、TOA-130、Mewlon-250CRSの6機種。旧ε-130は1984年発売・口径130mm・焦点距離455mm（f/3.5）、MT-130は1983年発売・口径130mm・800mm（計算値約f/6.2）としてメーカー沿革を参照しています。430mm f/3.3のε-130Dとは別に収録し、補正レンズの枚数と鏡を含む全光学系の構成も区別しています。

トップの特集からNoctの2世代、105mmの2設計、旧ε-130とMT-130を読み比べられます。メーカー別の一覧へ進むボタンは検索とカテゴリを解除し、そのメーカーの全項目を表示します。詳細画面にも関連する光学系への導線があります。

ZEISS系はテッサー、プラナー、ゾナー、ビオゴン、ディスタゴン、ホロゴンなど。Leica / Leitzはエルマー5cm f/3.5、ズミクロンM 50mm f/2（No.11826）、APOズミクロンM 50mm f/2 ASPH.、ズミルックスM 50mm f/1.4 ASPH.（0.45m対応型）、ノクティルックスM 50mm f/0.95 ASPH.（No.11602）を収録しています。

系統名は歴史的な関連を示し、その方式を用いるすべての製品の製造元を表しません。実製品は具体的なモデルを対象にし、内部形状の推定図の代わりに公表仕様と一次資料へのリンクを掲載しています。エルマーの歴史的個体カードは焦点距離・開放F値を表示し、構成枚数は記載していません。

## ローカルで表示

依存パッケージやビルドは不要です。`index.html` をブラウザーで開くか、次のサーバーを使います。

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

ブラウザーで http://127.0.0.1:8000 を開きます。

## GitHub Pages

公開先は [koyamarium.github.io/optics](https://koyamarium.github.io/optics/)、リポジトリは [koyamarium/optics](https://github.com/koyamarium/optics) です。GitHub Pagesはmainブランチのルートから公開しています。

1. GitHubリポジトリに、このフォルダのファイルをpushします。
2. Settings → Pages → Build and deployment で **Deploy from a branch** を選びます。
3. Branch を **main**、フォルダを **/ (root)** にして保存します。

すべて相対パスなので、プロジェクトのサブパスでも表示できます。公開方法の詳細は [GitHub公式ドキュメント](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) を参照してください。

## 内容の追加

`data.js` が基礎データ、`catalog.js` が追加方式・製品・系統のデータです。`category` は `objective` / `eyepiece` / `camera` / `reflector`。`lenses` は模式図の座標で、光学設計値ではありません。実製品は `kind: 'product'` とし、確認できた `elements`・`groups`、`focal`・`aperture` を記載します。望遠鏡は有効口径を `diameter` に記載でき、補正レンズだけの枚数は全系の `elements`・`groups` に入れず `meta` と説明に記載します。`specCaption` は構成枚数を表示しない製品の方式、`related` は関連項目のIDです。参考資料は `SOURCES`、メーカー・設計系統は `BRANDS` に登録します。

フィルターの件数はデータから計算します。総数の紹介文とREADMEは追加時に更新してください。公開データの変更時は、HTML内のスクリプト・スタイルのバージョン文字列も更新し、旧版キャッシュとの混在を防ぎます。

## 図とMTFの範囲

断面図と光路の線はオリジナルの模式図です。実機の設計・性能や計算による光線追跡を示していません。形状・枚数は代表例です。各カードから参照した一次資料を開けます。

MTFは、遮蔽のない一様な円形瞳、単色、非干渉結像、無収差を仮定した解析式で計算します。像側の近軸F値を使い、`ν = frequency × wavelength_mm × F-number`、`MTF = 2/π × (acos(ν) − ν√(1−ν²))`（0 ≤ ν < 1）、ν ≥ 1で0です。実在レンズの実測MTFや、中央遮蔽のある反射望遠鏡のMTFではありません。センサー特性、収差、デフォーカスも含みません。

式の参考：[Edmund Optics — Introduction to MTF](https://www.edmundoptics.com/knowledge-center/application-notes/optics/introduction-to-modulation-transfer-function)

実際のレンズ方式別MTFを追加する場合は、出典と測定条件を明記した測定データ、または曲率・厚み・ガラス材・間隔・絞り位置を含む光学処方が必要です。


## Licensing / ライセンス

Original implementation code: **MIT** ([LICENSE](LICENSE)). Text, figures, photographs, book material and data are **excluded** and follow separate terms; see [LICENSING.md](LICENSING.md) and [third-party notices](THIRD_PARTY_NOTICES.md). Public guide: https://koyamarium.github.io/rights/ .

## 愛機リストとの相互リンク

MT-130・旧ε-130、およびZ DX 16–50mm・50–250mm、DX魚眼10.5mm、ズームマイクロ70–180mmの詳細に、作者の[愛機リスト](https://koyamarium.github.io/gear/)の該当項目へのリンクを表示します。`catalog.js` の `gearAnchor` が対応する機材の項目IDです。愛機リストからは既存の `#system=<id>` で図鑑の詳細を開けます。ε-130Dや焦点距離の異なるレンズなど、同一機種と確認できない項目は対応付けていません。

Reflex-Nikkor 500mm F8は旧型とNew型を別製品として収録。本人が所有していたのはNew型と確認済みのため、愛機との相互リンクはNew型だけに付けています。旧型は比較用として図鑑内で関連付けています。
