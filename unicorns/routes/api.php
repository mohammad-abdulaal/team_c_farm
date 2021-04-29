<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UnicornController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//to add unicorn
Route::post('unicorns',[UnicornController::class, 'store']);
//Route::get('unicornss/{unicorn}/show', [UnicornController::class, 'show']); 
//to get all unicorns
Route::get('getAll',[UnicornController::class, 'get']);

//to get unicorn by id 
Route::get('getbyid/{id}',[UnicornController::class, 'getById']);

//to delete unicorn:
Route::delete('deletebyid/{id}',[UnicornController::class, 'delete']);

//to update unicorn:
Route::post('updatebyid/{id}',[UnicornController::class, 'update']);
