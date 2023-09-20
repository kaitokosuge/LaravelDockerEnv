## Problem
- [x] コメント数やいいねをどこで数える？  
jsxで数えるとコメントやいいねを全部ロードする必要があってよくない
modelで数えてpost.commentCount的な感じで取りだしたい   
フロントでやる
- [x] seederでtruncateしようとすると外部キー制約に引っ掛かる  
`cascadeOnDelete`してもダメっぽかった  
migrate:fresh --seedでいい
- [x] プロフィールの編集のときだけアイコン画像が送れない  
作成時と何も変わらないと思うのにどうしても$request->file(icon_file)がnullになる。何が違うのかわからん。。。。  
patchだと送れないけどpostだと送れるっぽい。意味わからん。時間返せ  
putでも送れなかった。通信容量の問題？
- [x] reactのrouteでid送るのどうすんの  
`route('mypage', {user: user.id})`的な感じでいける
- [x] アイコンの横に名前出したい
Gridだと幅を指定しなきゃだから微妙。アイコンに詰めてほしい。  
Boxをflexboxにすればよし
- [x] muiでスタイルカスタムするのどうすんの  
やり方いろいろ書いてあるけどどれもよくわからん。  
MUI Systemを使うのがわかりやすかった。  
https://mui.com/system/getting-started/

## 日記
### 9/16
- modelのリレーション書いた  
テーブル名勝手につけたときはこんな感じで指定できるんだね～  
`return $this->belongsToMany(User::class, 'post_likes', 'post_id', 'user_id');`
- マイページに自分の投稿とそのカテゴリー表示できるようにした
Auth::user()でログインしてるuserのインスタンスとれるっぽい。便利～
- ユーザー登録時にアイコン設定できるようにした  
reactのformがよくわかってなかったね。  
`Cloudinary::upload($request->file('icon_file')->getRealPath())->getSecurePath()`
これを配列定義の中とかでやるとアップロードできても返り値がurlになってなかった。地の文でやるのが安牌そう。
- mypageへのリンクをヘッダーのとこに追加  
navigationファイルじゃなくてAuthentificatedLayout.jsxを編集しよう
- プロフィール編集でアイコンとステータスメッセージ変えれるようにした  
patchメソッドだとファイル送れなかったからpostメソッドにしてしまったが良いのだろうか

### 9/17
- タイムラインのスタイルつけ始めた  
materialUI使ってみたけど難しすぎるかもしれん。アイコンの横に名前出すだけで3時間ぐらいかかった。それすら満足にはできてないが。

### 9/19
- 投稿に画像を並べて表示してみた  
materialUIのImageList使って一瞬だった。すごい

### 9/20
- 自作スタイルをtailwind混ぜてたのからMUIに統一した。  
materialUIのカスタム方法わかってきたぞ。公式ドキュメントが充実してて良い。
