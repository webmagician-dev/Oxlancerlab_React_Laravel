<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function home(Request $request): Response
    {
        return Inertia::render('Dashboard/Home');
    }

    public function airdrop(Request $request): Response
    {
        return Inertia::render('Dashboard/Airdrop');
    }

    public function pitchdecks(Request $request): Response
    {
        return Inertia::render('Dashboard/Pitchdecks');
    }

    public function adminpanel(Request $request): Response
    {
        return Inertia::render('Dashboard/Adminpanel');
    }
}
