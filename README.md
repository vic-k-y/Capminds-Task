# Capminds Scheduler

A responsive web-based appointment scheduling system designed for healthcare practices. This application allows medical staff to manage patient appointments through an intuitive calendar interface and comprehensive dashboard with filtering capabilities.

## 🎯 Features

- **Calendar View**: Interactive 3-month calendar display with appointment visualization
- **Appointment Booking**: Modal-based form to schedule new appointments with patient details, doctor selection, hospital location, and specialty
- **Dashboard Management**: Table-view of all scheduled appointments with detailed information
- **Edit & Delete**: Full CRUD operations for managing appointments
- **Advanced Filtering**: Search and filter appointments by:
  - Patient name
  - Doctor name
  - Date range
- **Live Search**: Real-time filtering as you type (200ms debounce)
- **Data Persistence**: Appointment data saved to browser's localStorage
- **Responsive Design**: Mobile-friendly navigation with collapsible sidebar
- **Date Validation**: Appointments can only be scheduled for current date or up to 3 months ahead

## 📋 Appointment Fields

Each appointment includes:

- Patient Name
- Doctor Selection (Dr. Ram, Dr. Santhosh, Dr. Robert)
- Hospital Location (Central Hospital, General Hospital, St. Mary's Medical Center)
- Specialty (Cardiology, Dermatology, Neurology, Pediatrics, Psychiatry, Oncology)
- Date & Time
- Reason for Visit

## 💻 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Responsive styling with CSS custom properties
- **JavaScript (Vanilla)**: Core application logic without external dependencies
- **Ion Icons**: Icon library for UI elements
- **LocalStorage API**: Client-side data persistence

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/capminds-scheduler.git
```

2. Navigate to the project directory:

```bash
cd capminds-scheduler
```

3. Open `index.html` in your web browser:

```bash
# On macOS
open index.html

# On Windows
start index.html

# Or simply double-click the file
```

## 📁 Project Structure

```
capminds-scheduler/
├── index.html          # Main HTML file with modal and UI structure
├── index.js            # Application logic (calendar, appointments, storage)
├── styles.css          # Responsive styling and theme
├── img/                # Image assets
│   ├── logo.png
│   ├── material-symbols_navigate-next.png
│   └── Vector (1).png
└── README.md           # Documentation
```

## 🔧 Key Functionality

### Navigation

- Toggle between Calendar view and Dashboard view
- Responsive mobile navigation with icon-based menu

### Appointment Creation

1. Click "Book Appointment" button
2. Fill in appointment details in the modal form
3. Submit to save (new appointment automatically assigned unique ID)

### Appointment Management

- **Edit**: Click the pencil icon next to any appointment to modify
- **Delete**: Click the trash icon with confirmation dialog
- **View**: All appointments displayed in calendar and dashboard

### Filtering (Dashboard Only)

- Enter patient name or doctor name to search
- Select start and end dates for date range filtering
- Click "Apply Filters" to update results
- Click "Clear Filters" to reset and view all appointments

## 💾 Data Storage

All appointment data is stored in the browser's `localStorage`. Each appointment is stored as a JSON object with a unique ID:

```javascript
{
  patient: "John Doe",
  doctor: "Dr. Ram",
  hospital: "Central Hospital",
  specialty: "Cardiology",
  date: "2026-04-15",
  time: "14:30",
  reason: "Check-up",
  userId: 1
}
```

**Note**: Data persists only in the current browser. Clearing browser cache will delete all appointments.

## 🎨 Design Highlights

- **Color Scheme**: Professional blue (#2c7be5) with clean white backgrounds
- **Typography**: Open Sans font family for readability
- **Responsive**: Adapts seamlessly from mobile to desktop viewports
- **Accessibility**: Semantic HTML and icon-based UI elements using Ion Icons

## 🔍 Code Architecture

- **Event Delegation**: Used for handling clicks on dynamically added appointment elements
- **Edit Mode Tracking**: `currentEditUserId` variable tracks which appointment is being edited
- **LocalStorage as DB**: Single source of truth for all appointment data
- **Date Formatting**: Handles date parsing and formatting across different views

## 📝 Notes

- Appointments are displayed with a 15-minute default duration
- Time is converted from 24-hour to 12-hour format for display
- Past appointments cannot be scheduled (date validation enforced)
- All data is client-side; no backend server required

## 🚧 Future Enhancements

- Backend integration with database
- Authentication and user roles
- Email notifications for appointments
- Multiple hospital/practice management
- Booking availability based on doctor schedules
- Recurring appointments
- Patient history and medical notes

## 📧 Contact

For questions or feedback, please reach out or open an issue in the repository.

## 📄 License

This project is open source and available under the MIT License.
