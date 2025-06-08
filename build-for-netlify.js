#!/usr/bin/env node

// Neural AI Biometric System - Netlify Build Script
// © 2025 Ervin Remus Radosavlevici

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function buildForNetlify() {
  console.log('🧬 Building Neural AI Biometric System for Netlify...');
  console.log('© 2025 Ervin Remus Radosavlevici - Production Build');
  
  try {
    // Create dist directory
    await fs.mkdir('dist', { recursive: true });
    
    // Copy essential files
    await fs.copyFile('netlify.toml', 'dist/netlify.toml');
    await fs.copyFile('_redirects', 'dist/_redirects');
    
    if (await fileExists('public/_headers')) {
      await fs.copyFile('public/_headers', 'dist/_headers');
    }
    
    if (await fileExists('public/manifest.json')) {
      await fs.copyFile('public/manifest.json', 'dist/manifest.json');
    }
    
    if (await fileExists('public/robots.txt')) {
      await fs.copyFile('public/robots.txt', 'dist/robots.txt');
    }
    
    console.log('✅ Essential files copied to dist/');
    console.log('🚀 Ready for Netlify deployment');
    console.log('📧 Contact: ervin210@sky.com | ervin210@icloud.com | radosavlevici.ervin@gmail.com');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

buildForNetlify();