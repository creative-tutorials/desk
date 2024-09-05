<div align="center">

![desk-image](/assets/Icon%20-%20Fill.png)

</div>

<div align="center">
  
  [app](https://desk.vercel.app) | [docs](https://docs-desk.vercel.app) | [mail](mailto:hellotimi@pronton.me)

</div>

`desk` is a form builder that enables anyone to easily create forms for their next application With a simple and intuitive interface, you can create forms, add fields, and generate ready-to-use code to integrate into your codebase without manually typing HTML elements.

## Features

- **Form Creation**: Create fully customizable forms with various field types.
- **Code Generation**: Generate well-styled form code with just one click. Copy and paste the code directly into your codebase.
- **User Dashboard**: Manage all your forms and fields through an easy-to-use dashboard.
- **Custom Styling**: Styled with Tailwind and Shadcn to ensure flexibility and a modern look.

## Tech Stack

### Frontend

- **Next.js**: Server-side rendering and fast frontend framework.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **Shadcn**: Component library built for Tailwind CSS.

### Backend

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Fast and lightweight web framework for Node.js.
- **Xata**: Database for storing form data and user submissions.

### Codebase

- **TypeScript**: Ensures type safety and scalability across the project.

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/creative-tutorials/desk.git
```

2. Navigate to the project directory:

```bash
   cd desk
```

3. Install dependencies:

```bash
   bun install
```

4. Set up environment variables:
   We use an `.env` file to store our database keys and other secrets. If you have issues connecting to our server you can ask for help via [mail](mailto:hellotimi@pronton.me).

5. Run the development server:

```bash
   bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Using Desk on our Prod Server

1. Navigate to [desk](https://desk.vercel.app)
1. **Login to the dashboard** to start creating your forms.
1. **Add fields** to your form by selecting the desired input types (text, email, dropdowns, etc.).
1. Once you're satisfied with the form, click **`Generate Code`**.
1. **Copy the code** and paste it into your own codebase for a fully styled and functional form.

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork and clone the repository.
2. Ensure you have the LTS version of Node.js installed.
3. Install the project dependencies by running `bun install`.
4. Create a new branch (`git checkout -b feature-branch`).
5. Commit your changes (`git commit -m 'Add new feature'`).
6. Push to the branch (`git push origin feature-branch`).
7. Open a pull request.

## License

This project is licensed under the MIT License.
