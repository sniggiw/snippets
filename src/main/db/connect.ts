import Database, * as betterSqlite from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'path'

const file = resolve(app.getPath('home'), 'Desktop', 'snippets.db')
const db: betterSqlite.Database = new Database(file, {})
db.pragma('journal_mode = WAL')

export { db }
