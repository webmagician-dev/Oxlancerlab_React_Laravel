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
    // dd($request->all());
    $projects = Project::all(); // Change the number as needed
    $openedProjects = 0;
    $closedProjects = 0;
    $finishedProjects = 0;

    foreach ($projects as $project) {
      switch ($project->status) {
        case "closed":
          $closedProjects++;
          break;
        case "finished":
          $finishedProjects++;
          break;
        case "open":
          $openedProjects++;
          break;
        default:
          break;
      }
    }
    $projects = Project::paginate(5);
    // Render the Inertia view with the fetched projects
    return Inertia::render('Project/Home', [
      'projects' => $projects,
      'openCount' => $openedProjects,
      'finishCount' => $finishedProjects,
      'closeCount' => $closedProjects
    ]);

    // return Inertia::render('Project/Home', ['projects' => $projects]);
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

    return response(['status' => 'success', 'projects' => $project, 'code' => 200]);
  }
}
