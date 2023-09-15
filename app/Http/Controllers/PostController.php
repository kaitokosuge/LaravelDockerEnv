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
        $user = Auth::user();
        // dd($user->posts);
        $myposts = $user->posts->load('category');
        return Inertia::render("Post/Mypage", ["posts" => $myposts]);
    }
}
