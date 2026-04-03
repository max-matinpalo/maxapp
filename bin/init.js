#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Resolve current directory for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function initProject() {

	// 1. Format app name and resolve paths
	const rawName = (process.argv[2] || "newapp").trim();
	const appName = rawName.toLowerCase().replace(/\s+/g, "-");
	const targetDir = path.join(process.cwd(), appName);
	const templateDir = path.join(__dirname, "..", "template");
	const logFile = path.join(__dirname, "log");

	// 2. Verify template exists
	if (!fs.existsSync(templateDir)) {
		console.error("Error: Template not found! 😕");
		process.exit(1);
	}

	// 3. Prevent overwriting existing non-empty directories
	if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
		console.error(`Error: Directory "${appName}" is not empty! 🛑`);
		process.exit(1);
	}

	// 4. Copy template files to target
	console.log(`🔨 Creating ${appName}`);
	fs.cpSync(templateDir, targetDir, { recursive: true, force: true });

	// 5. Standardize gitignore filename
	const gitignorePath = path.join(targetDir, "gitignore");
	if (fs.existsSync(gitignorePath)) fs.renameSync(gitignorePath, path.join(targetDir, ".gitignore"));

	// 6. Replace __NAME__ placeholders in core files
	const files = ["package.json", "index.html", "public/manifest.json", "src/App.jsx"];
	files.forEach(file => {
		const filePath = path.join(targetDir, file);
		if (!fs.existsSync(filePath)) return;
		const content = fs.readFileSync(filePath, "utf8").replace(/__NAME__/g, appName);
		fs.writeFileSync(filePath, content);
	});

	// 7. Run package installation
	console.log("📦 Installing dependencies");
	try {
		execSync("npm install", { cwd: targetDir, stdio: "inherit" });
	} catch (e) {
		console.error("Install failed, but project created.");
	}

	// 8. Output success message and optional logs
	console.log(`✅ Ready\ncd ${appName}\nnpm run dev`);
	console.log(`cd ${appName} && npm run dev\n`);
	if (fs.existsSync(logFile)) console.log(fs.readFileSync(logFile, "utf8"));
}

initProject();