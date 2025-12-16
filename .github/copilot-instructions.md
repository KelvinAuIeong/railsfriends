# AI Agent Instructions for Friends Rails Application

## Project Overview
This is a Ruby on Rails application using Rails 8.1. The application follows standard Rails MVC architecture with some modern enhancements.

## Key Architecture Components

### MVC Structure
- **Models**: Located in `app/models/`
- **Views**: Located in `app/views/`, using ERB templates
  - Main layout: `app/views/layouts/application.html.erb`
  - Home views: `app/views/home/` contains index and about pages
  - Partials: Uses `_header.html.erb` pattern for shared components
- **Controllers**: Located in `app/controllers/`
  - `HomeController` handles main navigation pages

### Asset Pipeline
- Stylesheets: `app/assets/stylesheets/application.css`
- JavaScript: `app/javascript/` using modern JS with controllers pattern
  - Entry point: `app/javascript/application.js`
  - Controllers: `app/javascript/controllers/`

### Configuration
- Environment configs in `config/environments/`
- Database config in `config/database.yml` (SQLite3 for development)
- Routes defined in `config/routes.rb`

## Development Workflow

### Setup Commands
```bash
bin/setup              # Initial project setup
bin/rails server       # Start development server
bin/rails test         # Run test suite
bin/rails db:migrate   # Run database migrations
```

### Development Conventions
1. Use partial templates for shared view components (prefix with `_`)
2. JavaScript controllers use Stimulus patterns in `app/javascript/controllers/`
3. Follow standard Rails routing conventions in `config/routes.rb`

### Testing
- Test files located in `test/` directory
- System tests in `test/system/`
- Controller tests in `test/controllers/`

## Common Development Tasks

### Adding New Pages
1. Add route to `config/routes.rb`
2. Create controller action in relevant controller
3. Add view template in `app/views/[controller]/`
4. Update `_header.html.erb` if navigation link needed

### Debugging
- Development logs in `log/development.log`
- Use `rails console` for interactive debugging
- Check `tmp/cache/` for caching issues

## External Dependencies
- Uses Bundler for Ruby dependency management
- JavaScript dependencies managed through importmaps
- Configuration for PWA support (commented in routes.rb)

## Health Checks
- `/up` endpoint available for monitoring application health
- Returns 200 if application boots successfully

Always reference the official Rails documentation for best practices and conventions.