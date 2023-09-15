## 日記
### 9/16
- modelのリレーション書いた  
テーブル名勝手につけたときはこんな感じで指定できるんだね～  
`return $this->belongsToMany(User::class, 'post_likes', 'post_id', 'user_id');`
- マイページに自分の投稿とそのカテゴリー表示できるようにした
Auth::user()でログインしてるuserのインスタンスとれるっぽい。便利～