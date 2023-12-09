<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create permissions
        Permission::create(['name' => 'student.notes.view']);
        Permission::create(['name' => 'student.pensum.view']);
        Permission::create(['name' => 'student.pensum.create']);
        Permission::create(['name' => 'student.user.config']);
        Permission::create(['name' => 'student.perfil.view']);

        // create roles and assign existing permissions
        $role = Role::create(['name' => 'Student']);
        $role->givePermissionTo('student.notes.view');
        $role->givePermissionTo('student.pensum.view');
        $role->givePermissionTo('student.pensum.create');
        $role->givePermissionTo('student.user.config');
        $role->givePermissionTo('student.perfil.view');

        $user = User::create([
            'email' => 'AG230157',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        ]);

        $user->assignRole($role);
    }
}
