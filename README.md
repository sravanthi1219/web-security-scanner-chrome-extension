# 🛡️ Web Security Scanner Chrome Extension

## 🔍 Overview
The **Web Security Scanner** is a Chrome extension designed to help users identify potential security vulnerabilities on web pages. It scans for common threats such as **Cross-Site Scripting (XSS)** and **SQL Injection**, while also verifying **secure connections (HTTPS)**.

## 🚀 Features
- 🕵️ **XSS Detection**: Identifies potential XSS vulnerabilities using static and heuristic analysis.
- 💾 **SQL Injection Detection**: Scans for common SQL injection patterns that could indicate vulnerabilities.
- 🔒 **Security Check**: Alerts users if the page is not served over **HTTPS** or contains mixed content.
- 🎨 **User-Friendly Interface**: Provides a simple popup interface to initiate scans and display results.

## 🛠️ Installation Guide
### Prerequisites
Ensure that you have **Google Chrome** installed on your system.

### 📥 Steps to Install
1. 📂 Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/Web-Security-Scanner.git
   ```
2. 🌐 Open Google Chrome and navigate to:
   ```
   chrome://extensions/
   ```
3. 🏗️ Enable **Developer Mode** (toggle in the top-right corner).
4. 📌 Click **Load unpacked** and select the project folder.
5. ✅ The extension will now be installed and available in the Chrome toolbar.

## 🎯 Usage Instructions
1. 🔹 Click on the **Web Security Scanner** extension icon in the Chrome toolbar.
2. 🔍 Click the **Scan for Vulnerabilities** button.
3. ⚡ The extension will analyze the current web page and display the results.
4. 🚨 If vulnerabilities are detected, alerts will notify the user.

## 📂 File Structure
- 📜 **manifest.json**: Configuration file defining permissions and extension details.
- 🔧 **background.js**: Handles background tasks and scanning logic.
- 📄 **content.js**: Injects scanning scripts into web pages.
- 🖥️ **popup.html**: User interface for the extension.
- 🖱️ **popup.js**: Controls interactions within the popup interface.
- 📦 **package.json**: Defines dependencies and metadata.
- 🔍 **package-lock.json**: Tracks installed dependencies.

## 🔑 Permissions Required
The extension requests the following permissions:
- 🌍 **activeTab**: Allows the extension to interact with the currently active tab.
- 📝 **scripting**: Enables script injection for security scanning.

## 🤝 Contribution Guidelines
We welcome contributions to improve this project. To contribute:
1. 🍴 **Fork** the repository.
2. 🌱 Create a **new branch** for your feature or fix.
3. 💡 Commit your changes and push them to your fork.
4. 🔄 Submit a **pull request** with a detailed description of the modifications.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.



