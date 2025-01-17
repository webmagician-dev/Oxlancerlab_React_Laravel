<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Report;
use App\Models\PaymentsReport;
use App\Models\Project;

class ReportController extends Controller
{
    //
    public function index(Request $request): Response
    {
        $user = Auth::user();
        $allProjects = Project::all();
        $my_projects = $allProjects->where('status', 'open')->where('user_id', $user->name)->all();
        $reports = DB::select('select * from reports ');
        $payments_reports = DB::select('select * from payments_reports ');
        return Inertia::render('Report/Home', [ 'reports' => $reports, 'payments_reports' => $payments_reports, 'my_projects' => $my_projects]);
    }

    public function update(Request $request)
    {
        $report = Report::find($request->input("id"));
        $report->payments = $request->input("payments");
        $report->new_projects = $request->input("new_projects");
        $report->bids = $request->input("bids");
        $report->new_accounts = $request->input("new_accounts");
        $report->finished_projects = $request->input("finished_projects");
        $report->failed_projects = $request->input("failed_projects");
        $report->save();

        return back();
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $old_report = Report::where([
            ['user_id', '=', $user->name],
            ['date', '=', $request->input("date")],
        ])->get();

        if (count($old_report) > 0) {
            return back()->with('message', 'You Report is already exist!');
        } else {
            $report = new Report;
            $report->payments = $request->input("payments");
            $report->new_projects = $request->input("new_projects");
            $report->bids = $request->input("bids");
            $report->new_accounts = $request->input("new_accounts");
            $report->finished_projects = $request->input("finished_projects");
            $report->failed_projects = $request->input("closed_projects");
            $report->user_id = $user->name;
            $report->date = $request->input("date");
            $report->save();

            return back()->with('message', 'You Report created successfully!');
        }

    }

    public function add_payment(Request $request)
    {
        $user = Auth::user();

        $old_report = PaymentsReport::where([
            ['user_id', '=', $user->name],
            ['txHash', '=', $request->input("txHash")],
        ])->get();

        if (count($old_report) > 0) {
            return back()->with('message', 'You Report is already exist!');
        } else {
            $report = new PaymentsReport;
            $report->amount = $request->input("amount");
            $report->project = $request->input("project");
            $report->txHash = $request->input("txHash");
            $report->user_id = $user->name;
            $report->date = $request->input("date");
            $report->save();
            return back()->with('message', 'You Report created successfully!');
        }
    }
}
