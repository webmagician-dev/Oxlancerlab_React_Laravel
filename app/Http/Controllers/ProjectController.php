<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use App\Models\Project;
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
    // Get the 'type' parameter from the request
    $type = $request->input('status', 'all'); // default to 'all' if not specified

    // Base query to get projects based on the filter
    $query = Project::query();

    switch ($type) {
      case 'open':
        $query->where('status', 'open');
        break;
      case 'finished':
        $query->where('status', 'finished');
        break;
      case 'closed':
        $query->where('status', 'closed');
        break;
      case 'all':
      default:
        // No filter, so fetch all projects
        break;
    }

    // Order by created date and paginate
    $projects = $query->orderBy('created_at', 'desc')->paginate(30);

    // Count project statuses
    $allProjects = Project::all();
    $openedProjects = $allProjects->where('status', 'open')->count();
    $closedProjects = $allProjects->where('status', 'closed')->count();
    $finishedProjects = $allProjects->where('status', 'finished')->count();

    // Render the Inertia view with the fetched projects and counts
    return Inertia::render('Project/Home', [
      'projects' => $projects,
      'openCount' => $openedProjects,
      'closeCount' => $closedProjects,
      'finishCount' => $finishedProjects,
      'filterType' => $type, // pass the filter type to the frontend
    ]);
  }
  public function store(Request $request)
  {
    //dd($request);
    // $request->validate([
    //     'type' => 'required',
    //     'project_name' => 'required',
    //     'your_role' => 'required',
    //     'your_name' => 'required',
    //     'your_country' => 'required',
    //     'client_name' => 'required',
    //     'client_country' => 'required',
    //     'budget' => 'required',
    //     'period' => 'required',
    //     'period_unit' => 'required',
    //     'start_date' => 'required',
    //     'got_from' => 'required',
    //     'status' => 'required',
    // ]);
    $project = new Project();
    $project->type = $request->data['type'];
    $project->project_name = $request->data['project_name'];
    $project->your_role = $request->data['your_role'];
    $project->your_name = $request->data['your_name'];
    $project->your_country = $request->data['your_country'];
    $project->client_name = $request->data['client_name'];
    $project->client_country = $request->data['client_country'];
    $project->budget = $request->data['budget'];
    $project->period = $request->data['period'];
    $project->period_unit = $request->data['period_unit'];
    $project->start_date = $request->data['start_date'];
    $project->got_from = $request->data['got_from'];
    $project->status = $request->data['project_status'];

    $project->save();
    return Inertia::render('Project/Home', [
      'project' => $project,
    ]);
  }
}
