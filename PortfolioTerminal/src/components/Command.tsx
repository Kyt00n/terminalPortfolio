import { useEffect, useState } from "react";

interface PropsInterface {
    text: string
    
}

function Command(props: PropsInterface){
    
    const [anwser, setAnwser] = useState(``)
    useEffect(()=>{
        switch(props.text) {
            case 'help': {
                setAnwser(`Avalible commands:
    about\tthis project details
    aboutme\ta little bit about me
    clear\tclear the terminal
    linkedin\tquick shortcut to my Linked In`)
                break;
            }
            case 'about': {
                setAnwser(`this is about text`)
            }
            case 'aboutme': {
                setAnwser(`this is aboutme text`)
            }
            case 'clear': {
                setAnwser(`this is clear text`)
            }
            case 'linkedin': {
                setAnwser(`this is linkedin text`)
            }
            default: {
                setAnwser(`this is not supported command
                you want help type help`)
                break;
            }
        }
    }, [props.text])
    
    return (
        <>
            
            quest@term.kyt00n.com:$ ~ {props.text}
            
            <pre>{anwser}</pre>
        </>
    )
}

export default Command;