<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class PlanController extends Controller
{
    //
        public function index(Request $request): Response
    {
        $plans = DB::select('select * from plans ');
        return Inertia::render('Plan/Home', [ 'plans' => $plans]);
    }
}
