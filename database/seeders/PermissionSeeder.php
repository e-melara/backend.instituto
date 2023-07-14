<?php

namespace Database\Seeders;

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
        Permission::create(['name' => 'admin.article.view']);
        Permission::create(['name' => 'admin.article.create']);
        Permission::create(['name' => 'admin.article.update']);
        Permission::create(['name' => 'admin.article.delete']);
        Permission::create(['name' => 'admin.product.view']);
        Permission::create(['name' => 'admin.product.create']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'Administrador']);
        $role1->givePermissionTo('admin.product.view');
        $role1->givePermissionTo('admin.product.create');

        $role2 = Role::create(['name' => 'visor']);
        $role2->givePermissionTo('admin.product.view');
        $role2->givePermissionTo('admin.article.view');

        // create demo users
        $user = \App\Models\User::factory()->create([
            'email' => 'test@example.com',
        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::factory()->create([
            'email' => 'admin@example.com',
        ]);
        $user->assignRole($role2);
    }
}
