# Online Video Editing Canvas

## Overview

The Online Video Editing Canvas is a web application built with React that allows users to upload, view, edit, and download videos. The application integrates various functionalities, including video trimming, applying slow motion effects, and removing video backgrounds. This project demonstrates a comprehensive approach to handling video processing in a user-friendly interface.

## Features

- **Video Uploading**: Users can upload videos using the Cloudinary upload widget.
- **Video Playback**: Uploaded and edited videos can be viewed directly within the application.
- **Video Editing**: Users can trim videos, apply slow motion effects, and remove backgrounds using predefined API functions.
- **Video Downloading**: Edited videos can be downloaded directly to the user's device.
- **Responsive Design**: The application is designed to be responsive and user-friendly across various devices.

## Components

### 1. VideoUploader

Handles video uploads using Cloudinary. Provides feedback on the uploading status.

### 2. VideoPlayer

Displays the uploaded or edited video for playback.

### 3. VideoEditor

Offers various video editing functionalities such as trimming, applying slow motion, and removing backgrounds.

### 4. VideoDownloader

Allows users to download the edited video. Provides feedback on the downloading status and handles errors gracefully.

## Installation and Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/anjalikabariya/online-video-editor.git
    cd online-video-editor
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Environment Variables**

    Create a `.env` file in the root directory and add your Cloudinary configuration:

    ```bash
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. **Start the Development Server**

    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

## API Reference

### Video Editing API Endpoints

1. **Remove Background**

    ```javascript
    import { removeBackground } from "@/pages/api/api";

    const response = await removeBackground(videoId);
    ```

2. **Trim Video**

    ```javascript
    import { trimVideo } from "@/pages/api/api";

    const response = await trimVideo(videoId, startTime, endTime);
    ```

3. **Apply Slow Motion**

    ```javascript
    import { applySlowMotion } from "@/pages/api/api";

    const response = await applySlowMotion(videoId, speed);
    ```

### Example API Configuration

- **removeBackground(videoId)**: Removes the background from the video specified by `videoId`.
- **trimVideo(videoId, startTime, endTime)**: Trims the video from `startTime` to `endTime`.
- **applySlowMotion(videoId, speed)**: Applies a slow motion effect to the video with the specified `speed` factor.

## Challenges Faced

### 1. Asynchronous Handling

Managing asynchronous operations like fetching and uploading data was crucial. Proper use of promises and async/await ensured these processes were handled effectively.

### 2. State Management

Handling multiple states (e.g., loading, errors) for different components was challenging. `useState` hooks were used effectively to manage these states.

### 3. Error Handling

Ensuring user-friendly error messages and smooth error handling across components improved user experience significantly.

### 4. Responsive Design

Using Tailwind CSS classes ensured that the application is responsive and user-friendly on different devices.

## Reference of API used in the project

https://cloudinary.com/documentation/video_overview

## Conclusion

This project showcases a comprehensive approach to building a video editing application with React. It ensures a seamless user experience through proper state management, error handling, and responsive design. The components are well-organized, and the code is clean and well-documented, adhering to best practices in React development. This application demonstrates practical implementation of video processing functionalities in a modern web application.

---

Thank you for reviewing this project. If you have any questions or need further information, please feel free to contact me.s