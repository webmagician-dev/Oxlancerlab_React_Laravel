<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Report;
use App\Models\PaymentsReport;
use App\Models\Project;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = Auth::user();
        $total = DB::select('SELECT SUM(payments) AS totalmoney, SUM(bids) AS totalbid , SUM(new_accounts) AS totalaccount, SUM(new_projects) AS totalproject FROM reports');
        $everymoneytotal = DB::select('SELECT SUM(payments) AS everymoneytotal, user_id AS username FROM reports GROUP BY user_id');
        $everymonthdata = DB::select("select SUM(payments) as monthmoneytotal, SUM(bids) AS monthbidtotal, DATE_FORMAT(reports.`date`, '%Y-%m') as everymonth from reports group by DATE_FORMAT(reports.`date`, '%Y-%m')");
        return Inertia::render('Dashboard/Home', [ 'total' => $total, 'everymoneytotal' => $everymoneytotal, 'everymonthdata' => $everymonthdata ]);
    }
}
