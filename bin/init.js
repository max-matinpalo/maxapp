#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';


const __dirname = path.dirname(fileURLToPath(import.meta.url));


function initProject() {
	const rawName = (process.argv[2] || 'newapp').trim();
	const appName = rawName.toLowerCase().replace(/\s+/g, '-');
	const targetDir = path.join(process.cwd(), appName);
	const templateDir = path.join(__dirname, '..', 'template');
	const logFile = path.join(__dirname, 'log');

	if (!fs.existsSync(templateDir)) {
		console.error('Error: Template not found! 😕');
		process.exit(1);
	}

	if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
		console.error(`Error: Directory "${appName}" is not empty! 🛑`);
		process.exit(1);
	}

	console.log(`Creating ${appName} 🎨`);
	fs.cpSync(templateDir, targetDir, { recursive: true, force: true });

	const gitignorePath = path.join(targetDir, 'gitignore');
	if (fs.existsSync(gitignorePath)) fs.renameSync(gitignorePath, path.join(targetDir, '.gitignore'));

	const files = ['package.json', 'index.html', 'public/manifest.json', 'src/App.jsx'];
	files.forEach(file => {
		const filePath = path.join(targetDir, file);
		if (!fs.existsSync(filePath)) return;
		const content = fs.readFileSync(filePath, 'utf8').replace(/__NAME__/g, appName);
		fs.writeFileSync(filePath, content);
	});

	console.log('Installing dependencies 📦');
	try {
		execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
	} catch (e) {
		console.error('Install failed, but project created.');
	}

	console.log(`\nSuccess! 🚀\ncd ${appName}\nnpm run dev`);
	if (fs.existsSync(logFile)) {
		console.log(fs.readFileSync(logFile, 'utf8'));
	}
}


initProject();