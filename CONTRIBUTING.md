# Contribution Guide for Human Resource Management System

Welcome to the contribution guide for the "Human Resource Management System: Real-time Attendance & Permit Management" project. We're delighted that you're interested in contributing to the development of this modern human resource management system!

## Code of Conduct

We have a Code of Conduct that we expect all project participants to adhere to. Please [read the full text](./CODE_OF_CONDUCT.md) to understand the actions that will and will not be tolerated.

## Our Development Process

We use GitHub to track issues and feature requests, and as our primary platform for receiving pull requests. Our development process focuses on open collaboration to ensure the quality and stability of the application.

## Pull Requests

We enthusiastically welcome pull requests from you, whether for bug fixes, feature additions, or documentation improvements. To contribute to this project, please follow the steps below:

1.  **Fork the Repository and Create a Branch**

    -   Fork this repository to your GitHub account.
    -   Create a new branch from the `main` (or `master`) branch in your repository for each feature or fix you work on. Use a descriptive branch name, for example: `feature/add-permit-validation` or `fix/fix-camera-modal`.

2.  **Make Your Code Changes**

    -   Identify the area you will be changing. This project has a modular structure, pay attention to the following directories:
        -   `src/components/`: For changes or additions to UI components (e.g., modals, tables, forms).
        -   `src/hooks/`: For changes to reusable logic, such as `useAuth.js`, `useCamera.js`, or `useFaceDetection.js`.
        -   `src/services/`: For modifying how the application interacts with APIs (although it currently uses dummy data, this is where the API logic will reside).
    -   Follow the existing code style and patterns to maintain consistency.

3.  **Test Your Changes**

    -   Run the development server to ensure your changes don't break existing functionality.
        ```bash
        npm run dev
        ```
    -   Ensure the feature you changed works as expected. For example, if you changed face detection, test the camera modal. If you changed RBAC, test with different user roles.
    -   Run the build command to ensure the application builds successfully for production.
        ```bash
        npm run build
        ```

4.  **Commit, Push, and Open a Pull Request**

    -   Commit your changes with a clear and descriptive commit message.
    -   Push your commits to the branch in your GitHub repository.
    -   Open a pull request from your branch to the `main` branch in this repository. Provide a clear description of what you changed and why the change is necessary.

We will review the submitted pull requests and respond as soon as possible. Thank you for your contribution to making this Human Resource Management System even better!

## Issues

We use GitHub Issues to track public bugs and feature requests. When creating a new issue, make sure your description is clear and contains enough information to reproduce the problem. If possible, provide steps to reproduce, the expected behavior, and the actual behavior.

## Issue Management

Here are some of the labels (tags) we use to manage issues in this repository:

-   `good first issue`: Good candidates for new contributors to this project.
-   `help wanted`: Issues that need to be addressed and we welcome pull requests for them, but may require significant investigation or work.
-   `bug`: An error or undesired behavior in the application.
-   `enhancement`: Request for an enhancement to an existing feature.
-   `documentation`: Related to improving project documentation (README, code comments, etc.).
-   `question`: Specific questions for the maintainers or the community.

## Contribution Focus Areas

This project has several challenging technical areas. Your contributions are highly appreciated, especially in the following areas:

1.  **UI/UX Components**: Improving the design, accessibility, and user experience of components like permit forms, dashboards, and attendance modals.
2.  **Business Logic & Hooks**: Fixing or adding functionality to custom hooks like `useAuth` (role management), `useCamera` (camera integration), and `useFaceDetection` (ML integration).
3.  **Machine Learning Integration**: The most complex area. Help in optimizing the performance of the face detection model (MediaPipe/TensorFlow), handling edge cases (failed detection), or replacing it with a lighter model would be highly valuable.
4.  **Documentation**: Creating more in-depth documentation, both within the code (comments) and outside the code (e.g., a guide on how to add a new role or how the geolocation flow works).

We are committed to maintaining the quality and reliability of this system. Your contribution in monitoring, reporting, or helping with development is highly appreciated.

## License

By contributing to the Human Resource Management System, you agree that your contributions will be licensed under the [Apache 2.0 License](./LICENSE).
