import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types'


async function main() {
    const voc = await prisma.voc.findMany()
    console.log(voc)
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