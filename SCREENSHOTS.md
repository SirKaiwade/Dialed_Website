# Adding Screenshots

To add your app screenshots, place them in the `public/screenshots/` directory with the following naming convention:

## Required Screenshots

### Light Mode Screenshots:
- `dial-light.png` - Dial view in light mode
- `calendar-light.png` - Calendar view in light mode
- `analytics-light.png` - Analytics view in light mode
- `settings-light.png` - Settings view in light mode

### Dark Mode Screenshots:
- `dial-dark.png` - Dial view in dark mode
- `calendar-dark.png` - Calendar view in dark mode
- `analytics-dark.png` - Analytics view in dark mode
- `settings-dark.png` - Settings view in dark mode

## Image Specifications

- **Format**: PNG (recommended) or JPG
- **Aspect Ratio**: 9:19.5 (iPhone aspect ratio)
- **Recommended Size**: 1170x2532px (iPhone 14 Pro Max resolution) or similar
- **File Size**: Keep under 1MB per image for optimal loading

## Directory Structure

```
public/
  screenshots/
    dial-light.png
    dial-dark.png
    calendar-light.png
    calendar-dark.png
    analytics-light.png
    analytics-dark.png
    settings-light.png
    settings-dark.png
```

## Notes

- The website will automatically show the correct screenshot based on the current theme (light/dark mode)
- If a screenshot is missing, a placeholder will be shown with the expected filename
- All screenshots should be high-quality and showcase the app's features clearly

