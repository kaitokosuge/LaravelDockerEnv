<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    
    public function post()
    {
        $this->belongsTo(Post::class);
    }
    public function author()
    {
        $this->belongsTo(User::class, 'user_id');
    }
    public function likedBy()
    {
        $this->belongsToMany(User::class, 'comment_likes', 'comment_id', 'user_id');
    }
}
