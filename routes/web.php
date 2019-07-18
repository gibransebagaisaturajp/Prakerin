<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/', function () {
//     return view('welcome');
// });
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::group(
    ['prefix' => '/'],
    function () {
        route::get('/', 'FrontendController@index');
        route::get('blog', 'FrontendController@blog');
        route::get('berita/{artikel}', 'FrontendController@singlepost');
        route::get('blog-tag/{tag}', 'FrontendController@blogtag');
        route::get('blog-kategori{kategori}', 'FrontendController@blogkategori');
        route::get('about', 'FrontendController@about');
        route::get('categories', 'FrontendController@categories');
        route::get('single', 'FrontendController@single-post-games');

    }
);
// Route::group(
//     ['prefix' => 'admin', 'middleware' => 'auth'],
//     function () {
//         Route::get('/', function () {
//             return view('backend.index');
//         });
// );
Route::resource('/artikel', 'ArtikelAPIController');
        Route::resource('/kategori', 'KategoriController');
        Route::resource('/tag', 'TagController');
    