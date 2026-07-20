# Use Case 2 – User-Defined Learning Instance Creation

## Description
This project automates the creation of a User-Defined Learning Instance in Automation Anywhere Community Edition using Playwright with the Page Object Model (POM).

## Tools Used
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

## Prerequisites
- Node.js
- Playwright
- Automation Anywhere Community Edition account

## Installation

```bash
npm install
npx playwright install
```

## Configure Environment

Create a `.env` file:

```env
USERNAME=your_email@example.com
PASSWORD=your_password
BASE_URL=https://community.cloud.automationanywhere.digital
```

## Run the Test

```bash
npx playwright test tests/usecase2.spec.ts
```

## Test Flow
- Login to Automation Anywhere.
- Navigate to AI Learning Instances.
- Create a User-Defined Learning Instance.
- Add 2 Form Fields.
- Add 2 Table Fields.
- Create a Field Rule.
- Save the Learning Instance.
- Verify the success message and Learning Instance creation.

## Assertions
- Learning Instance page loads successfully.
- User-Defined option is selected.
- Form and Table fields are added.
- Field Rule is created successfully.
- Learning Instance is saved successfully.
- Success message is displayed.
- Created Learning Instance appears in the list.
