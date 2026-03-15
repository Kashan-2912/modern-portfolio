import { readFileSync } from "node:fs"
import { join } from "node:path"

import { ImageResponse } from "next/og"

const geistMedium = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-Medium.ttf")
)

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get("title")
  const description = searchParams.get("description")

  return new ImageResponse(
    (
      <div tw="w-full h-full flex text-white bg-black">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="absolute flex bottom-16 right-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 576 320"
            aria-hidden
            width={128}
            height={64}
          >
            <path
              fill="currentColor"
              d="M0 0h64v320H0zM192 0h64v64h-64zM128 64h64v64h-64zM64 128h64v64h-64zM128 192h64v64h-64zM192 256h64v64h-64zM384 0h64v64h-64zM448 0h64v64h-64zM320 64h64v64h-64zM512 64h64v64h-64zM320 128h256v64h-256zM320 192h64v64h-64zM512 192h64v64h-64zM320 256h64v64h-64zM512 256h64v64h-64z"
            />
          </svg>
        </div>

        <div tw="absolute inset-32 flex flex-col w-[896px] justify-center">
          <div
            style={{
              fontFamily: "GeistSans",
              fontWeight: 600,
              fontSize: 64,
              textWrap: "balance",
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </div>

          {description && (
            <div
              tw="flex-grow-1 mt-4 text-zinc-400"
              style={{
                fontFamily: "GeistSans",
                fontWeight: 500,
                fontSize: 32,
                textWrap: "balance",
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GeistSans",
          data: geistMedium,
          weight: 500,
        },
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
      ],
    }
  )
}
