# React Hook Error Diagnosis

## Error Analysis
- **Error**: Invalid hook call - `useContext` returning null
- **Location**: ThemeToggle.tsx:6 → useTheme() → ThemeContext.tsx:62

## Root Cause Identified

**PRIMARY ISSUE**: Line 29 in App.tsx violates Rules of Hooks
```tsx
{import.meta.env.VITE_TEMPO && useRoutes(routes)}
```

**Problems**:
1. `useRoutes()` called conditionally based on environment variable
2. Hook called directly in JSX instead of component top-level
3. Violates "hooks must be called in same order every time"

## Evidence Supporting This Diagnosis

1. **Stack trace points to useContext/useTheme**: The error occurs when ThemeToggle tries to use useTheme hook
2. **Conditional hook usage**: The `useRoutes` call only happens when `VITE_TEMPO` is enabled
3. **Hook order violation**: When VITE_TEMPO changes, hook call order changes between renders
4. **Component structure is correct**: ThemeProvider properly wraps the app, so context should work

## Validation Steps Needed

1. Check if VITE_TEMPO environment variable is set
2. Confirm the error only occurs when VITE_TEMPO is enabled
3. Test fix by moving useRoutes to proper location

## Proposed Fix

Move `useRoutes` to component top-level and make it non-conditional, or create separate routing component.