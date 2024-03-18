import type { Actions } from './$types'
import prisma from '$lib/prisma'
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
    default: async ({ request }: { request: Request }) => {
        const data = await request.formData()

        let vocabulary = data.get("voc")
        let translation = data.get("trans")
        let language = data.get("lang")

        if(!vocabulary || !translation || !language) {
            return fail(400, {vocabulary, translation, language, missing: true})
        }

        if(typeof vocabulary != "string" || typeof translation != "string" || typeof language != "string") {
            return fail (400, { incorrect: true})
        }

        await prisma.voc.create({
            data: {
                vocabulary,
                translation,
                language
            }
        })

        throw redirect(303, `/learn`)
    }
} satisfies Actions;
