<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unicorn extends Model
{
    use HasFactory;

    protected $table = 'unicorn'; 

    protected $primaryKey = 'id'; 
   
    protected $fillable=[
        'name',
        'user_id'
    ];

    public function user(){
        //belong to one user only 
        return $this->belongsTo(User::class);
    } 
}
