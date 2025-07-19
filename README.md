<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>BOOKBAZAAR</h1>
<p align="left">
	<em> <b>BookBazaar – REST API for Online Bookstore</b>

A TypeScript-based RESTful API server for managing an online bookstore with user authentication, book catalog management, order placement, and payment integration.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/cryptomafiaPB/bookBazaar?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/cryptomafiaPB/bookBazaar?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/cryptomafiaPB/bookBazaar?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/cryptomafiaPB/bookBazaar?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🔧 Configuration](#-configuration)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

BookBazaar is a TypeScript-based RESTful API built with Express and MongoDB. It allows users to register, authenticate, manage books & reviews, handle carts & orders, and process payments via Razorpay. Uploaded book cover images are stored on Cloudinary. This API serves as the backend for an online bookstore application.

---

## 👾 Features
<ul>
<li>User Registration & Login with JWT-based authentication and API Key generation.</li>
<li>Role-based Access Control: Admin vs. regular user with protected routes.</li>
<li>Book Management: Admins can create books with cover images and PDF uploads.</li>
<li>Order Placement: Authenticated users can place and view orders.</li>
<li>Payment Processing: Razorpay integration for secure payments and webhook-based verification.</li>
<li>Health Check endpoint for monitoring.</li>
<li>Validation via Zod schemas.</li>
<li>Cloudinary integration for storing cover images.</li>
<li>Error Handling with centralized middleware.</li>
</ul>
---

## 📁 Project Structure

```sh
└── bookBazaar/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── config
    │   ├── controllers
    │   ├── db
    │   ├── index.ts
    │   ├── middlewares
    │   ├── models
    │   ├── routes
    │   ├── services
    │   ├── utils
    │   └── validators
    └── tsconfig.json
```


### 📂 Project Index
<details open>
	<summary><b><code>BOOKBAZAAR/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/index.ts'>index.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/app.ts'>app.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>middlewares</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/middlewares/auth.middleware.ts'>auth.middleware.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/middlewares/upload.middleware.ts'>upload.middleware.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/middlewares/error.middleware.ts'>error.middleware.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/config/cloudinary.ts'>cloudinary.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>controllers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/controllers/book.controller.ts'>book.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/controllers/payments.controller.ts'>payments.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/controllers/order.controller.ts'>order.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/controllers/auth.controller.ts'>auth.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>validators</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/validators/auth.ts'>auth.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/validators/book.ts'>book.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/review.model.ts'>review.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/books.model.ts'>books.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/api_keys.model.ts'>api_keys.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/user.model.ts'>user.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/cart.model.ts'>cart.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/payment.model.ts'>payment.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/models/order.model.ts'>order.model.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/routes/payment.route.ts'>payment.route.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/routes/book.route.ts'>book.route.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/routes/order.route.ts'>order.route.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/routes/auth.route.ts'>auth.route.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/utils/api-error.ts'>api-error.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/utils/envLoader.ts'>envLoader.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/utils/api-responce.ts'>api-responce.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/utils/constant.ts'>constant.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/utils/asyncHandler.ts'>asyncHandler.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/services/book.service.ts'>book.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/services/order.service.ts'>order.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/services/auth.service.ts'>auth.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>db</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/cryptomafiaPB/bookBazaar/blob/master/src/db/connectDB.ts'>connectDB.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with bookBazaar, ensure your runtime environment meets the following requirements:

- **Node.js >= 16.x**

- **npm >= 8.x**

- **MongoDB instance** (local or cloud)
- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install bookBazaar using one of the following methods:

**Build from source:**

1. Clone the bookBazaar repository:
```sh
❯ git clone https://github.com/cryptomafiaPB/bookBazaar.git
```

2. Navigate to the project directory:
```sh
❯ cd bookBazaar
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### 🔧 Configuration

Create a `.env` file in the project root and set the following variables:

```sh
# Server
PORT=4000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb://localhost:27017/bookbazaar

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay (for payments)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# Email (for verification)
BASE_URL=http://localhost:4000
```


### 🤖 Usage
Run bookBazaar using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Complete functional backend.</strike>
- [ ] **`Task 2`**: Frontend integration.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/cryptomafiaPB/bookBazaar/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/cryptomafiaPB/bookBazaar/issues)**: Submit bugs found or log feature requests for the `bookBazaar` project.
- **💡 [Submit Pull Requests](https://github.com/cryptomafiaPB/bookBazaar/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/cryptomafiaPB/bookBazaar/
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/cryptomafiaPB/bookBazaar/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=cryptomafiaPB/bookBazaar">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
