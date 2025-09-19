#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Configuration
const DATA_DIR = path.join(__dirname, '..', 'data');
const SCHEMA_FILE = path.join(DATA_DIR, 'schema.json');

// Couleurs pour la console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateJsonFile(filePath, ajv, schema) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (valid) {
      log(`✅ ${path.basename(filePath)} - Valide`, 'green');
      return true;
    } else {
      log(`❌ ${path.basename(filePath)} - Erreurs de validation:`, 'red');
      validate.errors.forEach((error) => {
        log(`   - ${error.instancePath}: ${error.message}`, 'yellow');
      });
      return false;
    }
  } catch (error) {
    log(
      `❌ ${path.basename(filePath)} - Erreur de lecture: ${error.message}`,
      'red'
    );
    return false;
  }
}

function main() {
  log('🔍 Validation des fichiers JSON Black Water', 'cyan');
  log('='.repeat(50), 'cyan');

  // Charger le schéma
  if (!fs.existsSync(SCHEMA_FILE)) {
    log(`❌ Schéma non trouvé: ${SCHEMA_FILE}`, 'red');
    process.exit(1);
  }

  const schema = JSON.parse(fs.readFileSync(SCHEMA_FILE, 'utf8'));
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);

  // Fichiers à valider
  const filesToValidate = [
    'members.json',
    'blackwater.json',
    'operations.json',
    'press.json',
  ];

  let allValid = true;

  filesToValidate.forEach((fileName) => {
    const filePath = path.join(DATA_DIR, fileName);
    if (fs.existsSync(filePath)) {
      const isValid = validateJsonFile(filePath, ajv, schema);
      if (!isValid) allValid = false;
    } else {
      log(`⚠️  ${fileName} - Fichier non trouvé`, 'yellow');
    }
  });

  log('='.repeat(50), 'cyan');

  if (allValid) {
    log('🎉 Tous les fichiers JSON sont valides !', 'green');
    process.exit(0);
  } else {
    log('💥 Certains fichiers contiennent des erreurs', 'red');
    process.exit(1);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  main();
}

module.exports = { validateJsonFile, main };
