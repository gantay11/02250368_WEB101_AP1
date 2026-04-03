https://github.com/gantay11/02250368_WEB101_AP1.git
## Overview
This project recreates Facebook's News Feed page using React and Next.js.

## Functionality
- Responsive navigation bar with search
- Left sidebar with navigation menu links
- Right sidebar with online contacts list
- Stories bar with horizontal scroll
- News feed posts with Like, Comment, and Share buttons
- "What's on your mind?" post creator box
- Responsive layout for desktop, tablet and mobile

## Component Architecture
app/
├── page.js                  # Main page - assembles all components
├── components/
│   ├── layout/
│   │   └── Navbar.js        # Top navigation bar
│   ├── sidebar/
│   │   ├── LeftSidebar.js   # Left nav menu
│   │   └── RightSidebar.js  # Right contacts panel
│   ├── stories/
│   │   └── Stories.js       # Horizontal stories bar
│   ├── feed/
│   │   └── Feed.js          # Center feed container
│   └── post/
│       └── Post.js          # Reusable post card component


## Tech Stack
- Next.js 16
- Tailwind CSS v4
- React 19

## How to Run
bash
npm install
npm run dev

Open [http://localhost:3000](http://localhost:3000)