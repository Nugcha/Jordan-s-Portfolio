'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import bubblesName from '@/public/BubblesName.png';
import htmlImg from '@/public/html.png';
import cssImg from '@/public/css.png';
import jsImg from '@/public/js.png';
import javaImg from '@/public/java.png';
import reactImg from '@/public/react.png';
import figmaImg from '@/public/figma.png';
import githubImg from '@/public/github.png';
import vscodeImg from '@/public/vs.png';
import netlifyImg from '@/public/netlify.png';
import sqlImg from '@/public/sql.png';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-96">
        <Image 
          src={bubblesName}
          alt="Jordan Idroval with bubbles and bubble wand"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-blue-700 to-blue-900">
        
        {/* About Me Section */}
        <section className="w-full px-8 md:px-16 py-16">
          <h2 className="text-4xl font-hand text-white text-center mb-8">About Me</h2>
          <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto text-center font-light">
            I'm currently a senior attending technology High School in Newark, New Jersey, mainly 
            focusing on my skills in Computer Science, and in multiple AP courses. I love to spend 
            my free time getting better at current skills, and learning new ones. So join me in my 
            journey to see the kind of projects I can create in Computer Science!
          </p>
        </section>

        {/* What I Do Section */}
        <section className="w-full px-8 md:px-16 py-16">
          <h2 className="text-4xl font-hand text-white text-center mb-8">What I Do</h2>
          <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto text-center font-light">
            In Computer Science, I spend most of my time currently focusing on React via Virtual 
            Studio Code, and I work on projects (including web design, and creating web pages via 
            Figma design). I work on these projects alone, and with my peers, using multiple coding 
            languages that we've learned throughout high school, to develop our skills in not only 
            computer programming, but also in website development. There are a few websites 
            that I've previously published, and there's many more to come.
          </p>
        </section>

        {/* Skills Section */}
        <section className="w-full px-8 md:px-16 py-16">
          <h2 className="text-4xl font-hand text-white text-center mb-12">Skills</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Languages Column */}
              <div>
                <h3 className="text-2xl font-hand text-white mb-8">Languages</h3>
                <div className="grid grid-cols-4 gap-6 items-center justify-items-center">
                  
                  {/* HTML */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={htmlImg}
                      alt="HTML"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* CSS */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={cssImg}
                      alt="CSS"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* JavaScript */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={jsImg}
                      alt="JavaScript"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Java */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={javaImg}
                      alt="Java"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* React */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={reactImg}
                      alt="React"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>


                  {/* SQL */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={sqlImg}
                      alt="SQL"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* C# */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={csharpImg}
                      alt="C#"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                </div>
              </div>

              {/* Applications Column */}
              <div>
                <h3 className="text-2xl font-hand text-white mb-8">Applications</h3>
                <div className="grid grid-cols-3 gap-8 items-center justify-items-center mb-8">
                  
                  {/* Figma */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={figmaImg}
                      alt="Figma"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* GitHub */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={githubImg}
                      alt="GitHub"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* VS Code */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={vscodeImg}
                      alt="VS Code"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Figma */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={figmaImg}
                      alt="Figma"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* GitHub */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={githubImg}
                      alt="GitHub"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Netlify */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src={netlifyImg}
                      alt="Netlify"
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}