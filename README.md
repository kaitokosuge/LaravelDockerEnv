## Problem
- [ ] コメント数やいいねをどこで数える？  
jsxで数えるとコメントやいいねを全部ロードする必要があってよくない
modelで数えてpost.commentCount的な感じで取りだしたい   
- [ ] seederでtruncateしようとすると外部キー制約に引っ掛かる  
`cascadeOnDelete`してもダメっぽかった

## 日記
### 9/16
- modelのリレーション書いた  
テーブル名勝手につけたときはこんな感じで指定できるんだね～  
`return $this->belongsToMany(User::class, 'post_likes', 'post_id', 'user_id');`
- マイページに自分の投稿とそのカテゴリー表示できるようにした
Auth::user()でログインしてるuserのインスタンスとれるっぽい。便利～