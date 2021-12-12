import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import Script from 'next/script';



export default function Home() {
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   if (process.browser) {
  //     gsap.registerPlugin(ScrollTrigger)
  //     setAnimation()
  //   }
  // }, [])



  useEffect(() => {

    const vBorder = document.querySelectorAll('.v-border');
    gsap.fromTo(vBorder, {
      height: 80,
      ease: "power4.out",
      duration: 1.2,
      repeat: -1,
      top: 0,
      repeatDelay: 2,
    }, {
      height: 0,
      ease: "power4.out",
      duration: 1.2,
      repeat: -1,
      top: 80,
      repeatDelay: 1.5,
    }
    );

    const rollText = document.querySelector('.rollText');
    console.log(rollText);

    gsap.fromTo(
      rollText,
      {
        duration: 3,
        x: '100%',
        repeat: -1,
      },
      {
        duration: 3,
        x: '-100%',
        repeat: -1,
      }
    )

    // vBorder.addEventListener('click', () => {
    //   // tw.play()
    // });


  }, [])

  return (
    <div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></Script>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='overflow-auto'>
        <div className='relative -z-10'>
          <img className='object-scale-fill h-screen w-screen bg-gray-600' src="/icatch.jpg" alt="bg-icatch" />
          <div className='flex justify-between'>
            <img className='absolute left-7 top-7' src='logo.png' alt='logo' width={30} height={32} />
            <img className='absolute right-7 top-7' src='menu_icon.png' alt='logo' width={28} height={8} />
          </div>
        </div>


        <div className='heroText absolute hero-text ml-6 mt-7 top-1/3 text-white'>
          <p className='text-4xl font-bold font-sans tracking-widest'>
            hi,
            <br />
            we are
            <br />
            bird and insect.
          </p>

          <p className='mt-5 text-sm font-mono tracking-wide'>
            image branding partner
          </p>
        </div>

        <div className='bg-gray-900 relative'>
          <div className='absolute -top-5 flex items-center bg-gradient-to-r from-cyan-500 to-fuchsia-900 w-11/12 sm:min-w-fit sm:w-1/2 h-14'>
            <div className="ml-7 w-16 mr-8 bg-gray-700 rounded-full opacity-40 h-0.5 dark:bg-gray-700">
              <div className="bg-gray-100 h-0.5 rounded-full w-2/3" ></div>
            </div>
            <div className='grow'></div>
            <p className='mr-3 text-white font-semibold text-sm tracking-widest'>brand movie</p>
            <Link href='/'>
              <a>
                <img className='mr-4' src='/logo.png' width={30} height={32} />
              </a>
            </Link>

          </div>

          <div className='message'>
            <div className='pt-32 pb-24'>
              {/* { NOTE: need animation} */}
              <p className='rollText overflow-visible whitespace-nowrap text-8xl font-bold tracking-wider font-sans text-clip bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-700 opacity-30'>create wonder</p>
              <div className='p-5 mx-auto max-w-screen-sm'>
                <p className='text-lg text-gray-200 font-bold tracking-tight'>bird and insect は、「面白い ! 」を作り、<br />
                  想いを共に描く image branding partner です。</p>
                <p className='mt-4 text-gray-400 text-xs font-semibold'>
                  bird and insect is the image branding partner<br />
                  that focuses on drawing out your brand story in a way that moves.
                </p>

                {/* vertical border */}
                <div className='relative h-24 my-20'>
                  <div className='absolute left-1/2 v-border bg-gradient-to-b from-cyan-300 to-pink-300 text-center mx-auto' style={{ width: '1px', height: '0px', opacity: '0.5' }}></div>
                </div>
              </div>



              <div className='ml-7'>
                <p className='text-2xl tracking-widest font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-purple-400 to-pink-500 opacity-80'>
                  リアルをドラマに、
                  <br />
                  ドラマをリアルに。
                </p>
                <p className='mt-6 white-description'>
                  イメージは、言語だと思う。<br />
                  人の想いを伝える、力だと思う。<br />
                  <span className='block mt-8' />
                  イメージの力で、<br />
                  リアルを見つめ直すと、ドラマが生まれる。<br />
                  ドラマに気づくと、リアルが変わっていく。<br />
                  <span className='block mt-8' />
                  たとえば、歴史ある会社。<br />
                  その理想を映し出したら、新鮮な驚きがあった。<br />
                  たとえば、まだ世に知られていない商品。<br />
                  その価値を映し出したら、多くの人の心が動いた。<br />
                  <span className='block mt-8' />
                  想いは、はじめからそこにある。<br />
                  <span className='block mt-8' />
                  光、色、音、時間、<br />
                  その一つひとつにを連ねて<br />
                  想いにフォーカスすると、<br />
                  新しい発見がある、出会いがある。<br />
                  <span className='block mt-8' />
                  わたしたち、バード アンド インセクトは<br />
                  ブランドストーリーを共に描く<br />
                  “イメージ・ブランディング・パートナー”です。<br />
                </p>
              </div>
            </div>

            <div className='ml-7'>
              <p className='text-2xl tracking-widest font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-purple-400 to-pink-500 opacity-80'>
                making reality more dramatic,<br />
                bringing the dramatic to reality.
              </p>
              <p className='mt-4 gray-description'>
                We believe image is a form of language.<br />
                It is a powerful tool that helps convey powerful thoughts and ideas.<br />

                With the power of image, we see the world from a different perspective so the drama and newness will be created.<br />
                Together, we change reality.<br />
                <span className='block mt-8' />
                A company with a rich history.<br />
                <span className='block mt-8' />
                A product that is not yet known to the world.<br />
                When we portrait its ideal out, new surprise is born.<br />
                When we visualize its value, peoples minds will be moved just like that.<br />
                <span className='block mt-8' />
                Ideas are there from the beginning.<br />
                Lights, colors, sounds, words, and time.<br />
                When we use these elements to convey the innate ideas, new discoveries are encountered.<br />
                <span className='block mt-8' />
                We are bird and insect.<br />
                <span className='block mt-8' />
                We are the image branding partner that focuses on drawing out your brand story in a way that moves.<br />
              </p>

              <div className='mt-6 float-right flex items-center bg-gradient-to-r from-cyan-500 to-fuchsia-900 max-w-full w-11/12 sm:min-w-fit sm:w-1/2 h-14'>
                <div className='grow'></div>
                <p className='mr-3 text-white font-semibold text-sm tracking-widest'>about us</p>
                <Link href='/'>
                  <a>
                    <img className='mr-4' src='/logo.png' width={30} height={32} />
                  </a>
                </Link>

              </div>

              {/* vertical border */}
              <div className='relative h-24 mt-40'>
                <div className='absolute left-1/2 v-border bg-gradient-to-b from-cyan-300 to-pink-300 text-center mx-auto' style={{ width: '1px', height: '0px', opacity: '0.5' }}></div>
              </div>

              <div className='relative'>
                <div className='brand_text absolute top-1/3'>
                  <p className='text-3xl text-gray-200 tracking-widest font-mono'>image branding</p>
                  <span className='block mt-8' />
                  <p className='white-description'>
                    イメージの部分からブランドの価値を築いていくブランディングの手法です。<br />
                    他社との差別化ではなく、ブランドの持つ独自性を重視し、<br />
                    唯一無二の世界観や物語性のあるイメージづくりを大切にしています。<br />
                  </p>
                  <span className='block mt-8' />
                  <p className='gray-description'>
                    Image branding is the building of brand value on the image basis.<br />
                    We seek to create brand uniqueness and take brand image building seriously with the one-of-a-kind worldview and narrative.<br />

                  </p>

                  <div className='absolute -left-7 mt-6 flex items-center bg-gradient-to-r from-cyan-500 to-fuchsia-900 w-11/12 sm:min-w-fit sm:w-1/2 h-14'>
                    <div className='grow'></div>
                    <p className='mr-3 text-white font-semibold text-sm'>what is image branding</p>
                    <Link href='/'>
                      <a>
                        <img className='mr-4' src='/logo.png' width={30} height={32} />
                      </a>
                    </Link>
                  </div>

                </div>
                <div className='h-80'></div>
                <div className='h-80'></div>
              </div>

              {/* vertical border */}
              <div className='relative h-24 my-20'>
                <div className='absolute left-1/2 v-border bg-gradient-to-b from-cyan-300 to-pink-300 text-center mx-auto' style={{ width: '1px', height: '0px', opacity: '0.5' }}></div>
              </div>

              <div className='relative'>
                <p className='tracking-wider text-lg font-semibold font-sans text-gray-200'>what we do</p>
                <ol className='mb-10 list-decimal text-gray-500 font-semibold text-xs space-y-1.5 list-inside'>
                  <li className='text-lg tracking-wider'>image branding</li>
                  <li className='text-lg tracking-wider'>direction</li>
                  <li className='text-lg tracking-wider'>photography</li>
                  <li className='text-lg tracking-wider'>video production</li>
                  <li className='text-lg tracking-wider'>design</li>
                </ol>
                <div className='absolute bottom-0 right-0 mt-10 flex items-center bg-gradient-to-r from-cyan-500 to-fuchsia-900 w-11/12 sm:min-w-fit sm:w-1/2 h-14'>
                  <div className='grow'></div>
                  <p className='mr-3 text-white font-semibold text-sm'>services</p>
                  <Link href='/'>
                    <a>
                      <img className='mr-4' src='/logo.png' width={30} height={32} />
                    </a>
                  </Link>
                </div>
                <span className='block pb-12' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-24 ml-7'>
          <p className='font-bold tracking-widest text-sm mb-7'>recent works</p>

          <div className='product-card mr-7'>
            <img src='product1.jpg' />
            <p className='mt-4 font-semibold tracking-widest text-xl'>「SOLES GAUFRETTE」main and SNS visual by BAKE INC.</p>
            <p className='mt-6 text-xs font-semibold leading-loose tracking-wider'>BAKE INC.「SOLES GAUFRETTE」のリブランディングに併せたメイン及びSNS用ビジュアルの撮影・制作を担当。</p>
            <p className='font-bold tracking-widest text-sm mt-4'>more</p>

          </div>

          <span className='block mt-12' />

          <div className='product-card mr-7'>
            <img src='product2.jpg' />
            <p className='mt-4 font-semibold tracking-widest text-xl'>Color Your Autumn / Winter by ISETAN MiRROR Make & Cosmetics</p>
            <p className='mt-6 text-xs font-semibold leading-loose tracking-wider'>株式会社三越伊勢丹の運営する、国内外のラグジュアリーコスメを集めたセレクトショップ『ISETAN MiRROR Make & Cosmetics』の2021 Autumn / Winter Visualを撮影・制作。</p>
            <p className='font-bold tracking-widest text-sm mt-4'>more</p>
          </div>

          <p className='text-2xl mt-12 text-center font-mono font-semibold mb-24'>click to explore</p>
        </div>

        <div className='casestudy_ journal bg-stone-800'>
          <p className='pt-24  ml-7 text-gray-200 font-bold tracking-widest text-sm mb-7'>case study / interview</p>

          {/* NOTE:needs scale animation */}
          <div className='grid grid-cols-4 space-x-2 ml-7'>
            <div className='relative'>
              <img className='object-cover h-72' src='grid1.jpg' width={640} height={853} />
              <div className='dark-filter'></div>
              <div className='mt-6 mb-4 h-0.5 w-full bg-gray-400'></div>
              <p className='text-gray-400 font-bold tracking-widest text-sm mb-4'>case study</p>
              <p className='text-gray-200 text-sm font-semibold tracking-widest leading-relaxed'>ブランドイメージ＆ムービー2021 / 中野製薬株式会社</p>
              <p className='mt-2 text-gray-400 text-xs font-semibold leading-relaxed'>Branding image / Movie 2021 by Nakano-Seiyaku</p>
            </div>
            <div className='relative'>
              <img className='object-cover h-72 ' src='grid2.jpg' width={640} height={853} />
              <div className='dark-filter'></div>
              <div className='mt-6 mb-4 h-0.5 w-full bg-gray-400'></div>
              <p className='text-gray-400 font-bold tracking-widest text-sm mb-4'>case study</p>
              <p className='text-gray-200 text-sm font-semibold tracking-widest leading-relaxed'>ブランドイメージ＆ムービー2021 / 中野製薬株式会社</p>
              <p className='mt-2 text-gray-400 text-xs font-semibold leading-relaxed'>Branding image / Movie 2021 by Nakano-Seiyaku</p>
            </div>
            <div className='relative'>
              <img className='object-cover h-72 ' src='grid3.jpg' width={640} height={853} />
              <div className='dark-filter'></div>
              <div className='mt-6 mb-4 h-0.5 w-full bg-gray-400'></div>
              <p className='text-gray-400 font-bold tracking-widest text-sm mb-4'>case study</p>
              <p className='text-gray-200 text-sm font-semibold tracking-widest leading-relaxed'>ブランドイメージ＆ムービー2021 / 中野製薬株式会社</p>
              <p className='mt-2 text-gray-400 text-xs font-semibold leading-relaxed'>Branding image / Movie 2021 by Nakano-Seiyaku</p>
            </div>
            <div className='relative'>
              <img className='object-cover h-72 ' src='grid4.jpg' width={640} height={853} />
              <div className='dark-filter'></div>
              <div className='mt-6 mb-4 h-0.5 w-full bg-gray-400'></div>
              <p className='text-gray-400 font-bold tracking-widest text-sm mb-4'>case study</p>
              <p className='text-gray-200 text-sm font-semibold tracking-widest leading-relaxed'>ブランドイメージ＆ムービー2021 / 中野製薬株式会社</p>
              <p className='mt-2 text-gray-400 text-xs font-semibold leading-relaxed'>Branding image / Movie 2021 by Nakano-Seiyaku</p>
            </div>
          </div>

          <div className='mx-7'>
            <p className='pt-24  ml-7 text-gray-200 font-bold tracking-widest text-sm mb-7'>journal</p>


            <div className='article'>
              <div className='my-6 mb-4 h-0.5 w-full bg-gray-400/30'></div>
              <div className='flex justify-between'>
                <p className='text-sm text-gray-400 font-semibold' >news</p>
                <p className='text-sm text-gray-400 font-semibold' >2021.11.10</p>
              </div>
              <p className='my-2 text-gray-200 text-sm font-semibold tracking-wider'>【11/11（木）より】scenery 第一弾プロダクト「camera backpack」先行予約販売スタート</p>
              <div className='flex mt-4 items-center'>
                <div className='mr-4 w-8 h-8 rounded-full bg-white ' ></div>
                <p className='text-xs text-gray-400 font-semibold tracking-wider' >bird and insect</p>
              </div>
            </div>

            <div className='article'>
              <div className='my-6 mb-4 h-0.5 w-full bg-gray-400/30'></div>
              <div className='flex justify-between'>
                <p className='text-sm text-gray-400 font-semibold' >news</p>
                <p className='text-sm text-gray-400 font-semibold' >2021.11.10</p>
              </div>
              <p className='my-2 text-gray-200 text-sm font-semibold tracking-wider'>【11/11（木）より】scenery 第一弾プロダクト「camera backpack」先行予約販売スタート</p>
              <div className='flex mt-4 items-center'>
                <div className='mr-4 w-8 h-8 rounded-full bg-white ' ></div>
                <p className='text-xs text-gray-400 font-semibold tracking-wider' >bird and insect</p>
              </div>
            </div>

            <div className='article'>
              <div className='my-6 mb-4 h-0.5 w-full bg-gray-400/30'></div>
              <div className='flex justify-between'>
                <p className='text-sm text-gray-400 font-semibold' >news</p>
                <p className='text-sm text-gray-400 font-semibold' >2021.11.10</p>
              </div>
              <p className='my-2 text-gray-200 text-sm font-semibold tracking-wider'>【11/11（木）より】scenery 第一弾プロダクト「camera backpack」先行予約販売スタート</p>
              <div className='flex mt-4 items-center'>
                <div className='mr-4 w-8 h-8 rounded-full bg-white ' ></div>
                <p className='text-xs text-gray-400 font-semibold tracking-wider' >bird and insect</p>
              </div>
            </div>

            <div className='text-center'>
              <p className='pt-24 text-gray-200 font-bold tracking-widest text-sm'>journal</p>
            </div>

            <span className='block mt-8' />
          </div>
        </div>

        <footer className='ml-7'>
          <div className='title'>
            <p className='text-2xl font-semibold tracking-wide font-mono'>bird and insect ltd.</p>
            <p className='mt-2 font-semibold font-sans text-sm'>contact</p>
          </div>

          <div className='address mt-12 leading-loose'>
            <p className='mt-4 font-semibold font-mono'>TOKYO OFFICE</p>
            <p className='text-xs font-semibold tracking-wider'>〒150-0011 <br />東京都渋谷区渋谷2丁目21-1</p>
            <p className='mt-4 text-xs text-gray-600 tracking-wider'>3rd Suga Building 2F, 1-42-5 Akatsutsumi,<br />
              Satagaya-ku, Tokyo</p>
            <p className='my-8 text-xs font-semibold tracking-wider'>TEL:03-5355-7272</p>
          </div>

          <div className='address mt-12 leading-loose'>
            <p className='mt-4 font-semibold font-mono'>TAIWAN OFFICE</p>
            <p className='text-xs font-semibold tracking-wider'>〒158984 <br />台北市中山區玉門街1號CIT</p>
            <p className='mt-4 text-xs text-gray-600 tracking-wider'>CIT, No.1, Yumen St, Zhongshan Dist,
              <br />
              Taipei City,</p>
          </div>

          <div className='address mt-12 leading-loose'>
            <p className='mt-4 font-semibold font-mono'>SNS</p>
            <p className='text-xs font-semibold tracking-wider'>INSTAGRAM <br />Facebook <br /> YouTube</p>
          </div>

          <span className='block mt-24' />
        </footer>



      </main >


    </div >
  )
}
