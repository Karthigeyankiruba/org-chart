# Employee Organizational Chart

A modern, interactive organizational chart application built with React and TypeScript. This application allows you to visualize company hierarchy, search and filter employees, and dynamically reassign managers through an intuitive drag-and-drop interface.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Execution](#execution)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Key Features Breakdown](#key-features-breakdown)

## 🎯 About the Project

This application provides a comprehensive solution for managing and visualizing organizational hierarchies. It features:

- **Interactive Org Chart**: Visualize employee relationships in a hierarchical tree structure
- **Real-time Search**: Find employees by name, designation, or team
- **Team Filtering**: Filter employees by team and update the org chart accordingly
- **Drag & Drop Management**: Easily reassign managers by dragging employees in the org chart
- **Employee Details**: View comprehensive employee profiles with skills, experience, education, and achievements
- **Mock API**: Uses MirageJS for API mocking, making it easy to develop and test without a backend

## ✨ Features

### Core Features

- ✅ **Employee List View**

  - Display all employees with name, designation, and team
  - Responsive card-based layout
  - Click to view detailed employee information

- ✅ **Search Functionality**

  - Real-time search across employee names, designations, and teams
  - Debounced input to optimize API calls
  - Instant filtering of results

- ✅ **Team Filtering**

  - Dropdown to filter employees by team
  - Synchronized filtering between list and org chart
  - Dynamic team list from available employees

- ✅ **Organizational Chart**

  - Hierarchical tree visualization using React Flow
  - Automatic layout using Dagre algorithm
  - Manager-employee relationships based on Manager ID
  - Interactive zoom and pan controls

- ✅ **Drag & Drop Manager Reassignment**

  - Drag employees to reassign managers
  - Visual feedback during drag operations
  - API integration to persist changes
  - Automatic chart re-rendering after updates
  - Toast notifications for success/error states

- ✅ **Employee Details Page**
  - Comprehensive employee profile view
  - Contact information and social media links
  - Skills, experience, education, and achievements
  - Clean, modern UI design

### UI/UX Enhancements

- ✅ **Loading States**

  - Skeleton loaders for better perceived performance
  - Component-specific skeletons matching actual layouts

- ✅ **Toast Notifications**

  - Success notifications for manager updates
  - Error handling with user-friendly messages
  - Warning messages for circular reference prevention

- ✅ **Empty States**

  - Helpful messages when no employees match filters
  - Clear visual feedback

- ✅ **Responsive Design**

  - Clean, modern interface
  - Consistent spacing and typography
  - CSS variables for theming

- ✅ **Visual Feedback**
  - Hover effects on interactive elements
  - Highlight states during drag operations
  - Smooth transitions and animations

## 🛠 Tech Stack

### Core Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Key Libraries

- **React Flow** - Interactive org chart visualization
- **Dagre** - Automatic hierarchical layout algorithm
- **TanStack React Query** - Data fetching and state management
- **React Router** - Client-side routing
- **MirageJS** - API mocking for development
- **Styled Components** - Component styling
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **Axios** - HTTP client

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm** (package manager)

You can check your Node.js version by running:

```bash
node --version
```

## 🚀 Installation

1. **Clone the repository** (or navigate to the project directory):

   ```bash
   cd employee-org-chart
   ```

2. **Install dependencies**:

   Using **pnpm** (recommended):

   ```bash
   pnpm install
   ```

3. **Verify installation**:
   The installation is complete when all dependencies are installed without errors.

## ▶️ Execution

### Development Mode

To start the development server:

```bash
pnpm dev
```

The application will be available at:

```
http://localhost:5173
```

The dev server includes:

- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- MirageJS API mocking enabled

### Build for Production

To create a production build:

```bash
pnpm build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

or with pnpm:

```bash
pnpm run preview
```

### Linting

To run ESLint:

```bash
pnpm lint
```

## 📁 Project Structure

```
employee-org-chart/
├── public/                 # Static assets
├── src/
│   ├── api/                # API client and hooks
│   │   ├── client.ts      # Axios instance
│   │   ├── employees.ts   # Employee API hooks
│   │   └── index.ts        # API exports
│   ├── components/        # React components
│   │   ├── common/        # Reusable components
│   │   │   ├── Avatar/    # Avatar component
│   │   │   └── Skeleton/  # Loading skeleton
│   │   ├── EmployeeDetails/  # Employee detail page
│   │   ├── EmployeeList/     # Employee list component
│   │   ├── Filters/          # Search and filter UI
│   │   └── OrgChart/         # Organizational chart
│   ├── contexts/          # React contexts
│   │   └── FilterContext.tsx  # Global filter state
│   ├── hooks/             # Custom React hooks
│   │   └── useDebounce.ts     # Debounce hook
│   ├── layout/            # Layout components
│   │   ├── Dashboard.tsx     # Main layout
│   │   ├── DashboardAside/   # Sidebar
│   │   ├── DashboardMain/    # Main content area
│   │   └── DashboardTopBar/  # Top navigation bar
│   ├── services/          # Services and mock data
│   │   ├── data/          # Mock employee data
│   │   ├── server.ts      # MirageJS server setup
│   │   └── types/         # TypeScript types
│   ├── styles/            # Global styles
│   │   └── global.css     # CSS variables and base styles
│   ├── AppRoutes.tsx      # Route configuration
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global CSS reset
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🔌 API Endpoints

The application uses MirageJS to mock the following API endpoints:

### Get All Employees

```
GET /api/employees
Query Parameters:
  - search (optional): Search term for filtering
  - team (optional): Filter by team name

Response: { employees: Employee[] }
```

### Get Employee by ID

```
GET /api/employees/:id

Response: { employee: Employee }
```

### Get Available Teams

```
GET /api/teams

Response: { teams: string[] }
```

### Update Employee

```
PATCH /api/employees/:id
Body: { managerId?: string, ...otherFields }

Response: { employee: Employee }
```

## 🎨 Key Features Breakdown

### 1. Search & Filter System

- **Search**: Real-time search with debouncing (300ms delay)
- **Team Filter**: Dropdown with all available teams
- **Synchronized Updates**: Both list and chart update simultaneously
- **Empty States**: Helpful messages when no results found

### 2. Organizational Chart

- **Automatic Layout**: Uses Dagre algorithm for optimal node positioning
- **Hierarchical Structure**: Based on Manager ID relationships
- **Interactive Controls**: Zoom, pan, and fit-to-view
- **Visual Feedback**: Highlights during drag operations

### 3. Drag & Drop

- **Manager Reassignment**: Drag employee nodes to change managers
- **Visual Indicators**:
  - Green border on dragged node
  - Blue highlight on target node
  - Tooltip hints during drag
- **Validation**: Prevents circular manager relationships
- **API Integration**: Automatically saves changes via PATCH request

### 4. Employee Details

- **Comprehensive Profile**:
  - Contact information
  - Social media links
  - Bio and skills
  - Professional experience timeline
  - Education history
  - Achievements
- **Navigation**: Click employee from list or chart to view details
- **Responsive Design**: Clean, readable layout

### 5. State Management

- **React Query**: Handles data fetching, caching, and synchronization
- **Context API**: Global filter state management
- **Optimistic Updates**: Immediate UI feedback with background sync

## 🎯 Usage Examples

### Searching for Employees

1. Type in the search box in the left sidebar
2. Results filter in real-time as you type
3. Search matches name, designation, and team

### Filtering by Team

1. Select a team from the dropdown filter
2. Employee list updates to show only that team
3. Org chart updates to show only employees from that team

### Reassigning a Manager

1. In the org chart, click and drag an employee node
2. Drag it over another employee node (target will highlight)
3. Drop to assign the target as the new manager
4. Toast notification confirms the update
5. Chart automatically re-renders with new hierarchy

### Viewing Employee Details

1. Click any employee card in the list, or
2. Click any employee node in the org chart
3. View comprehensive employee profile
4. Click close button or navigate back to return

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Dependencies Installation Issues

If you encounter issues installing dependencies:

1. Clear cache: `pnpm store prune`
2. Delete `node_modules` and `pnpm-lock.yaml`
3. Reinstall: `pnpm install`

### MirageJS Not Working

MirageJS is initialized in `src/main.tsx`. If API calls aren't working:

1. Check browser console for MirageJS logs (in development mode)
2. Verify the server is initialized before React renders
3. Check that API endpoints match the routes defined in `src/services/server.ts`

## 📝 Notes

- **Mock Data**: The application uses MirageJS for API mocking. In a production environment, replace MirageJS with actual API endpoints.
- **Data Persistence**: Changes made through drag-and-drop are saved in memory (MirageJS). Refresh the page to reset to initial data.
- **Browser Support**: Modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge)

## 📄 License

This project is created for assignment purposes.

---

**Built with passion, crafted with care, driven by curiosity**
