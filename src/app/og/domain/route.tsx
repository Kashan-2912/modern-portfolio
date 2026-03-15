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

  const domain = searchParams.get("domain")
  const isForSale = searchParams.get("sale") === "true"

  return new ImageResponse(
    (
      <div tw="flex text-black bg-white w-full h-full p-16">
        <div tw="flex-1 flex flex-col justify-center border-l border-r border-zinc-200">
          <div tw="flex justify-center border-t border-b border-zinc-200">
            <h1
              tw="mt-8 mb-4 ml-8 mr-8"
              style={{
                fontFamily: "GeistSans",
                fontWeight: 600,
                fontSize: 88,
                letterSpacing: "-0.025em",
              }}
            >
              {domain}
            </h1>
          </div>

          <div tw="flex justify-center border-b border-zinc-200">
            <p
              tw="mt-0 mb-0 pt-4 pb-4 pl-8 pr-8"
              style={{
                fontFamily: "GeistSans",
                fontWeight: 500,
                fontSize: 32,
                color: isForSale ? "#22c55e" : "#71717a",
              }}
            >
              {isForSale
                ? "The domain name is for sale"
                : "The website will be launched soon"}
            </p>
          </div>
        </div>

        <div tw="absolute flex inset-y-0 w-px bg-zinc-200 left-16" />
        <div tw="absolute flex inset-y-0 w-px bg-zinc-200 right-16" />
        <div tw="absolute flex inset-x-0 h-px bg-zinc-200 top-16" />
        <div tw="absolute flex inset-x-0 h-px bg-zinc-200 bottom-16" />

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
