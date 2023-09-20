<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Post;
use App\Models\User;
use App\Models\Category;

class PostController extends Controller
{
    public function mypage(User $user)
    {
        $myposts = $user->posts->load('comments');
        return Inertia::render("Post/Mypage", ["posts" => $myposts, "user" => $user->load("categories")]);
    }
    
    public function home(Post $post)
    {
        return Inertia::render("Post/Home", ["posts" => $post->orderBy('created_at', 'desc')->get()->load('comments')]);
    }
    
    public function create(Category $category)
    {
        return Inertia::render("Post/CreatePost", ["categories" => $category->get()]);
    }
}
