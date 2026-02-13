import Image from "next/image";
import Button_Primary from "./components/Button_Primary"
import Button_danger from "./components/Button_danger";
import Project_card from "./components/Project_card";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
      <div className = "w-800 flex flex-row contnet-center gap-8">
      <div className="mt-20 rounded-16 bg-gray-100 p-8">
        <p> This is my stylesheet </p>
        <h1 className="heading1"> This is my Heading 1 </h1>
        <h2 className="heading2"> This is my Heading 2</h2>
        <h3 className="heading3"> This is my Heading 3</h3>
        <p> This is my Paragraph text </p>
        <Button_Primary text={"Click me!"}/>
        <Button_Primary text={"Hover me!"}/>
        <Button_Primary text={"Drag me!"}/>
        <Button_danger text={"Delete!"}/>
      </div>

        <Project_card title={"Ourblooms site"} date={"1/1/26"} info={"A solo project that copied a pre designed figma page"}/>
        <Image src="/public/BubblesName.png" alt= "HeaderName" width={500} height={500}/> 
        
    </div>
  );
}
