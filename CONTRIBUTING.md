# Contributing Guide

This repository is for our **SIH Problem Statement 26034 – Legal Metrology Compliance System**.

We will use **GitHub branches and Pull Requests** to work together.

## 🔄 Basic Workflow

Every time you work on the project:

```text
Pull latest code
      ↓
Create your own branch
      ↓
Do your work
      ↓
Add & Commit
      ↓
Push your branch
      ↓
Create Pull Request
      ↓
Team Leader reviews
      ↓
Merge into main
```

## 1. Get the Latest Code

Before starting your work:

```bash
git checkout main
git pull origin main
```

This makes sure you have the latest project code.

## 2. Create Your Own Branch

Never work directly on `main`.

Create a branch for your task:

```bash
git checkout -b feature/your-task
```

Examples:

```bash
git checkout -b feature/login
git checkout -b feature/frontend
git checkout -b feature/ocr
git checkout -b feature/database
```

## 3. Do Your Work

Work only on the task assigned to you.

Before moving to the next step, test your work.

## 4. Add Your Changes

```bash
git add .
```

## 5. Commit Your Changes

Write a simple message describing what you did:

```bash
git commit -m "add product upload page"
```

Examples:

```bash
git commit -m "add database schema"
git commit -m "add OCR module"
git commit -m "update dashboard UI"
```

## 6. Push Your Branch

```bash
git push origin feature/your-task
```

Your branch will now appear on GitHub.

## 7. Create a Pull Request

Go to our GitHub repository.

You will see an option to create a **Pull Request**.

Create the Pull Request:

```text
Your Branch → main
```

Explain briefly what you changed.

Example:

```text
Added the product image upload page
and basic image validation.
```

## 8. Review & Merge

The Team Leader will review the Pull Request.

If everything is okay:

```text
Pull Request → Approved → Merge → main
```

After the merge, everyone should update their local project:

```bash
git checkout main
git pull origin main
```

## ⚠️ Important Rules

### ❌ Don't do this

```bash
git push origin main
```

### ✅ Do this

```text
Create branch
→ Work
→ Commit
→ Push branch
→ Pull Request
→ Review
→ Merge
```

### Remember

* **main = stable project**
* **branch = your workspace**
* **commit = save your changes**
* **push = send your branch to GitHub**
* **pull = get latest changes**
* **Pull Request = ask the team to merge your work**

If you are confused or get a Git error, **don't randomly run commands**. Send the error in the Discord channel and we will solve it together.
