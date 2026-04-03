# Dev-Detective: Prompt-Based Development Guide

##  Prompt 1: Handle User Input & Event Trigger
Create a search functionality where the user can type a GitHub username and press the "Enter" key to trigger the search. Ensure proper event handling using JavaScript (e.g., `keypress` or `keydown`).

---

## Prompt 2: Fetch User Data from GitHub API
Implement an asynchronous function using `fetch` and `async/await` to retrieve user data from:
https://api.github.com/users/{username}

Ensure proper handling of the response and conversion into JSON format.

---

## Prompt 3: Display User Profile Information
Extract and render the following details dynamically on the UI:
- Avatar Image
- Full Name
- Bio
- Join Date (formatted)

Ensure clean DOM manipulation and responsive UI updates.

---

## Prompt 4: Implement Loader (Loading State)
While the API request is in progress:
- Display a loader (spinner or "Loading... " text).
- Hide the loader once data is successfully fetched or error occurs .

This improves user experience during asynchronous operations.

---

## Prompt 5: Error Handling (User Not Found)
Handle API errors gracefully:
- If a 404 error occurs, display a user-friendly message: **"User Not Found"**
- Prevent UI crashes by using `try-catch` blocks
- Clear previous results if the user is invalid

---

##  Prompt 6: Fetch and Display Top 5 Repositories
Using the `repos_url` from the user data:
- Fetch the user's repositories
- Sort them by latest update (`updated_at`)
- Display only the **top 5 repositories**

Each repository should include:
- Name (clickable link opening in a new tab)

---

##  Prompt 7: Format API Data for Readability
Convert raw API data into user-friendly formats:
- Format dates (e.g., `2023-01-25T12:00:00Z` →  `25 Jan 2023`)
- Handle missing fields (bio, portfolio, etc.) with fallback text

Ensure consistent and clean presentation.

---

