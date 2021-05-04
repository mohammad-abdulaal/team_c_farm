# SEF HW8 - Laravel + React

## How to run

### backend

```sh
cd unicorns
composer install    # Generates vendor folder which contains required packages
composer require laravel/passport
```

#### database setup
open mysql console 
```sql
create database unicorns;
exit
```
Edit in vscode the `unicorns/.env` file
```
DB_USERNAME=[your_user_name]
DB_PASSWORD=[your_password]
```

``` sh
php artisan migrate
php artisan passport:install
php artisan passport:client --personal
# The prompt will ask you for a name, use personal token
php artisan serve
```

### frontend
```sh
cd frontend
yarn install
expo start  # or yarn start works
```

## TODOS

### frontend

| status             | Task                                   | Assigned to |
| ------------------ | -------------------------------------- | ----------- |
| :white_check_mark: | Figure out what the components will be | Louai       |
| :white_check_mark: | SplashScreen component                 | fatima      |
| :white_check_mark: | Mobile navbar                          | Mohammad    |
| :white_check_mark: | Sign in component                      | Mohammad    |
| :white_check_mark: | Sign up component                      | Fatima      |
| :white_check_mark: | Navigation                             | Fatima      |
| :white_check_mark: | Unicorn component(add, delete, update) | Louai       |
| in-progress        | Move frontend to laravel project       | Louai       |
| in-progress        | Trade unicorns component               | Louai       |
| in-progress        | Notifications component                | Louai       |

### Backend

#### Controllers

- [x] User controller (Abdullah)
- [x] Unicorn controller(Rahaf)

#### Models

- [x] User model (Abdullah)
- [ ] Unicorn model

#### Routes

- [ ] task 1(mohammad)
- [ ] task 2
- [ ] task 3

#### Firebase related features

- [x] Sign up for firebase (fatima)
- [x] Do a little demo (fatima)
- [x] Create a new project (fatima)
- [ ] Firebase backend configuration
- [ ] Firebase frontend configuration

## Group

- Rahaf Zaiter
- Fatima Medlij
- Mohammed Abdulaal
- Abdullah Taweel
- Louai Misto
