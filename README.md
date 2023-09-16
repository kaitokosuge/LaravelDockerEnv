## Problem
- [ ] コメント数やいいねをどこで数える？  
jsxで数えるとコメントやいいねを全部ロードする必要があってよくない
modelで数えてpost.commentCount的な感じで取りだしたい   
- [ ] seederでtruncateしようとすると外部キー制約に引っ掛かる  
`cascadeOnDelete`してもダメっぽかった
- [ ] プロフィールの編集のときだけアイコン画像が送れない  
作成時と何も変わらないと思うのにどうしても$request->file(icon_file)がnullになる。何が違うのかわからん。。。。  
patchだと送れないけどpostだと送れるっぽい。意味わからん。時間返せ
- [ ] reactのrouteでid送るのどうすんの

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