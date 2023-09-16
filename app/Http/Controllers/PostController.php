<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function mypage(User $user)
    {
        $myposts = $user->posts->load('comments');
        return Inertia::render("Post/Mypage", ["posts" => $myposts, "user" => $user->load("categories")]);
    }
}
