# laravel-elixir-itod
Convert to image To data URI(base64 encode) on laravel elixir
> itod is Image TO Data-uri

## Installation & Setup
First of all, install laravel-elixir-itod as a development dependency:
```
npm install --save-dev laravel-elixir-itod
```

Create images folder in your resource assets folder (default ```resources/assets/images```).
```
// partial source images directory
/resources/assets/images/**/*

// target scss directory
/resources/assets/sass/data-uri.css
```

## Usage
```
elixir(mix => {
  mix.itod();
});
```

## Configuration
This plugin arguments
```
/**
 * source dir : String
 * target dir : String
 * config: JSON
 */
mix.itod(source dir, target dir, config);
```

This plugin is offers a few config settings
```
{
  // Is this templace file (css file) path (default: current directory```process.cwd()```})
  templatePath: '', 
  
  // Is this file name (default: data-uri.css)
  templateName: '', 
  
  // Each class prefix strings
  prefix: '' 
}
```
