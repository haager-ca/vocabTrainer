import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const response = await prisma.voc.findMany({
    where: { language: "English" }
})

// 2.
return { feed: response };
}) satisfies PageServerLoad;