import React from 'react'
import styles from "./index.module.scss"
import Link from 'next/link'
const Install = () => {
  return (
    <div className={styles.main}>
      {installSteps.map((step, index) => (
        <div key={index}>
        <h3>Step {index+1}: {step.Title}</h3>
        <h4><span className='ml-10' >{step.Desc}</span></h4>
        <p></p>
        <span>Links:</span>
        {step.Links?.map((l,i) =>(
          <p className='ml-2' key={i}>
            <span>Link:</span><Link className='text-purple-800' href={l.Ref}>{l.Title}</Link>
          </p>
          

        ))}
        </div>
      ))}
    </div>
  )
}
export default Install

const installSteps = [
{
  Title: "Register",
  Desc: "Register for an account at https://games.callejon.online/mu/register",
  Image: "",
  Links: [
  {
    Title: "Register Here",
    Ref: "https://games.callejon.online/mu/register"
  }
]

},

{
  Title: "Download",
  Desc: "Download 'MuCallejonSetup.msi' on your computer",
  Image: "",
  Links: 
  [
  {
    Title: "Game Download",
    Ref: "https://downloads.callejon.online/downloads/mu/MuCallejonSetup.msi"
  }
]

},
{
  Title: "Install",
  Desc: "Run 'MuCallejonSetup.msi' and select your installation folder. Note, that installing the game inside the 'Program Files' folder may trigger some problems due to insufficient administrative rights" ,
  Image: ""

},
{
  Title: "Run Game",
  Desc: "Execute the game using the Game Launcher. While you can launch the game directly using 'main.exe' on the application folder, running it through the launcher ensures that the game is up to date",
  Image: ""

},
{
  Title: "Update",
  Desc: "Click update when applicable",
  Image: ""

},
{
  Title: "Game On!",
  Desc: "Click the 'Play' button to launch the game",
  Image: ""

}

]