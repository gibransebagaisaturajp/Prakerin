<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class kategori extends Model
{
    protected $fillable = ['nama_kategori','slug'];
    public $timestamps = true;

    public function artikel()
    {
        return $this->hasMany('App\artikel', 'id_kategori');
    }

    public static function boot()
    {
        parent::boot();
        self::deleting(function ($kategori) {
            // mengecek apakah penulis masih punya buku
            if ($kategori->artikel->count() > 0) {
                //menyiapkan pesan error
                $html = 'Kategori tidak bisa dihapus karena masih digunakan oleh artikel: ';
                $html .= '<ul>';
                foreach ($kategori->artikel as $data) {
                    $html .= "<li>$data->judul<li>";
                }
                $html .= '<ul>';
                Session::flash("flash_notification", [
                    "level" => "danger",
                    "message" => $html
                ]);
                //membatalkan proses penghapusan
                return false;
            }
        });
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
