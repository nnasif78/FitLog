
## Project Name

**FitLog - Workout Logging App**

## Live Website

"https://fit-log-gray.vercel.app/"

## Project Description

FitLog is a responsive workout logging web application designed to help users discover exercises, build a daily workout plan, save workouts for later, and keep track of their workout activity.

The application provides a dark, modern fitness-focused interface where users can browse a workout library, explore detailed workout information, add exercises to today's plan, save exercises, sort workouts, and manage their selected workouts from the My Plan page.

The application is built using Next.js, React, TypeScript, and Tailwind CSS, with workout information loaded dynamically from a REST API.

## Technologies Used

* **Next.js** - React framework for building the application.
* **React** - Used to create reusable and interactive UI components.
* **TypeScript** - Provides type safety throughout the project.
* **Tailwind CSS** - Used for responsive styling and UI design.
* **Next.js App Router** - Used for application routing and page structure.
* **React Toastify** - Used for success and action notifications.
* **REST API** - Used to fetch workout data.
* **React Context API** - Used to manage workout plan and saved workout state.

## Features

* Browse a workout library containing multiple exercises.
* View workout images, muscle groups, equipment, difficulty, duration, calories, sets, reps, and ratings.
* View detailed information for individual workouts.
* View workout descriptions and step-by-step instructions.
* Add workouts to today's plan.
* Save workouts for later.
* View all selected workouts from the My Plan page.
* Switch between Today's Plan and Saved workouts.
* View live exercise, duration, and calorie metrics.
* Sort workouts by duration, calories, or rating.
* Mark workouts as completed.
* Remove workouts from today's plan.
* Remove workouts from saved workouts.
* Display toast notifications after important actions.
* Show a loading skeleton while workout data is being loaded.
* Display an empty state when no workouts are available in a section.
* Handle invalid workout details with a 404 page.
* Responsive layout for mobile, tablet, and desktop devices.
* Workout cards adapt to different screen sizes.
* Responsive navigation, hero section, library, plan section, and footer.

## Main Pages

### Home Page

The Home page contains:

* Responsive navigation bar.
* FitLog branding.
* Workout and My Plan navigation.
* Plan and Saved workout counters.
* Hero section with a workout-focused introduction.
* Browse Workouts CTA.
* Workout library.
* Workout cards with exercise information.
* Responsive footer.

### Workout Details Page

Each workout has its own dynamic details page.

The details page includes:

* Workout image.
* Workout name.
* Description.
* Muscle group tags.
* Equipment.
* Difficulty.
* Sets.
* Reps.
* Duration.
* Calories burned.
* Rating.
* Step-by-step workout instructions.
* Add to Today's Plan button.
* Save for Later button.

### My Plan Page

The My Plan page allows users to manage their selected workouts.

It includes:

* Today's Plan tab.
* Saved tab.
* Exercise count.
* Total workout minutes.
* Total calories.
* Workout sorting.
* Workout thumbnails.
* Workout information.
* View Details button.
* Mark as Done button.
* Remove workout option.
* Empty state when there are no workouts.

## Workout Management

Users can add a workout to today's plan directly from the workout details page.

The application prevents duplicate workouts from being added to the same plan and supports a maximum of five workouts in today's plan.

Users can also save workouts for later without adding them to today's plan.

From the My Plan page, users can:

1. View their selected workouts.
2. Sort workouts.
3. Open workout details.
4. Mark workouts as completed.
5. Remove workouts from the plan.
6. Switch to saved workouts.
7. Remove saved workouts.

## Notifications

FitLog uses React Toastify to provide feedback after user actions.

Examples include:

* Workout added to today's plan.
* Workout saved for later.
* Workout marked as done.
* Workout removed from today's plan.
* Workout removed from saved workouts.

## Responsive Design

The application is designed to work across different screen sizes.

### Mobile

* Single-column workout layout.
* Stacked hero content.
* Responsive workout cards.
* Mobile-friendly buttons and controls.
* Centered content where appropriate.

### Tablet

* Two-column workout library.
* Responsive spacing and sizing.
* Adaptive hero layout.
* Responsive My Plan workout cards.

### Desktop

* Three-column workout library.
* Two-column workout details layout.
* Full-width responsive sections.
* Desktop navigation layout.
* Larger spacing and typography.

## API

FitLog uses the following REST API to load workout data:

`https://api.abcz.workers.dev/api/fitlog`

Individual workout details are loaded using:

`https://api.abcz.workers.dev/api/fitlog/:id`

The API provides workout information such as:

* ID
* Name
* Image
* Muscle groups
* Equipment
* Difficulty
* Duration
* Calories burned
* Sets
* Reps
* Rating
* Description
* Instructions

## State Management

The project uses the React Context API to manage workout-related state.

The global state contains:

* Today's workout plan.
* Saved workouts.
* Add-to-plan functionality.
* Save functionality.
* Remove-from-plan functionality.
* Remove-saved functionality.

This allows the Home page, Workout Details page, Navbar, and My Plan page to share the same workout state.

## Loading State

A loading skeleton is displayed while workout data is being fetched on the Home page.

This provides visual feedback to users instead of leaving the page blank while the API request is being completed.

## Error Handling

The application handles invalid workout IDs using Next.js's `notFound()` functionality.

If a workout does not exist, the user is redirected to the appropriate 404 page instead of displaying invalid or incomplete workout information.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nnasif78/FitLog.git
```

### 2. Go to the project directory

```bash
cd fit-log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

## Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── loading.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
│
├── assets/
│   ├── banner.png
│   └── logo.png
│
├── components/
│   ├── homepage/
│   │   ├── Banner.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── WorkoutActions.tsx
│   │   └── WorkoutLibrary.tsx
│   │
│   └── shared/
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── context/
│   └── FitLogContext.tsx
│
└── types/
    └── workout.type.ts
```

## Design

FitLog follows a dark fitness-focused visual style.

The interface uses:

* Dark backgrounds.
* Bright lime accent color.
* Oswald for strong headings.
* Inter for body text and controls.
* Rounded cards and buttons.
* Responsive layouts.
* Clear workout statistics.
* Minimal and focused UI elements.

## Future Improvements

Possible future improvements include:

* Persisting workout plans using localStorage.
* Searching workouts by name or muscle group.
* Filtering workouts by difficulty or equipment.
* More detailed workout progress tracking.
* Workout history.
* Weekly workout statistics.
* User authentication and personal profiles.

## Author

**Nasif Nihan**

