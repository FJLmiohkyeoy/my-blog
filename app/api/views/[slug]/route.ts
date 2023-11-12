import { NextResponse } from 'next/server'
import prisma from 'prisma/client'

export async function POST(request: Request, { params: { slug } }: { params: { slug: string } }) {
  try {
    const post = await prisma.views.create({
      data: {
        title: slug,
      },
    })
    return NextResponse.json(post)
  } catch (e) {
    return new Response('Failed to create data', { status: 500 })
  }
}

export async function GET(request: Request, { params: { slug } }: { params: { slug: string } }) {
  const views = await prisma.views.findUnique({
    where: {
      title: slug,
    },
  })
  return NextResponse.json(views)
}

export async function PATCH(request: Request, { params: { slug } }: { params: { slug: string } }) {
  const views = await prisma.views.findUnique({
    where: {
      title: slug,
    },
  })
  if (views === null) {
    return NextResponse.json('Data not exist', { status: 404 })
  }
  const updateViews = await prisma.views.update({
    where: {
      title: slug,
    },
    data: {
      views: views?.views + 1,
    },
  })
  return NextResponse.json(updateViews)
}
