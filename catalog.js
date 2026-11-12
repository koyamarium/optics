/* Expanded catalog: named design families and explicitly identified products.
 * Lens coordinates are original explanatory drawings, never prescriptions.
 * Product records use a specification panel instead of invented internal shapes.
 */
const BRANDS = {general:'基礎・その他',nikon:'Nikon / NIKKOR',takahashi:'タカハシ / 高橋製作所',zeiss:'ZEISS / ツァイス',leica:'Leica / Leitz',voigtlander:'Voigtländer',edmund:'Edmund Optics',televue:'Tele Vue',steinheil:'Steinheil',planewave:'PlaneWave'};
const BRAND_ALIASES={nikon:['ニコン','ニッコール','日本光学','Nippon Kogaku'],takahashi:['タカハシ','高橋製作所','Takahashi'],zeiss:['ツアイス','カールツァイス','カール・ツァイス','Carl Zeiss'],leica:['ライカ','ライツ'],voigtlander:['フォクトレンダー'],edmund:['エドモンド'],televue:['テレビュー','テレヴュー'],steinheil:['シュタインハイル','スタインハイル'],planewave:['プレーンウェーブ']};
Object.assign(SOURCES, {
  takahistory:['高橋製作所 — 沿革：MT-130（1983年）・ε-130（1984年）', 'https://www.takahashijapan.com/ct-corp/corp-history.html'],
  takaepsilon:['高橋製作所 — ε-130D：旧ε-130との光学系の違い', 'https://www.takahashijapan.com/ct-products/products/E-130D.html'],
  takafsq:['高橋製作所 — FSQ-106ED', 'https://www.takahashijapan.com/ct-products/products/FSQ-106ED.html'],
  takatoa:['高橋製作所 — TOA-130', 'https://www.takahashijapan.com/ct-products/products/TOA-130B.html'],
  takamewlon:['高橋製作所 — Mewlon-250CRS', 'https://www.takahashijapan.com/ct-products/products/Mewlon-250CRS.html'],
  nikon105:['Nikon — NIKKOR 千夜一夜物語 第五夜：Ai Nikkor 105mm F2.5', 'https://imaging.nikon.com/imaging/information/story/0005/'],
  nikonnoct:['Nikon — NIKKOR 千夜一夜物語 第十六夜：Ai Noct Nikkor 58mm F1.2', 'https://imaging.nikon.com/imaging/information/story/0016/'],
  nikonmicro:['Nikon — NIKKOR 千夜一夜物語 第二十六夜：Ai Micro Nikkor 55mm f/2.8', 'https://imaging.nikon.com/imaging/information/story/0026/'],
  nikon28:['Nikon — NIKKOR 千夜一夜物語 第五十七夜：Ai Nikkor 28mm f/2.8S', 'https://imaging.nikon.com/imaging/information/story/0057/'],
  nikon1424:['Nikon — AF-S NIKKOR 14–24mm f/2.8G ED', 'https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/widezoom/af-s_zoom14-24mmf_28g/'],
  nikon300pf:['Nikon — AF-S NIKKOR 300mm f/4E PF ED VR', 'https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_300mmf_4e_pf_ed_vr/'],
  nikonznoct:['Nikon — NIKKOR Z 58mm f/0.95 S Noct', 'https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_58mmf095s/'],
  nikonplena:['Nikon — NIKKOR Z 135mm f/1.8 S Plena', 'https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_135mmf18s/'],
  nikonzmicro:['Nikon — NIKKOR Z MC 105mm f/2.8 VR S', 'https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_mc105mmf28_vr_s/'],
  bell:['Louis Bell — The Telescope (1922)', 'https://www.gutenberg.org/files/53740/53740-h/53740-h.htm'],
  konig:['Albert König — US1159233A, Fig. 3', 'https://patents.google.com/patent/US1159233A/en'],
  nagler:['Albert Nagler — US4286844A, Fig. 1', 'https://patents.google.com/patent/US4286844A/en'],
  heliar:['C. A. H. Harting / Voigtländer — US716035A', 'https://patents.google.com/patent/US716035A/en'],
  planar:['ZEISS — Lens Names: Planar', 'https://lenspire.zeiss.com/photo/app/uploads/2022/02/technical-article-lens-names-planar.pdf'],
  zeisswide:['ZEISS — Distagon, Biogon and Hologon', 'https://lenspire.zeiss.com/photo/app/uploads/2022/02/technical-article-lens-names-distagon-biogon-hologon.pdf'],
  sonnar:['Nikon — NIKKOR 千夜一夜物語 第四十夜', 'https://imaging.nikon.com/imaging/information/story/0040/'],
  cdk:['PlaneWave — CDK Optical Design', 'https://www.planewave.eu/en/technologies/cdk-optical-design'],
  dk:['Takahashi — Mewlon-250CRS', 'https://www.takahashijapan.com/ct-products/products/Mewlon-250CRS.html'],
  gregorian:['University of Arizona — Gregorian Telescope', 'https://wp.optics.arizona.edu/jgreivenkamp/wp-content/uploads/sites/11/2019/11/Gregorian-Telescope.pdf'],
  maksutov:['COMSOL — Gregory–Maksutov Telescope', 'https://doc.comsol.com/6.4/doc/com.comsol.help.models.roptics.gregory_maksutov_telescope/gregory_maksutov_telescope.html'],
  schmidt:['Caltech / Palomar — Samuel Oschin Telescope', 'https://sites.astro.caltech.edu/palomar/about/telescopes/oschin.html'],
  schmidtnewton:['Meade — LXD75 Series Catalog', 'https://www.kosmos.com.mx/fileadmin/documentos/Catalogos/MeadeCatalog_0908.pdf'],
  petzvalrefractor:['Tele Vue — NP101 Operating Guide', 'https://agenaastro.com/media/documents/Tele-Vue-Manual-NP101.pdf'],
  leicaelmar:['Leitz Photographica Auction — Elmar 3.5/5cm', 'https://www.leitz-auction.com/de/Elmar-3.5-5cm-nickel-11-o-clock/A00408'],
  leicacron:['Leica — Summicron-M 50 f/2, No. 11826', 'https://leica-camera.com/en-US/photography/lenses/m/summicron-m-50mm-f2-black/technical-specification'],
  leicaapo:['Leica — APO-Summicron-M 50 f/2 ASPH.', 'https://leica-camera.com/en-US/photography/lenses/m/apo-summicron-m-50mm-f2-asph-metal-gray/technical-specification'],
  leicalux:['Leica — Summilux-M 50 f/1.4 ASPH.', 'https://leica-camera.com/en-BE/photography/lenses/m/leica-summilux-m-50-f14-asph-silver/shop-now'],
  leicanoct:['Leica — Noctilux-M 50 f/0.95 ASPH., No. 11602', 'https://leica-camera.com/ja-JP/photography/lenses/m/noctilux-m-50mm-f0-95-asph-black/technical-specification']
});
// Historical affiliation denotes a design lineage, not every manufacturer using it.
Object.assign(OPTICS.find(o=>o.id==='tessar'),{brand:'zeiss',aliases:['ツァイス','ツアイス','Carl Zeiss']});
Object.assign(OPTICS.find(o=>o.id==='orthoscopic'),{brand:'zeiss'});

OPTICS.push(
  {id:'singlet',category:'objective',name:'単レンズ対物',en:'Singlet objective',meta:'1群1枚',tag:'結像の出発点',description:'1枚の正レンズで光を集める、最も基本的な対物系。',detail:'1枚で結像の仕組みを見られます。波長による屈折率の違いが焦点位置のずれを生むため、複数のガラスを使う色消し対物との比較の出発点になります。',source:'achromat',lenses:[[156,62,16,30,30,0]]},
  {id:'fraunhofer',category:'objective',name:'フラウンホーファー型',en:'Fraunhofer achromat',meta:'2群2枚・空気間隔',tag:'クラウンを前に',description:'正のクラウンレンズを前に、負のフリントレンズを後ろに置く色消し対物。',detail:'2枚の間に空気間隔を設ける形式です。接合型のアクロマートと比べると、内側の2面を独立して選べます。ここではレンズの順序と空気間隔を模式的に示しています。',source:'bell',lenses:[[127,62,14,18,32,0],[163,62,25,-29,-4,1]]},
  {id:'steinheil',category:'objective',brand:'steinheil',name:'シュタインハイル型',en:'Steinheil achromat',aliases:['スタインハイル'],meta:'2群2枚・フリント先行',tag:'ガラスの順序を変える',description:'負のフリントレンズを前側に置く、色消し対物の別形式。',detail:'フラウンホーファー型と比べる見どころはガラスの順序です。先頭に負のフリントレンズ、後ろに正のクラウンレンズを配置します。曲率と間隔は模式値です。',source:'bell',lenses:[[120,62,24,-5,-28,1],[166,62,14,30,19,0]]},
  {id:'petzval-refractor',category:'objective',brand:'televue',name:'ペッツバール型屈折系',en:'Petzval-type refractor',aliases:['ペッツバル','Nagler Petzval','NP101'],meta:'前後の2枚組・4枚の例',tag:'後群で像面を整える',description:'前方の対物と、離して置いた後群を組み合わせる撮影用屈折系。',detail:'前後のレンズ群を離したペッツバール系の考え方を用います。Tele VueのNP101は4枚構成の実例です。図は前後の群の役割を示す概念で、NP101の実際の曲率・配置ではありません。',source:'petzvalrefractor',lenses:[[83,60,12,22,-9,0],[95,60,17,9,8,1],[230,35,12,19,-6,0],[242,35,12,6,16,1]]},

  {id:'kepler-eyepiece',category:'eyepiece',name:'ケプラー式接眼',en:'Keplerian positive eyepiece',aliases:['ケプラー'],meta:'1群1枚・正レンズ',tag:'実像を拡大する',description:'対物が作る実像を正レンズで拡大する、接眼の基本形式。',detail:'単純なケプラー式望遠鏡の接眼部を示します。正レンズで中間の実像を観察します。これを複数枚にして収差や視野を整えたものが、多くの接眼方式につながります。',source:'bell',lenses:[[167,45,14,25,25,0]]},
  {id:'galilean-eyepiece',category:'eyepiece',name:'ガリレオ式接眼',en:'Galilean negative eyepiece',aliases:['ガリレイ','オペラグラス'],meta:'1群1枚・負レンズ',tag:'実像になる前に受ける',description:'対物の焦点より手前に負レンズを置く、ガリレオ式望遠鏡の接眼部。',detail:'正の対物と負の接眼を組み合わせる方式です。対物だけなら実像となる位置より手前に接眼レンズを置きます。ケプラー式の正レンズ接眼と、レンズの符号が異なります。',source:'bell',lenses:[[160,44,30,-19,-19,0]],rayMode:'negative'},
  {id:'ramsden',category:'eyepiece',name:'ラムスデン',en:'Ramsden eyepiece',aliases:['ラムズデン','R型'],meta:'2群2枚',tag:'凸面を向かい合わせる',description:'2枚の平凸レンズの、凸面同士を向かい合わせた古典的な接眼。',detail:'ハイゲンとは平凸レンズの向きが異なります。2枚の平面が外側、凸面が内側を向く構成で、像面が視野レンズの対物側に位置する形式です。',source:'eyepiece',lenses:[[105,45,12,0,25,0],[225,45,12,25,0,0]]},
  {id:'rke',category:'eyepiece',brand:'edmund',name:'RKE',en:'Edmund RKE eyepiece',meta:'2群3枚',tag:'接合群を視野側へ',description:'視野側の接合レンズと単独の眼レンズを組み合わせた、Edmundの接眼。',detail:'ケルナーと比較すると、2枚の接合群を置く側が変わります。図では視野側に接合群、眼側に単レンズを配置しています。具体的な曲率や間隔は製品を再現していません。',source:'eyepiece',lenses:[[100,48,16,0,-17,1],[116,48,13,17,25,0],[224,41,14,23,23,0]]},
  {id:'erfle',category:'eyepiece',brand:'zeiss',name:'エルフレ',en:'Erfle eyepiece',meta:'3群5枚の例',tag:'視野を広げる',description:'2つの接合群と中央の単レンズを用いる、広視野接眼の代表形式。',detail:'5枚または6枚の構成がある方式です。ここでは5枚の例として、接合群・単レンズ・接合群の並びを示します。アッベ式やプローセルと、群の増やし方を見比べられます。',source:'eyepiece',lenses:[[71,49,12,0,-14,1],[83,49,12,14,24,0],[164,43,12,21,21,0],[239,46,12,24,14,0],[251,46,12,-14,0,1]]},
  {id:'konig',category:'eyepiece',brand:'zeiss',name:'ケーニッヒ',en:'König eyepiece',aliases:['ケーニヒ','Konig'],meta:'2群3枚の例',tag:'接合2枚 ＋ 単レンズ',description:'接合した視野レンズと単独の眼レンズを用いる、ケーニッヒの接眼形式。',detail:'Albert Königの1915年の特許には複数の例があります。図はFig. 3の2群3枚という組み合わせを模式化したものです。ケーニッヒの名称を持つすべての派生型が同じ構成ではありません。',source:'konig',lenses:[[102,49,15,0,-21,1],[117,49,13,21,24,0],[228,36,12,22,0,0]]},
  {id:'monocentric',category:'eyepiece',brand:'steinheil',name:'モノセントリック',en:'Monocentric eyepiece',aliases:['モノセン'],meta:'1群3枚',tag:'共通の曲率中心',description:'曲率中心を揃えた3枚接合レンズを使う、特徴的な接眼形式。',detail:'中心を共有する曲面の組み合わせが名称の由来です。1つの接合群にまとめた構成に注目できます。図の曲線は概念を示す近似で、厳密な同心球面の処方ではありません。',source:'bell',lenses:[[146,45,11,22,15,0],[157,45,25,-15,-15,1],[182,45,11,15,22,0]]},
  {id:'nagler-patent',category:'eyepiece',brand:'televue',name:'ナグラー特許例',en:'Nagler ultrawide-angle patent',aliases:['Nagler','広角','超広角'],meta:'4群7枚・特許Fig. 1',tag:'負群と正の接眼群',description:'対物側の負の接合群と、正の接眼群を組み合わせる超広角方式。',detail:'US4286844AのFig. 1にある7枚の構成を模式化しました。負の接合群、単レンズ、接合群、接合群の順です。特許には数値処方も掲載されています。市販の各世代のNaglerを同じ処方と見なすものではありません。',source:'nagler',lenses:[[57,30,15,-10,-8,1],[72,30,13,8,-17,0],[132,48,12,26,-10,0],[197,55,12,22,9,0],[209,55,12,-9,23,1],[268,55,12,23,-8,0],[280,55,13,8,-22,1]]},

  {id:'planar',category:'camera',brand:'zeiss',name:'プラナー（初期型）',en:'Planar · original symmetric form',meta:'4群6枚',tag:'ダブルガウスの系譜',description:'中央の絞りを挟んで対称に配置した、初期プラナーの6枚構成。',detail:'ZEISSの初期プラナーは対称な4群6枚の構成です。ダブルガウスとの関係を見られます。後年のPlanarブランドのすべての製品が、この枚数や完全な対称配置を持つわけではありません。',source:'planar',lenses:[[65,51,13,23,10,0],[108,49,14,23,-7,0],[122,49,20,7,-25,1],[208,49,20,-25,7,1],[228,49,14,-7,23,0],[287,51,13,10,23,0]],stop:175},
  {id:'sonnar',category:'camera',brand:'zeiss',name:'ゾナー（6枚型）',en:'Sonnar · six-element form',aliases:['ソナー'],meta:'3群6枚の例',tag:'大きな接合群',description:'接合群を活用し、6枚を3つの群にまとめた代表的なゾナー型。',detail:'ここでは前から1枚・3枚・2枚の構成を示します。7枚型などの派生もあり、Sonnarという名前だけで内部構成は一意に決まりません。空気に接する面と、接合面の違いが見どころです。',source:'sonnar',lenses:[[69,51,13,25,20,0],[126,49,12,20,9,0],[138,49,27,-9,-16,1],[165,49,12,16,19,0],[241,45,12,19,-9,0],[253,45,16,9,18,1]],stop:211},
  {id:'distagon',category:'camera',brand:'zeiss',name:'ディスタゴン系',en:'Distagon · retrofocus principle',aliases:['レトロフォーカス','逆望遠','Flektogon','フレクトゴン'],meta:'負の前群 ＋ 正の後群',tag:'長いバックフォーカス',description:'前側を負、後ろ側を正にするレトロフォーカスの考え方。',detail:'一眼レフのミラーなどを収めるため、後玉から像面まで距離を確保する設計系統です。図の2枚は各群の働きを表す概念で、特定のDistagon製品の枚数や曲率を示していません。',source:'zeisswide',lenses:[[97,62,28,-24,-13,0],[222,41,13,24,24,0]]},
  {id:'biogon',category:'camera',brand:'zeiss',name:'ビオゴン系',en:'Biogon · symmetric wide-angle',meta:'対称型広角の概念',tag:'像面の近くまで配置',description:'像面の近くまでレンズを置ける条件を使う、対称型広角の設計系統。',detail:'ここでは1950年代以降の対称型広角の考え方を示します。1930年代の同名レンズや後年の製品では構成が異なります。図は大きく包み込む外側の群と中央群の関係を示す概念です。',source:'zeisswide',lenses:[[72,60,24,-25,7,0],[129,39,12,21,-9,0],[141,39,18,9,-13,1],[201,39,18,-13,9,1],[219,39,12,-9,21,0],[264,60,24,7,-25,0]],stop:180},
  {id:'hologon',category:'camera',brand:'zeiss',name:'ホロゴン（3枚型）',en:'Hologon · original three-element form',meta:'3群3枚の例',tag:'負・正・負の広角系',description:'外側の負メニスカス2枚と中央の正レンズによる、独特の超広角構成。',detail:'初期の3枚型を概念化しています。中央の正レンズを、強く曲がった負メニスカスで挟む構成です。後のContax G用16mmなどには5枚構成もあります。形の向きと中央の対称性に注目してください。',source:'zeisswide',lenses:[[83,60,24,-30,8,0],[169,35,12,26,26,0],[243,60,24,8,-30,0]],stop:158},
  {id:'heliar',category:'camera',brand:'voigtlander',name:'ヘリアー（初期型）',en:'Heliar · Harting patent',meta:'3群5枚の例',tag:'2枚・1枚・2枚',description:'中央の単レンズを、前後の接合群で挟んだヘリアーの構成例。',detail:'HartingのUS716035Aにある対称的な設計例を模式化しています。前後に2枚の接合群、中央に単レンズを配置します。後年のHeliar名の製品には別の構成もあるため、ここでは初期の設計例として掲載しています。',source:'heliar',lenses:[[74,50,16,0,-16,1],[90,50,13,16,25,0],[164,40,26,-16,-16,0],[244,50,13,25,16,0],[257,50,16,-16,0,1]],stop:215},
  {id:'telephoto',category:'camera',name:'テレフォト型',en:'Telephoto principle',aliases:['望遠'],meta:'正の前群 ＋ 負の後群',tag:'全長を短くする',description:'正の前群と負の後群を組み合わせ、焦点距離に対して全長を短くする方式。',detail:'ディスタゴン系の逆望遠原理と、群の符号の並びを比較できます。ここでは正・負の2群を代表レンズで示した概念図です。実製品では収差補正のため、各群を複数枚で構成します。',source:'zeisswide',lenses:[[100,62,14,30,30,0],[226,32,27,-17,-17,1]]},
  {id:'petzval-camera',category:'camera',name:'ペッツバール写真レンズ',en:'Petzval portrait-lens principle',aliases:['ペッツバル'],meta:'4枚の模式例',tag:'前後で役割を分ける',description:'前方の接合群と離れた後群を持つ、古典的なポートレートレンズの系統。',detail:'前後に離した群で結像させる考え方を示します。撮影用の初期ペッツバールと、像面補正を重視する現代のペッツバール型屈折望遠鏡は、設計を区別して考える必要があります。',source:'bell',lenses:[[78,51,13,23,-10,0],[91,51,16,10,8,1],[225,46,24,-13,-12,1],[271,46,12,22,22,0]],stop:161},

  {id:'leica-elmar-50',category:'camera',brand:'leica',name:'エルマー 5cm f/3.5',en:'Leitz Elmar 3.5/5cm · historical example',aliases:['ライカ','エルマー','Leica','Elmar'],kind:'product',focal:'50 mm',aperture:'f/3.5',meta:'Leitz・歴史的モデル',tag:'ライカの古典',description:'Leitz Photographica Auctionに掲載される、5cm f/3.5のエルマーの歴史的実例。',detail:'エルマーという名前を、ここでは5cm f/3.5の具体的な歴史的レンズで紹介します。年式や焦点距離の異なるElmarを一括して同じ設計とは扱いません。掲載個体と外観は参考資料から確認できます。このカードでは焦点距離と開放F値を表示します。',source:'leicaelmar'},
  {id:'leica-summicron-50',category:'camera',brand:'leica',name:'ズミクロンM 50mm f/2',en:'Summicron-M 50 f/2 · No. 11826',aliases:['ライカ','Summicron'],kind:'product',elements:6,groups:4,focal:'50 mm',aperture:'f/2',meta:'4群6枚・No. 11826',tag:'50mm標準レンズ',description:'メーカーの仕様書で4群6枚と確認できる、非APOのズミクロンM 50mm。',detail:'ここでは製品番号11826を対象とします。Leica公表値は4群6枚、最短撮影距離0.7mです。公式資料にはMTF情報もあります。内部の形状を推定した断面図は描かず、公表仕様を表示しています。',source:'leicacron'},
  {id:'leica-apo-summicron-50',category:'camera',brand:'leica',name:'APOズミクロンM 50mm',en:'APO-Summicron-M 50 f/2 ASPH.',aliases:['ライカ','APO-Summicron','アポズミクロン'],kind:'product',elements:8,groups:5,focal:'50 mm',aperture:'f/2',meta:'5群8枚・ASPH.',tag:'APOと非球面',description:'APO補正と非球面を用いた、5群8枚の50mm f/2モデル。',detail:'LeicaのAPO-Summicron-M 50 f/2 ASPH.の公表構成は5群8枚です。通常のSummicron-M 50 f/2とは独立した製品として扱います。各面の形状と性能は公式資料を参照してください。',source:'leicaapo'},
  {id:'leica-summilux-50',category:'camera',brand:'leica',name:'ズミルックスM 50mm',en:'Summilux-M 50 f/1.4 ASPH. · 2023 form',aliases:['ライカ','Summilux'],kind:'product',elements:8,groups:5,focal:'50 mm',aperture:'f/1.4',meta:'5群8枚・0.45m型',tag:'大口径と非球面',description:'近接撮影距離0.45mのASPH.モデルを対象とする、50mm f/1.4の実製品カード。',detail:'Leicaの0.45mまで対応するSummilux-M 50 f/1.4 ASPH.を対象にしています。公表構成は5群8枚です。同名の非ASPH. Classicや他世代と混同せず、このモデルの公表値を掲載しています。',source:'leicalux'},
  {id:'leica-noctilux-50',category:'camera',brand:'leica',name:'ノクティルックスM 50mm',en:'Noctilux-M 50 f/0.95 ASPH. · No. 11602',aliases:['ライカ','Noctilux'],kind:'product',elements:8,groups:5,focal:'50 mm',aperture:'f/0.95',meta:'5群8枚・No. 11602',tag:'f/0.95の大口径',description:'50mm f/0.95 ASPH.、製品番号11602の公表データを掲載。',detail:'このモデルのメーカー公表構成は5群8枚です。開放F値はf/0.95、最短撮影距離は1mです。f/1やf/1.2の歴史的Noctiluxと区別し、特定モデルの仕様として示しています。',source:'leicanoct'},

  {id:'classical-cassegrain',category:'reflector',name:'クラシカル・カセグレン',en:'Classical Cassegrain',meta:'放物面主鏡 ＋ 双曲面副鏡',tag:'主鏡の背後へ',description:'凹の主鏡と凸の副鏡で光を折り返し、主鏡中央を通して結像させる方式。',detail:'古典的な構成は放物面主鏡と双曲面副鏡です。2枚の双曲面を使うリッチー・クレチアンとの違いは、主鏡の曲面にあります。模式図だけでは表せない曲面の種類を、構成欄で確認できます。',source:'bell',mirror:'cassegrain'},
  {id:'gregorian',category:'reflector',name:'グレゴリー式',en:'Gregorian reflector',meta:'放物面主鏡 ＋ 凹楕円面副鏡',tag:'一次焦点の先の副鏡',description:'主鏡の一次焦点より先に、凹面の副鏡を置いて光を戻す反射系。',detail:'クラシカル・カセグレンの凸副鏡に対して、グレゴリー式では凹副鏡を使います。主鏡からの光がいったん交差してから副鏡へ届く点が、光路の見どころです。',source:'gregorian',mirror:'gregorian'},
  {id:'dall-kirkham',category:'reflector',name:'ドール・カーカム',en:'Dall–Kirkham',aliases:['ダルカーカム','ダル・カーカム','DK'],meta:'楕円面主鏡 ＋ 球面副鏡',tag:'球面副鏡を用いる',description:'楕円面の主鏡と球面の副鏡を組み合わせる、カセグレン系の方式。',detail:'非球面の主鏡と球面の副鏡で構成します。RC系と見かけの光路は似ていますが、曲面の選び方が異なります。後ろに補正レンズを加える補正ドール・カーカムと見比べられます。',source:'dk',mirror:'dk'},
  {id:'corrected-dall-kirkham',category:'reflector',brand:'planewave',name:'補正ドール・カーカム',en:'Corrected Dall–Kirkham · CDK',aliases:['CDK','コレクテッド'],meta:'2枚の鏡 ＋ 像側の補正群',tag:'鏡とレンズで広い像面',description:'ドール・カーカム系に補正レンズ群を加え、像面を整える方式。',detail:'PlaneWaveの説明では、楕円面主鏡・球面副鏡・補正レンズ群が構成要素です。図では像側に置くレンズ群の位置を概念化しています。製品ごとの補正レンズの枚数や処方を再現した図ではありません。',source:'cdk',mirror:'cdk'},
  {id:'maksutov-cassegrain',category:'reflector',name:'マクストフ・カセグレン',en:'Maksutov–Cassegrain',aliases:['マクストフ','マクストーフ','Mak'],meta:'メニスカス補正板 ＋ 鏡',tag:'厚い補正板',description:'前面のメニスカス補正板と、折り返す鏡を組み合わせた屈折反射系。',detail:'ここでは前面のメニスカス補正板を使うカセグレン形式を示します。薄い非球面のシュミット補正板との形の違いが見どころです。Gregory–Maksutovなど、実際の副鏡の作り方には派生があります。',source:'maksutov',mirror:'maksutov'},
  {id:'schmidt-camera',category:'reflector',name:'シュミットカメラ',en:'Schmidt camera',meta:'補正板 ＋ 球面主鏡',tag:'鏡筒内の曲がった像面',description:'シュミット補正板と球面主鏡で、鏡筒の内部に広い視野の像を作る撮影系。',detail:'副鏡で主鏡の背後へ導くSCTとは異なり、基本形では鏡筒内に像面があります。像面が曲がる点も特徴です。PalomarのSamuel Oschin Telescopeはシュミット型の実例です。',source:'schmidt',mirror:'schmidt-camera'},
  {id:'schmidt-newtonian',category:'reflector',name:'シュミット・ニュートン',en:'Schmidt–Newtonian',meta:'補正板 ＋ 主鏡 ＋ 平面副鏡',tag:'ニュートン配置に補正板',description:'前面にシュミット補正板を置き、平面副鏡で側方へ光を導く方式。',detail:'ニュートン配置に補正板を組み合わせる屈折反射系です。補正板の有無と、焦点を側方へ出す配置を比較できます。MeadeのLXD75シリーズに実例があります。図は方式の概念で、実製品の数値処方ではありません。',source:'schmidtnewton',mirror:'schmidt-newtonian'}
);
// Nikon: model-specific specifications and the design decisions behind them.
OPTICS.push(
  {id:'nikon-p-105',category:'camera',brand:'nikon',kind:'product',name:'NIKKOR-P 10.5cm f/2.5',en:'NIKKOR-P 10.5cm f/2.5 · 1954',aliases:['105mm','日本光学','Sマウント','ゾナー','Sonnar'],elements:5,groups:3,focal:'105 mm',aperture:'f/2.5',meta:'3群5枚・初代ゾナー型',tag:'105mmの原点',description:'脇本善司が設計した、1954年発売の中望遠。初代は3群5枚のゾナー型。',detail:'ニコン公式の設計史にある、S型カメラ時代のNIKKOR-P 10.5cm f/2.5です。1949年に設計され、1954年に発売。3群5枚のゾナー型で、その光学系は初期のFマウント製品にも受け継がれました。後のAi 105mm f/2.5は4群5枚のクセノター型。同じ105mm・f/2.5でも、中身の系譜は異なります。',source:'nikon105',related:['nikon-ai-105']},
  {id:'nikon-ai-105',category:'camera',brand:'nikon',kind:'product',name:'Ai Nikkor 105mm f/2.5',en:'Ai Nikkor 105mm f/2.5 · Xenotar type',aliases:['クセノター','Xenotar','ポートレート'],elements:5,groups:4,focal:'105 mm',aperture:'f/2.5',meta:'4群5枚・クセノター型',tag:'同じ105mm、別の設計',description:'1971年の設計変更を受け継ぐAi。解像とボケのバランスを探った中望遠。',detail:'初代のゾナー型から、1971年のNikkor Autoでクセノター型へ光学系を変更。その系譜を継ぐAi 105mm f/2.5は4群5枚です。近距離での収差変動や周辺光量などを改善し、ピント面とボケの釣り合いにも配慮した設計として、公式の千夜一夜物語で紹介されています。初代10.5cmと比べると、枚数を増やさず群の組み方を変えた点が見どころです。',source:'nikon105',related:['nikon-p-105','nikon-z-plena']},
  {id:'nikon-noct-58',category:'camera',brand:'nikon',kind:'product',name:'Ai Noct Nikkor 58mm f/1.2',en:'Ai Noct Nikkor 58mm f/1.2 · 1977',aliases:['ノクト','ノクトニッコール','夜景','星','非球面'],elements:7,groups:6,focal:'58 mm',aperture:'f/1.2',meta:'6群7枚・研削非球面',tag:'夜の点を、点に近づける',description:'開放の夜景で目立つサジタルコマフレアに挑んだ、1977年のNoct。',detail:'画面の周辺で点光源が翼のように広がるサジタルコマフレア。Ai Noct Nikkorは、開放絞りの夜景でこの収差を抑えるために生まれました。6群7枚の変形ガウス型を基礎に、最前面の大径レンズへ研削非球面を採用。製造だけでなく、組み上げた光学系の収差検査にも手間をかけたレンズです。Z Noctとは構成を分けて掲載しています。',source:'nikonnoct',related:['nikon-z-noct']},
  {id:'nikon-micro-55',category:'camera',brand:'nikon',kind:'product',name:'Ai Micro Nikkor 55mm f/2.8',en:'Ai Micro Nikkor 55mm f/2.8 · floating optics',aliases:['マイクロ','マクロ','Micro-Nikkor','近接','ガウス'],focal:'55 mm',aperture:'f/2.8',specCaption:'GAUSS / FLOATING',meta:'ガウス型・フローティング',tag:'近づいても、像を整える',description:'ガウス型とフローティングを組み合わせ、近距離の収差変動に向き合ったMicro。',detail:'従来の55mm f/3.5のクセノター型からガウス型へ転換し、f/2.8へ大口径化したAi Microです。フローティングでレンズ間隔を変化させ、無限遠から近接までの収差の変動を抑えます。単体で等倍に対応する後のAF 55mmと区別し、このカードはMFのAiモデルを扱います。千夜一夜物語第二十六夜では、この設計の経緯を読めます。',source:'nikonmicro',related:['nikon-z-mc105']},
  {id:'nikon-ai-28',category:'camera',brand:'nikon',kind:'product',name:'Ai Nikkor 28mm f/2.8S',en:'Ai Nikkor 28mm f/2.8S · 1981',aliases:['CRC','近距離補正','広角','レトロフォーカス','Ai-S'],elements:8,groups:8,focal:'28 mm',aperture:'f/2.8',meta:'8群8枚・最短0.2m',tag:'寄れる広角の工夫',description:'0.2mまで寄れる28mm。近距離補正で、広い景色も小さな花も。',detail:'1981年発売のAi-Sモデルを対象にします。8群8枚のレトロフォーカス型で、最前面は凸レンズ。全体を繰り出しながら第4・第5レンズの間隔も変える近距離補正機構により、最短撮影距離0.2mを実現しました。同名の旧AiやAF 28mmを一括せず、この世代の仕様を示しています。',source:'nikon28'},
  {id:'nikon-afs-14-24',category:'camera',brand:'nikon',kind:'product',name:'AF-S NIKKOR 14–24mm f/2.8G ED',en:'AF-S NIKKOR 14–24mm f/2.8G ED · F mount',aliases:['14-24','超広角','ズーム','ナノクリスタル'],elements:14,groups:11,focal:'14–24 mm',aperture:'f/2.8',meta:'11群14枚・ED／非球面',tag:'ズーム全域でf/2.8',description:'ED2枚と非球面3枚を使う、Fマウントの大口径超広角ズーム。',detail:'Fマウント用のAF-S 14–24mm f/2.8G EDです。公表構成は11群14枚で、EDレンズ2枚・非球面レンズ3枚を含みます。全域で開放f/2.8、ナノクリスタルコートとインターナルフォーカスを採用。Zマウントの14–24mm f/2.8 Sとは別の製品です。公式資料では広角端・望遠端それぞれのMTFも確認できます。',source:'nikon1424'},
  {id:'nikon-afs-300pf',category:'camera',brand:'nikon',kind:'product',name:'AF-S NIKKOR 300mm f/4E PF',en:'AF-S NIKKOR 300mm f/4E PF ED VR',aliases:['PF','位相フレネル','回折','望遠','サンヨン'],elements:16,groups:10,focal:'300 mm',aperture:'f/4',meta:'10群16枚・PF／ED',tag:'回折で、望遠を軽く',description:'PFレンズを使って小型軽量化。300mm f/4を約755gに収めた望遠。',detail:'PF（位相フレネル）レンズを初めて採用したNIKKOR。10群16枚にPF1枚とED1枚を含み、回折を利用して色収差を補正しながら小型軽量化を図っています。メーカー公表質量は約755g。強い光源ではPFに由来する輪状の色付きフレアが生じる場合があることも、公式資料に記載されています。',source:'nikon300pf'},
  {id:'nikon-z-noct',category:'camera',brand:'nikon',kind:'product',name:'NIKKOR Z 58mm f/0.95 S Noct',en:'NIKKOR Z 58mm f/0.95 S Noct · MF',aliases:['ノクト','Zマウント','夜景','星','非球面'],elements:17,groups:10,focal:'58 mm',aperture:'f/0.95',meta:'10群17枚・ED4枚／非球面3枚',tag:'Zマウントで追う、点像',description:'f/0.95からの点像再現を追求する、マニュアルフォーカスのZ Noct。',detail:'公表構成は10群17枚。EDレンズ4枚と非球面レンズ3枚を含み、大径の研削非球面、ナノクリスタルコート、アルネオコートを採用しています。最短撮影距離は0.5m。Ai Noct 58mm f/1.2の6群7枚と比べると、同じ58mmでも光学系の規模が大きく変わったことが分かります。',source:'nikonznoct',related:['nikon-noct-58']},
  {id:'nikon-z-plena',category:'camera',brand:'nikon',kind:'product',name:'NIKKOR Z 135mm f/1.8 S Plena',en:'NIKKOR Z 135mm f/1.8 S Plena',aliases:['プレナ','プラナ','ボケ','ポートレート','Zマウント'],elements:16,groups:14,focal:'135 mm',aperture:'f/1.8',meta:'14群16枚・ED／SR／非球面',tag:'画面の隅まで、丸いボケへ',description:'開放から画面周辺のボケの形にも配慮した、135mmのPlena。',detail:'14群16枚に、EDレンズ4枚、非球面1枚、SRレンズ1枚を含む中望遠。解像だけでなく、画面の周辺までの円形のボケを重視した設計として紹介されています。メソアモルファスコートとアルネオコートを採用し、絞りは11枚の円形絞りです。Ai 105mmとあわせて、世代を越えた中望遠の設計思想を巡れます。',source:'nikonplena',related:['nikon-ai-105']},
  {id:'nikon-z-mc105',category:'camera',brand:'nikon',kind:'product',name:'NIKKOR Z MC 105mm f/2.8 VR S',en:'NIKKOR Z MC 105mm f/2.8 VR S · 1:1',aliases:['マイクロ','Micro','マクロ','等倍','Zマウント'],elements:16,groups:11,focal:'105 mm',aperture:'f/2.8',meta:'11群16枚・等倍マクロ',tag:'Microの系譜を、Zへ',description:'ED3枚と非球面1枚、マルチフォーカスで近距離の像を整える等倍マクロ。',detail:'11群16枚のZマウント用マクロレンズ。最大撮影倍率は1倍、最短撮影距離は0.29m。複数のフォーカス群を使って、近距離から遠距離まで収差を抑える設計です。表示のf/2.8は無限遠時の開放値で、最短撮影距離での開放値は公式仕様ではf/4.5です。Ai Micro 55mmのフローティングと比べて、近接補正の発展を辿れます。',source:'nikonzmicro',related:['nikon-micro-55']}
);
// Takahashi: keep the original epsilon-130 separate from the digital-era 130D.
OPTICS.push(
  {id:'takahashi-epsilon-130',gearAnchor:'takahashi-epsilon-130',category:'reflector',brand:'takahashi',kind:'product',name:'ε-130（旧型）',en:'Takahashi epsilon-130 · 1984',aliases:['ε130','イプシロン130','イプシロン 130','Epsilon 130','E-130'],diameter:'130 mm',focal:'455 mm',aperture:'f/3.5',specCaption:'HYPERBOLOID ASTROGRAPH',meta:'口径130mm・455mm・1984年',tag:'星を写すための、130mm',description:'1984年9月発売のハイパーボライド・アストロカメラ。こちらは455mmの旧型ε。',detail:'高橋製作所の沿革に記載された、口径130mm・焦点距離455mmの旧ε-130です。口径比はこの公表値からf/3.5。双曲面主鏡を使う撮影用光学系で、430mm f/3.3のε-130Dとは区別します。同じ口径のMT-130（800mm）と比べると、短い焦点距離で広い星野を写す性格が見えてきます。',source:'takahistory',related:['takahashi-mt-130','takahashi-epsilon-130d']},
  {id:'takahashi-mt-130',gearAnchor:'takahashi-mt-130',category:'reflector',brand:'takahashi',kind:'product',name:'MT-130',en:'Takahashi MT-130 · Newtonian · 1983',aliases:['MT130','MT 130','ニュートン','反射'],diameter:'130 mm',focal:'800 mm',aperture:'約f/6.2',specCaption:'NEWTONIAN REFLECTOR',meta:'口径130mm・800mm・1983年',tag:'もうひとつの、130mm',description:'1983年3月発売、口径130mm・焦点距離800mmのニュートン式反射望遠鏡。',detail:'メーカー沿革に記載されたMT-130の公表値は、口径130mm・焦点距離800mm。ここから計算した口径比は約f/6.2です。方式はニュートン式。ε-130と口径は同じでも焦点距離は長く、同じアイピースならより高い倍率、同じ撮像面ならより狭い画角になります。レデューサー等を加えた仕様とは分け、鏡筒の基本仕様を掲載しています。',source:'takahistory',related:['takahashi-epsilon-130','newtonian']},
  {id:'takahashi-epsilon-130d',category:'reflector',brand:'takahashi',kind:'product',name:'ε-130D',en:'Takahashi epsilon-130D · digital astrograph',aliases:['ε130D','イプシロン130D','Epsilon 130D','E-130D'],diameter:'130 mm',focal:'430 mm',aperture:'f/3.3',specCaption:'HYPERBOLOID + CORRECTOR',meta:'双曲面主鏡＋2群2枚の補正系',tag:'εを、デジタルの星像へ',description:'補正系を刷新した430mm f/3.3。旧ε-130の455mm f/3.5と区別して収録。',detail:'口径130mm、合成焦点距離430mm、f/3.3。双曲面主鏡と接眼部の補正レンズを組み合わせるイプシロン光学系です。旧ε-130の補正レンズが4枚だったのに対し、130Dの補正レンズは2群2枚。主鏡の非球面量と補正レンズの配置も見直し、デジタル撮影に向けて周辺星像と歪曲収差を改善しています。2群2枚は補正レンズだけの値で、鏡を含む光学系全体の枚数ではありません。',source:'takaepsilon',related:['takahashi-epsilon-130']},
  {id:'takahashi-fsq-106ed',category:'objective',brand:'takahashi',kind:'product',name:'FSQ-106ED',en:'Takahashi FSQ-106ED · advanced Petzval',aliases:['FSQ106','FSQ 106','ペッツバール','Petzval','アストロカメラ'],diameter:'106 mm',elements:4,groups:4,focal:'530 mm',aperture:'f/5',meta:'4群4枚・口径106mm',tag:'屈折で、平らな星野を',description:'完全分離の4群4枚ペッツバール系。主焦点530mm f/5の撮影用屈折。',detail:'メーカーがアドバンスペッツバールと呼ぶ、4群4枚の完全分離構成です。スーパーEDガラス2枚を用い、色収差とともに広い像面の非点収差・像面湾曲を補正します。ここではFSQ-106EDの主焦点530mm f/5を掲載。旧フローライト型FSQ-106や、別売レデューサー併用時の焦点距離とは区別しています。',source:'takafsq',related:['petzval-refractor','takahashi-toa-130']},
  {id:'takahashi-toa-130',category:'objective',brand:'takahashi',kind:'product',name:'TOA-130',en:'Takahashi TOA-130 · Triplet Ortho Apochromat',aliases:['TOA130','TOA 130','アポクロマート','トリプレット'],diameter:'130 mm',elements:3,groups:3,focal:'1000 mm',aperture:'f/7.7',meta:'3群3枚・口径130mm',tag:'3枚を離して、色を整える',description:'完全分離の3枚玉で、軸上色収差と波長ごとの球面収差の補正を追求。',detail:'3群3枚を空気間隔で分離した屈折光学系。異常分散ガラス2枚を含むレンズの間隔を使い、軸上色収差と波長によって変わる球面収差を補正します。主焦点で口径130mm・焦点距離1000mm・f/7.7。フラットナーやレデューサーを組み合わせた撮影時の数値は、この主焦点仕様と分けて公式資料で確認できます。',source:'takatoa',related:['takahashi-fsq-106ed','apochromat']},
  {id:'takahashi-mewlon-250crs',category:'reflector',brand:'takahashi',kind:'product',name:'Mewlon-250CRS',en:'Takahashi Mewlon-250CRS · corrected Dall–Kirkham',aliases:['ミューロン','ミューロン250','Mewlon 250','CRS','ドールカーカム'],diameter:'250 mm',focal:'2500 mm',aperture:'f/10',specCaption:'CORRECTED DALL–KIRKHAM',meta:'口径250mm・補正ドール・カーカム',tag:'折り返した先で、像を整える',description:'バッフル内の3群3枚の補正レンズで、ドール・カーカム系の周辺像を改善。',detail:'口径250mm・焦点距離2500mm・f/10の補正ドール・カーカム式です。バッフル内に3群3枚、うち1枚はEDの補正レンズを配置し、コマ収差や像面湾曲を補正します。通常のドール・カーカムと、像側へ補正系を加える設計の違いを比較できます。3群3枚は補正レンズだけの値で、主鏡・副鏡を含む光学系全体の枚数ではありません。',source:'takamewlon',related:['dall-kirkham','corrected-dall-kirkham']}
);
// Personal gear: exact camera-lens models verified against Nikon documentation.
Object.assign(SOURCES, {
  "nikonzdx1650": [
    "Nikon — NIKKOR Z DX 16–50mm f/3.5–6.3 VR：仕様・構成図・MTF",
    "https://nij.nikon.com/products/lineup/nikkor/zmount/nikkor_z_dx_16-50mm_f35-63_vr/spec.html"
  ],
  "nikonzdx50250": [
    "Nikon — NIKKOR Z DX 50–250mm f/4.5–6.3 VR：仕様・構成図・MTF",
    "https://nij.nikon.com/products/lineup/nikkor/zmount/nikkor_z_dx_50-250mm_f45-63_vr/spec.html"
  ],
  "nikondxfisheye105": [
    "Nikon — AF DX Fisheye-Nikkor 10.5mm f/2.8G ED：仕様・構成図・MTF",
    "https://nij.nikon.com/products/lineup/nikkor/fmount/af_dx_fisheye-nikkor_105mm_f28g_ed/spec.html"
  ],
  "nikonzoommicro70180": [
    "Nikon — AI AF Zoom Micro Nikkor ED 70–180mm F4.5–F5.6D：製品仕様",
    "https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_zoom_micro_nikkor_ed_70-180mm_f45-f56d/"
  ]
});
OPTICS.push(...[
  {
    "id": "nikon-z-dx-16-50",
    "gearAnchor": "nikon-z-dx-16-50",
    "category": "camera",
    "brand": "nikon",
    "kind": "product",
    "name": "NIKKOR Z DX 16–50mm f/3.5–6.3 VR",
    "en": "NIKKOR Z DX 16–50mm f/3.5–6.3 VR",
    "aliases": [
      "16-50",
      "1650",
      "Z50",
      "標準ズーム",
      "沈胴",
      "DX",
      "APS-C"
    ],
    "elements": 9,
    "groups": 7,
    "focal": "16–50 mm",
    "aperture": "f/3.5–6.3",
    "meta": "7群9枚・ED1枚／非球面4枚",
    "tag": "小さく収める標準ズーム",
    "description": "DXフォーマットのZマウント用標準ズーム。EDと非球面を組み合わせた7群9枚。",
    "detail": "16–50mm、開放f/3.5–6.3のDX用ズームです。7群9枚にEDレンズ1枚と非球面レンズ4枚を含み、インターナルフォーカスとレンズシフト式VRを採用。沈胴時の長さは約32mm、質量は約135gです。焦点距離だけでなく、複数の非球面を使った構成と携帯性の組み合わせが見どころです。実際の構成図と広角端・望遠端のMTFは、下記のニコン公式資料で確認できます。",
    "source": "nikonzdx1650",
    "related": [
      "nikon-z-dx-50-250"
    ]
  },
  {
    "id": "nikon-z-dx-50-250",
    "gearAnchor": "nikon-z-dx-50-250",
    "category": "camera",
    "brand": "nikon",
    "kind": "product",
    "name": "NIKKOR Z DX 50–250mm f/4.5–6.3 VR",
    "en": "NIKKOR Z DX 50–250mm f/4.5–6.3 VR",
    "aliases": [
      "50-250",
      "50250",
      "Z50",
      "望遠ズーム",
      "DX",
      "APS-C",
      "月"
    ],
    "elements": 16,
    "groups": 12,
    "focal": "50–250 mm",
    "aperture": "f/4.5–6.3",
    "meta": "12群16枚・ED1枚",
    "tag": "DXの画角を、望遠へ",
    "description": "ZマウントのDX用望遠ズーム。EDレンズ1枚を含む12群16枚とレンズシフト式VR。",
    "detail": "50–250mm、開放f/4.5–6.3のDX用望遠ズームです。12群16枚にEDレンズ1枚を含み、インターナルフォーカスとレンズシフト式VRを採用。最短撮影距離は50mm時0.5m、250mm時1.0mです。同じDX用の16–50mmと比べ、焦点距離域に加えて構成枚数や撮影距離の変化を見比べられます。実際の構成図と両ズーム端のMTFは公式資料を参照してください。",
    "source": "nikonzdx50250",
    "related": [
      "nikon-z-dx-16-50"
    ]
  },
  {
    "id": "nikon-dx-fisheye-10-5",
    "gearAnchor": "nikon-dx-fisheye-10-5",
    "category": "camera",
    "brand": "nikon",
    "kind": "product",
    "name": "AF DX Fisheye-Nikkor 10.5mm f/2.8G ED",
    "en": "AF DX Fisheye-Nikkor 10.5mm f/2.8G ED",
    "aliases": [
      "10.5",
      "105",
      "魚眼",
      "フィッシュアイ",
      "Fisheye",
      "等立体角",
      "DX"
    ],
    "elements": 10,
    "groups": 7,
    "focal": "10.5 mm",
    "aperture": "f/2.8",
    "meta": "7群10枚・DX対角180°",
    "tag": "広角とは違う、魚眼の写し方",
    "description": "等立体角射影を使うDX用対角線魚眼。EDガラス1枚を含む7群10枚。",
    "detail": "FマウントのDX用魚眼レンズです。7群10枚、EDガラス1枚、開放f/2.8。DXフォーマットで対角180°の画角を持ち、等立体角射影方式を採用しています。通常の広角レンズと、画角を像面へ写す規則の違いに注目できます。最短撮影距離は0.14m、最大撮影倍率は0.2倍。構成図とMTFは下記の公式仕様で確認できます。",
    "source": "nikondxfisheye105",
    "related": [
      "distagon"
    ]
  },
  {
    "id": "nikon-zoom-micro-70-180",
    "gearAnchor": "nikon-zoom-micro-70-180",
    "category": "camera",
    "brand": "nikon",
    "kind": "product",
    "name": "AI AF Zoom Micro Nikkor ED 70–180mm F4.5–F5.6D",
    "en": "AF Zoom-Micro Nikkor 70–180mm f/4.5–5.6D ED",
    "aliases": [
      "70-180",
      "70180",
      "ズームマイクロ",
      "ズームマクロ",
      "接写",
      "Micro"
    ],
    "elements": 18,
    "groups": 14,
    "focal": "70–180 mm",
    "aperture": "f/4.5–5.6",
    "meta": "14群18枚・ED1枚",
    "tag": "距離を保って、倍率を変える",
    "description": "接写とズームを組み合わせたFマウントのマイクロレンズ。14群18枚で全域0.37mまで接近。",
    "detail": "14群18枚、EDレンズ1枚のAFズームマイクロです。ズーム全域で最短撮影距離は約0.37m。最大撮影倍率は70mm時1/3.2倍、180mm時約1/1.32倍で、等倍レンズとは区別します。被写体との距離を保ちながらズームで倍率を変えられる点が見どころです。レンズの設計意図はニコンの<a href=\"https://nij.nikon.com/enjoy/life/historynikkor/0018/\" target=\"_blank\" rel=\"noopener noreferrer\">千夜一夜物語・第十八夜</a>でも紹介されています。",
    "source": "nikonzoommicro70180",
    "related": [
      "nikon-micro-55",
      "nikon-z-mc105"
    ]
  }
]);
// Reflex generations are separate; the personal gear is the New version.
Object.assign(SOURCES, {"nikonreflex500": ["Nikon — ニッコール千夜一夜物語 第十三夜：〈New〉Reflex-Nikkor 500mm F8", "https://nij.nikon.com/enjoy/life/historynikkor/0013/"]});
OPTICS.push(...[
  {
    "category": "camera",
    "brand": "nikon",
    "kind": "product",
    "focal": "500 mm",
    "aperture": "f/8",
    "specCaption": "CATADIOPTRIC PHOTO LENS",
    "source": "nikonreflex500",
    "id": "nikon-reflex-500-old",
    "name": "Reflex-Nikkor 500mm F8（旧型）",
    "en": "Reflex-Nikkor 500mm F8 · original generation · 1969",
    "aliases": [
      "レフレックス",
      "反射レンズ",
      "500mm",
      "旧型",
      "ミラーレンズ"
    ],
    "meta": "1969年登場・最短4m・1,000g",
    "tag": "500mmを、折り返して収める",
    "description": "鏡を用いる撮影用500mm。New型とは分け、旧型の公表仕様を収録。",
    "detail": "ニコンの第十三夜で比較されている旧型500mm F8です。最短撮影距離4m、質量1,000g。1984年のNew型は最短1.5m・840gとなり、小型化と近接撮影の違いを比較できます。記事中の断面図・詳しい設計解説はNew型のものです。",
    "related": [
      "nikon-reflex-500-new"
    ]
  },
  {
    "category": "camera",
    "brand": "nikon",
    "kind": "product",
    "focal": "500 mm",
    "aperture": "f/8",
    "specCaption": "CATADIOPTRIC PHOTO LENS",
    "source": "nikonreflex500",
    "gearAnchor": "nikon-reflex-500",
    "id": "nikon-reflex-500-new",
    "name": "〈New〉Reflex-Nikkor 500mm F8",
    "en": "New Reflex-Nikkor 500mm F8 · 1984",
    "aliases": [
      "レフレックス",
      "反射レンズ",
      "500mm",
      "New",
      "ミラーレンズ",
      "リングボケ",
      "綱嶋輝義"
    ],
    "meta": "1984年登場・最短1.5m・840g",
    "tag": "鏡とレンズで、望遠を小さく",
    "description": "鏡と屈折レンズを組み合わせた500mm。旧型から近接撮影と携帯性を改善。",
    "detail": "主鏡と副鏡で光を折り返し、主鏡の中央孔内に屈折レンズ群を収める設計です。最短撮影距離1.5m、質量840g。中央遮蔽に由来するリング状のボケも特徴です。公式記事には綱嶋輝義による設計の背景と断面図があり、天体望遠鏡につながる撮影レンズとして読めます。",
    "related": [
      "nikon-reflex-500-old",
      "classical-cassegrain"
    ]
  }
]);
const categoryOrder=['objective','eyepiece','camera','reflector'];
OPTICS.sort((a,b)=>categoryOrder.indexOf(a.category)-categoryOrder.indexOf(b.category));
