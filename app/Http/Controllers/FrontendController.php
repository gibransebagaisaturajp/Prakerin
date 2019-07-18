<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\artikel;
use App\kategori;
use App\tag;
use App\User;
class FrontendController extends Controller
{
	
	// WEB
	public function singlepost(artikel $artikel){
		return view('single-post-games');
	}
	public function index(){
		return view('welcome');
	}
  public function about(){
    return view('about');
  }
  public function blog(){
    return view('blog');
  }
  public function categories(){
    return view('categories');
  }


	// API
public function berita(){
   $artikel = artikel::select('artikels.judul',
                  'artikels.slug',
                  'users.name as author',
                  'foto',
                  'kategoris.nama as kategori')
                  ->join('users','users.id','=','artikels.id_user')
                  ->join('kategoris','kategoris.id','=','artikels.id_kategori')->get();
   $asaiah = artikel::select('artikels.judul',
                  'artikels.slug',
                  'users.name as author',
                  'foto',
                  'kategoris.nama as kategori')
                  ->join('users','users.id','=','artikels.id_user')
                  ->join('kategoris','kategoris.id','=','artikels.id_kategori')->get();

   $kategori = kategori::all();
   $detail = artikel::select('artikels.judul',
   							 'artikels.konten',
   							 'foto',
   							 'kategoris.nama as kategori',
   							 'users.name as author')
   							 ->join('users','users.id','=','artikels.id_user')
   							 ->join('kategoris','kategoris.id','=','artikels.id_kategori')
   							 ->get();
    $tag = tag::all();
    $response = [
   		'success' => true,
    		'data' => [
    			'artikel'=> $artikel, 
    			'kategori' => $kategori,
    			'tag' => $tag,
    			'detail' => $detail,
          'asaiah' => $asaiah
    		],
   		'message' => "Berhasil"
    ];

    return response()->json($response, 200);
	}

}