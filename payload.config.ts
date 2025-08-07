// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './src/collections/User'
import { Media } from './src/collections/Media'
import { StartUps } from '@/collections/Startups'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Team } from '@/collections/Team'
import { Collaborations } from '@/collections/Collaborations'
import { PreviousSpeakers } from '@/collections/PreviousSpeakers'
import { FoundersHive } from '@/collections/FoundersHive'
import { FoundersHiveImages } from '@/collections/FoundersHiveImages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, StartUps, Team, Collaborations,PreviousSpeakers,FoundersHive,FoundersHiveImages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: {
          prefix: "assets",
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),

  ],
})
