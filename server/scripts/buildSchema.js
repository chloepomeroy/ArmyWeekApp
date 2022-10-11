import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'graphql';
const { graphql, introspectionQuery } = pkg;
import { printSchema } from 'graphql/utilities/index.mjs'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import Schema from '../schemas/index.js';

async function buildSchema() {
    await fs.ensureFile('../data/schema.graphql.json');
    await fs.ensureFile('../data/schema.graphql');

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.json'),
        JSON.stringify(await graphql(Schema, introspectionQuery), null, 2)
    );

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.txt'),
        printSchema(Schema)
    );
}

async function run() {
    await buildSchema();
    console.log('Schema build complete!');
}

run().catch(e => {
    console.log(e);
    process.exit(0);
});