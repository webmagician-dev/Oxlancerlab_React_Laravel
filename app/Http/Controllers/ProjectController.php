<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    //
        public function index(Request $request): Response
    {
        $projects = DB::select('select * from projects ');

        return Inertia::render('Project/Home', ['projects' => $projects]);
    }
        public function store(Request $request): Response
    {

        // return Inertia::render('Project/Home');
    }
}
