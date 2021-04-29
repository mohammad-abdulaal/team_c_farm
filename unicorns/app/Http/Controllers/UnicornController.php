<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Unicorn;

class UnicornController extends Controller
{
    //getAll unicorns 
    public function get(){
        $res = [
            'all' => [],
        ];
        
        $unicorns = Unicorn::get();

        foreach($unicorns as $key => $unicorn) {
            //just for the user details :will be continued later

            // $owner = Unicorn::join('users', 'unicorns.user_id', '=', 'users.id')
            //         ->select('users.id', 'users.first_name', 'users.last_name')
            //         ->where('users.id', $unicorn->user_id)->get()->first();

            $res['all'][$key] = [
                'id' => $unicorn->id,
                'name' => $unicorn->name,
                //'owner' => $owner
            ];
        }
        return response()->json($res);
    }

    public function show(Unicorn $unicorn){
       return response()->json($unicorn, 201);
    } 


    //create unicorn
    public function store(Request $request) {
        $attributes = $request->validate([
        'name' => 'required|string',        
        ]);
        
        $unicorn =
        Unicorn::create([
        'name' => $attributes['name'],
        'user_id' => null
        
        ]);       
        return response()->json($unicorn, 200);
        } 

   

        //get unicorn by Id 
        public function getByID($id){
            $unicorn = Unicorn::find($id);
            return response()->json($unicorn);
        }
    
    
        //delete unicorn 
        public function delete($id){
            $res = Unicorn::destroy($id);
            return response()->json($res);
        }

        

        //update unicorn 
        public function update(Request $request,$id) {
            $unicorn = Unicorn::find($id);

            $attributes = $request->validate([
            'name' => 'required|string',                    
            ]);
            
            $unicorn -> update($request->all());
            return response()->json($unicorn, 200);
            } 
    
    
    
}
