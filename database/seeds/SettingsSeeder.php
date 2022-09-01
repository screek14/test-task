<?php

use App\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $settings = [
          'Meshulam_API_KEY' => 'test',
          'Meshulam_API_SECRET' => 'value',
          'Meshulam_API_TOKEN' => 'value',
          'Meshulam_API_TERMINAL' => 'value',
        ];

        foreach ($settings as $slug => $value) {
            $setting = Setting::where('slug', $slug)->first();

            if ($setting) {
                $setting->update(['value' => $value]);
            } else {
                Setting::create([
                    'slug' => $slug,
                    'value' => $value
                ]);
            }
        }
    }
}
