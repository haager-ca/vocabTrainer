import { PrismaClient } from '@prisma/client'
import vocData from '../src/lib/vocData.json' assert  { type: "json" }

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding...`)

    for (const p of vocData) {
        const vocabulary = await prisma.voc.create({
            data: {
                vocabulary: p.vocabulary,
                translation: p.translation,
                language: p.language
            }
        })
        console.log(`Created vocabulary with id: ${vocabulary.id}`)
    }
    console.log(`Seeding finished`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })