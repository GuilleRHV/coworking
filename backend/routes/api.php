<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/
Route::get('/prueba', function () {
    return [
        'status' => 'ok',
        'mensaje' => 'API funcionando correctamente, 5 rev',
        'timestamp' => now(),
    ];
});
Route::get('/rooms', [App\Http\Controllers\Api\RoomController::class, 'index']);
