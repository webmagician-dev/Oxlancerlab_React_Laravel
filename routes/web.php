<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'home'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/home', [DashboardController::class, 'home'])->name('dashboard/home');
    Route::get('/dashboard/airdrop', [DashboardController::class, 'airdrop'])->name('dashboard/airdrop');
    Route::get('/dashboard/pitchdecks', [DashboardController::class, 'pitchdecks'])->name('dashboard/pitchdecks');
    Route::get('/dashboard/adminpanel', [DashboardController::class, 'adminpanel'])->name('dashboard/adminpanel');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
