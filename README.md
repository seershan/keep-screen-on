# Keep Your Screen On

A simple web application that prevents your PC screen from turning off while the page is open. This tool uses the Screen Wake Lock API to keep the screen active, provides a timer to track the duration, and features a dark mode that activates when the screen-on function is started.

## Features

- **Screen Wake Lock:** Keeps the screen on indefinitely while the page is open.
- **Dark Mode:** Automatically switches to dark mode when the screen-on function is activated.
- **Timer:** Displays the elapsed time while the screen-on function is active.
- **Responsive Buttons:** Toggle the screen-on function and timer using "Start" and "Stop" buttons.

## Requirements

- A modern web browser that supports the Screen Wake Lock API (e.g., Google Chrome, Microsoft Edge, Opera).
- Internet connection for initial page load.

## Usage

1. **Open the Webpage:**
   - Launch your preferred web browser.
   - Navigate to the `index.html` file or deploy the webpage to a web server.

2. **Start Keeping Screen On:**
   - Click the "Start" button to activate the screen-on function, switch to dark mode, and start the timer.
   - The "Start" button will disappear, and the "Stop" button will appear.

3. **Stop Keeping Screen On:**
   - Click the "Stop" button to revert to normal settings, light mode, and stop the timer.
   - The "Stop" button will disappear, and the "Start" button will reappear.
