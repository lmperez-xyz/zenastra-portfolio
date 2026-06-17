import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";


export default function Projects() {
    return (
        <div className="p-5 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link className="block" href="/locaiPage">
                    <Card className="bg-black saturate-[0.2] grayscale brightness-75 hover:grayscale-0 hover:saturate-100 hover:scale-101 hover:ring-zinc-600 transition-transform hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] duration-200 relative overflow-hidden h-64 border flex items-center justify-center">
                        <div className=" absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 z-10"/>
                        <Image alt="" fill src="/img/d-locai.png" className="object-cover" ></Image>

                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded bg-black/60 px-2 py-1 text-white flex items-center justify-center border rounded-full border-white">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M352 64C352 46.3 337.7 32 320 32C302.3 32 288 46.3 288 64L288 128L192 128C139 128 96 171 96 224L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 224C544 171 501 128 448 128L352 128L352 64zM160 432C160 418.7 170.7 408 184 408L216 408C229.3 408 240 418.7 240 432C240 445.3 229.3 456 216 456L184 456C170.7 456 160 445.3 160 432zM280 432C280 418.7 290.7 408 304 408L336 408C349.3 408 360 418.7 360 432C360 445.3 349.3 456 336 456L304 456C290.7 456 280 445.3 280 432zM400 432C400 418.7 410.7 408 424 408L456 408C469.3 408 480 418.7 480 432C480 445.3 469.3 456 456 456L424 456C410.7 456 400 445.3 400 432zM224 240C250.5 240 272 261.5 272 288C272 314.5 250.5 336 224 336C197.5 336 176 314.5 176 288C176 261.5 197.5 240 224 240zM368 288C368 261.5 389.5 240 416 240C442.5 240 464 261.5 464 288C464 314.5 442.5 336 416 336C389.5 336 368 314.5 368 288zM64 288C64 270.3 49.7 256 32 256C14.3 256 0 270.3 0 288L0 384C0 401.7 14.3 416 32 416C49.7 416 64 401.7 64 384L64 288zM608 256C590.3 256 576 270.3 576 288L576 384C576 401.7 590.3 416 608 416C625.7 416 640 401.7 640 384L640 288C640 270.3 625.7 256 608 256z" /></svg>
                            <p className="pl-1">AI</p>
                        </span>
                    </Card>
                </Link>

                <Link className="block" href="/egardenPage">
                    <Card className="bg-black saturate-[0.2] grayscale brightness-75 hover:grayscale-0 hover:saturate-100 hover:scale-101 hover:ring-zinc-600 transition-transform hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] duration-200 relative overflow-hidden h-64 border flex items-center justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/75" />
                        <Image alt="" src="/img/d-egarden-b.png" width={500} height={500} className="object-cover"></Image>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded bg-black/60 px-2 py-1 text-white flex items-center justify-center border rounded-full border-white">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M160 64C154.5 64 149.4 66.8 146.5 71.4L145.4 73.5L120.6 128.9L63.9 107.2C58 105 51.4 106.4 46.9 110.9C42.4 115.4 41 122 43.2 127.9L64.9 184.6L9.5 209.4C3.7 212 0 217.7 0 224C0 230.3 3.7 236 9.5 238.6L64.9 263.4L43.2 320.1C41 326 42.4 332.6 46.9 337.1C51.4 341.6 58 343 63.9 340.8L120.6 319.1L145.4 374.5C148 380.3 153.7 384 160 384C166.3 384 172 380.3 174.6 374.5L199.4 319.1L256.2 340.8C262.1 343 268.7 341.6 273.2 337.1C277.7 332.6 279.1 326 276.9 320.1L255.2 263.4L310.6 238.6C316.4 236 320.1 230.3 320.1 224C320.1 217.7 316.4 212 310.6 209.4L255.2 184.6L276.9 127.9L277.6 125.7C278.8 120.4 277.2 114.8 273.3 110.9C269.4 107 263.8 105.4 258.5 106.6L256.3 107.3L199.5 129L174.7 73.6C172 67.7 166.3 64 160 64zM160 160C195.3 160 224 188.7 224 224C224 259.3 195.3 288 160 288C124.7 288 96 259.3 96 224C96 188.7 124.7 160 160 160zM192 224C192 206.3 177.7 192 160 192C142.3 192 128 206.3 128 224C128 241.7 142.3 256 160 256C177.7 256 192 241.7 192 224zM568 240L568 293.4C553.2 301.1 544 316.5 544 338C544 354.8 560 382 581.4 405.2C587.2 411.4 596.9 411.4 602.6 405.2C624 381.9 640 354.6 640 338C640 316.5 630.8 301 616 293.4L616 240C616 195.8 580.2 160 536 160C491.8 160 456 195.8 456 240L456 262.7C446.2 258.4 435.4 256 424 256C379.8 256 344 291.8 344 336L344 357.4C329.2 365 320 380.5 320 402C320 418.8 336 446 357.4 469.2C363.2 475.4 372.9 475.4 378.6 469.2C400 445.9 416 418.6 416 402C416 380.5 406.8 365 392 357.4L392 336C392 318.3 406.3 304 424 304C441.7 304 456 318.3 456 336L456 512L32 512C14.3 512 0 526.3 0 544C0 561.7 14.3 576 32 576L608 576C625.7 576 640 561.7 640 544C640 526.3 625.7 512 608 512L504 512L504 240C504 222.3 518.3 208 536 208C553.7 208 568 222.3 568 240z" /></svg>
                            <p className="pl-2">Climate Change</p>
                        </span>
                    </Card>
                </Link>

                <Link className="block" href="/viacademyPage">
                    <Card className="bg-black saturate-[0.2] grayscale brightness-75 hover:grayscale-0 hover:saturate-100 hover:scale-101 hover:ring-zinc-600 transition-transform hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] duration-200 relative overflow-hidden h-64 border flex items-center justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/90" />
                        <Image alt="" src="/img/d-viacademy.png" width={500} height={500} className="h-auto w-auto"></Image>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded bg-black/60 px-2 py-1 text-white flex items-center justify-center border rounded-full border-white">
                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M298.2 72.6C310.5 61.2 329.5 61.2 341.7 72.6L432 156.3L432 144C432 126.3 446.3 112 464 112L496 112C513.7 112 528 126.3 528 144L528 245.5L565.8 280.6C575.4 289.6 578.6 303.5 573.8 315.7C569 327.9 557.2 336 544 336L528 336L528 512C528 547.3 499.3 576 464 576L358.4 576L320 512L400.8 444.7C408.6 438.2 408.4 426.1 400.4 419.8L282.6 327.2C268 315.7 248.8 334.2 259.8 349.2L320 432L234.5 503.2C228.4 508.2 227 517 231 523.7L262.3 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 335.9L95.9 335.9C82.7 335.9 70.9 327.8 66.1 315.6C61.3 303.4 64.5 289.4 74.1 280.5L298.1 72.5z" /></svg>
                            <p className="pl-2">Poverty</p>
                        </span>
                    </Card>
                </Link>

                <Link className="block" href="/toraPage">
                    <Card className="bg-black saturate-[0.2] grayscale brightness-75 hover:grayscale-0 hover:saturate-100 hover:scale-101 hover:ring-zinc-600 transition-transform hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] duration-200 relative overflow-hidden h-64 border flex items-center justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/75" />
                        <Image alt="" src="/img/d-tora.png" width={500} height={500} className="h-auto w-auto"></Image>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded bg-black/60 px-2 py-1 text-white flex items-center justify-center border rounded-full border-white">
                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 103C224 90 234 79.2 246.9 78.1L398.7 65.4C408 64.7 416 72 416 81.4L416 112C416 120.8 408.8 128 400 128L249 128C235.2 128 224 116.8 224 103zM241.6 160L398.4 160C399.4 165.2 400 170.5 400 176C400 220.2 364.2 256 320 256C275.8 256 240 220.2 240 176C240 170.5 240.6 165.2 241.6 160zM469.6 524.3L416 433.7L416 544C416 545.3 415.9 546.5 415.8 547.8L241.5 298.9C258.1 291.8 276.1 288 294.8 288L345.2 288C361.1 288 376.5 290.8 391 295.9L485.9 131.7C478.2 127.3 475.6 117.5 480 109.8C484.4 102.1 494.2 99.5 501.9 103.9L529.6 119.9C537.3 124.3 539.9 134.1 535.5 141.8L480 237.9L481.6 238.8C496.9 247.6 502.2 267.2 493.3 282.5L456.7 346C458.7 348.8 460.6 351.8 462.4 354.8L538.5 483.6C549.7 502.6 543.4 527.1 524.4 538.4C505.4 549.7 480.9 543.3 469.6 524.3zM384 576L256 576C238.3 576 224 561.7 224 544L224 433.7L170.4 524.3C159.2 543.3 134.6 549.6 115.6 538.4C96.6 527.2 90.3 502.7 101.6 483.7L177.7 354.8C187.1 339 199.4 325.5 213.7 314.8L395.1 574C391.6 575.3 387.9 576 384 576zM360 384C373.3 384 384 373.3 384 360C384 346.7 373.3 336 360 336C346.7 336 336 346.7 336 360C336 373.3 346.7 384 360 384z" /></svg>
                            <p className="pl-2">World War 3</p>
                        </span>
                    </Card>
                </Link>

                <Link className="block" href="/nomadchefPage">
                    <Card className="bg-black saturate-[0.2] grayscale brightness-75 hover:grayscale-0 hover:saturate-100 hover:scale-101 hover:ring-zinc-600 transition-transform hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] duration-200 relative overflow-hidden h-64 border flex items-center justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/90" />
                        <Image alt="" src="/img/d-nomadchef.png" width={500} height={500} className="h-auto w-auto"></Image>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded bg-black/60 px-2 py-1 text-white flex items-center justify-center border rounded-full border-white">
                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 288L96 480C96 497.7 110.3 512 128 512L160 512C177.7 512 192 497.7 192 480L192 391.8C201.9 398.4 212.6 403.8 224 407.9L224 432.1C224 440.9 231.2 448.1 240 448.1C248.8 448.1 256 440.9 256 432.1L256 415.2C261.3 415.8 266.6 416.1 272 416.1C277.4 416.1 282.7 415.8 288 415.2L288 432.1C288 440.9 295.2 448.1 304 448.1C312.8 448.1 320 440.9 320 432.1L320 407.9C331.4 403.9 342.1 398.5 352 391.8L352 480C352 497.7 366.3 512 384 512L416 512C433.7 512 448 497.7 448 480L448 320L480 352L480 401.5C480 411 482.8 420.2 488.1 428.1L530 491C538.8 504.1 553.5 512 569.3 512C591.8 512 611.2 496.1 615.6 474L635.9 372.4C638.5 359.4 635.6 345.9 627.9 335.1L624 329.6L624 248C624 234.7 613.3 224 600 224C586.7 224 576 234.7 576 248L576 262.4L523.1 188.3C496 150.5 452.4 128 405.9 128L144 128C77.7 128 24 181.7 24 248L24 302C9.4 313.8 0 331.8 0 352L0 369.6C0 377.6 6.4 384 14.4 384C46.2 384 72 358.2 72 326.4L72 248C72 223.7 84.1 202.2 102.5 189.1C98.3 199.9 96 211.7 96 224L96 288zM560 400C560 391.2 567.2 384 576 384C584.8 384 592 391.2 592 400C592 408.8 584.8 416 576 416C567.2 416 560 408.8 560 400zM166.6 230.6C162.4 226.4 160 220.6 160 214.6C160 202.1 170.1 192 182.6 192L361.3 192C373.8 192 383.9 202.1 383.9 214.6C383.9 220.6 381.5 226.4 377.3 230.6L353.9 254C332.2 275.8 302.7 288 272 288C241.3 288 211.8 275.8 190.1 254.1L166.7 230.7z" /></svg>
                            <p className="pl-2">Factory Farming</p>
                        </span>
                    </Card>
                </Link>

                <Link className="block" href="/xifizenPage">
                    <Card className="bg-black saturate-[0.2] grayscale brightness-75 hover:grayscale-0 hover:saturate-100 hover:scale-101 transition-transform hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] duration-200 relative overflow-hidden h-64 border flex items-center justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/95" />
                        <Image alt="" src="/img/d-xifizen.png" width={500} height={500} className="h-auto w-auto"></Image>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded bg-black/40 px-2 py-1 text-white flex items-center justify-center border rounded-full border-white">
                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M272 88C272 74.7 282.7 64 296 64L344 64C357.3 64 368 74.7 368 88L368 144L424 144C437.3 144 448 154.7 448 168L448 216C448 229.3 437.3 240 424 240L368 240L368 296C368 309.3 357.3 320 344 320L296 320C282.7 320 272 309.3 272 296L272 240L216 240C202.7 240 192 229.3 192 216L192 168C192 154.7 202.7 144 216 144L272 144L272 88zM98.7 448L141.2 405.5C165.2 381.5 197.8 368 231.7 368L384 368C401.7 368 416 382.3 416 400C416 417.7 401.7 432 384 432L312 432C298.7 432 288 442.7 288 456C288 469.3 298.7 480 312 480L424.6 480L544.3 391.8C562.1 378.7 587.1 382.5 600.2 400.3C613.3 418.1 609.5 443.1 591.7 456.2L465.1 549.5C441.7 566.7 413.5 576 384.4 576L64 576C46.3 576 32 561.7 32 544L32 480C32 462.3 46.3 448 64 448L98.7 448z" /></svg>
                            <p className="pl-2">Health</p>
                        </span>
                    </Card>
                </Link>
            </div>
        </div>
    )
}