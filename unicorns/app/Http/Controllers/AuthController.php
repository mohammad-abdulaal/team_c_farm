<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request){

        $getRequest = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_token' => 'boolean',
        ]);

        $login = [
            'email' => $getRequest['email'],
            'password' => $getRequest['password']
        ];

        if(!Auth::attempt($login))
      {
        return response()->json(['error'=>'Unauthorised'], 401);
      }

        $user = Auth::user();
        if($user instanceOf User)
            $getToken = $user->createToken('personal token');

        $token = $getToken->token;

        if($request['remember_token']){
            $token->expires_at = Carbon::now()->addDays(15);
        }else{
            $token->expires_at = Carbon::now()->addDays();
        }
        $token->save();

        return response()->json([
            'access' => $getToken->accessToken,
            'token' => 'Bearer',
            'expires' => Carbon::parse(
                $token->expires_at
            )->toDateTimeString()
        ],200);

       

    }

    //public user 

    public function logout(){
        $user = Auth::user();
        if($user instanceOf User)
            $user->token()->revoke();
        return response()->json([
            'information' => 'you are logout'
        ], 201);
    }

    public function register(Request $request){
        $request->validate([
            'first_name' => 'required|string|max:255',
            'sure_name' => 'required|string|max:255',
            'email' => 'required|string|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
            //confirmed_password
        ]);

        $user = User::create([
            'first_name' => $request['first_name'],
            'sure_name' => $request['sure_name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password'])
          ]);

        if($user instanceOf User)
            $getToken = $user->createToken('personal token');
        $token = $getToken->token;

        if($request['remember_token']){
            $token->expires_at = Carbon::now()->addDays(15);
        }else{
            $token->expires_at = Carbon::now()->addDays();
        }
        $token->save();

        return response()->json([
            'access' => $getToken->accessToken,
            'token' => 'Bearer',
            'expires' => Carbon::parse(
                $token->expires_at
            )->toDateTimeString()
        ],200);
    }


    public function details(){
        $user = auth()->user();
        return response()->json($user, 200);
    }
}
