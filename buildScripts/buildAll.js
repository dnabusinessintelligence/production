'use strict';

const cp        = require('child_process'),
      cpOpts    = { env: process.env, cwd: process.cwd(), stdio: 'inherit' },
      os        = require('os'),
      npmCmd    = os.platform().startsWith('win') ? 'npm.cmd' : 'npm', // npm binary based on OS
      startDate = new Date();

// npm install
cp.spawnSync(npmCmd, ['i'], cpOpts);

// docs
cp.spawnSync(npmCmd, ['run', 'generate-docs-json'],       cpOpts);

// themes dev
cp.spawnSync(npmCmd, ['run', 'dev-css-structure'],        cpOpts);
cp.spawnSync(npmCmd, ['run', 'dev-theme-dark'],           cpOpts);
cp.spawnSync(npmCmd, ['run', 'dev-theme-dark-no-css4'],   cpOpts);
cp.spawnSync(npmCmd, ['run', 'dev-theme-light'],          cpOpts);
cp.spawnSync(npmCmd, ['run', 'dev-theme-light-no-css4'],  cpOpts);

// themes prod
cp.spawnSync(npmCmd, ['run', 'prod-css-structure'],       cpOpts);
cp.spawnSync(npmCmd, ['run', 'prod-theme-dark'],          cpOpts);
cp.spawnSync(npmCmd, ['run', 'prod-theme-dark-no-css4'],  cpOpts);
cp.spawnSync(npmCmd, ['run', 'prod-theme-light'],         cpOpts);
cp.spawnSync(npmCmd, ['run', 'prod-theme-light-no-css4'], cpOpts);

// neo dist versions => examples, docs app
cp.spawnSync(npmCmd, ['run', 'build-development'],        cpOpts);
cp.spawnSync(npmCmd, ['run', 'build-production'],         cpOpts);

// neo dist versions => default apps (rw1 & rw2)
cp.spawnSync(npmCmd, ['run', 'dev-build-all-my-apps'],    cpOpts);
cp.spawnSync(npmCmd, ['run', 'prod-build-all-my-apps'],   cpOpts);

const processTime = (Math.round((new Date - startDate) * 100) / 100000).toFixed(2);
console.log(`Total time: ${processTime}s`);

process.exit();