'use server'
import { login } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

import * as jose from 'jose'

type authValue = {
    wallet: string
}


const RANDOM_AVATAR_URL = 'https://source.boringavatars.com/pixel/120/'

export async function POST(request: Request) {
    // console.log(request.body)
    const { wallet } = await request.json<authValue>();
    console.log(wallet)
    let user = await db.select().from(users).where(eq(users.wallet, wallet));
    if (!user.length) {
        await db.insert(users).values({
            wallet: wallet,
            username: makeid(5),
        })
        user = await db.select().from(users).where(eq(users.wallet, wallet)).limit(1);
    }

    await login(user[0].wallet, user[0].username);

    console.log(user)

    return Response.json({ msg: 'ok ' })
}


function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function randomColor() {
    Math.floor(Math.random() * 16777215).toString(16);
}

