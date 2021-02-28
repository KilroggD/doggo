# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run it just pull the repo and run (node and npm should be installed):

- npm install
- npm start

Main features:
- Load 6 dog images (via Promise.all)
- Show loading spinnner while loading
- 2 routes - /favorites/ and /
- Clear button to remove favs from state and locals storage
- Refresh button to reload images and go back home
- Code to check if img is a video (webm or mp4) and render video element instead
- Flexbox layout used

Possible improvements for real prod code:
- Add proptypes validation (or use typescript)
- Add unit tests (Jest and Enzyme or React testing library)
- Add limits to favorites count
- Validate file type (not all results are images)
- Handle images onload / onerror states
