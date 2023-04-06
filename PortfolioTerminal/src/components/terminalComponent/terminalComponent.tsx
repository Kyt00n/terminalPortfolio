import './terminalComponent.css';

function TerminalComponent() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
            } else {
                entry.target.classList.remove('visible');
            }
        })})
    const hiddenElements = document.querySelectorAll('.empty');
    console.log(hiddenElements)
    hiddenElements.forEach((element) => {
        observer.observe(element);
    })

    return(
        <div className="terminal">
            <div className="terminal__header">
                <p>main.ts</p>
            </div>
            <pre className="terminal__body">
                
                <ol>
                    <li className="line empty" data-status="empty">
                        <span className="newline"> </span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="newline"> </span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">/**</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">*</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">* Eryk Olsza 2023</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">*</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">* https://github.com/Kyt00n</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">*</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">**/</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="newline"> </span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="comment">/////////////////////////////</span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="keyword">enum</span>
                        <span className="normal"> Menu &#123;</span>
                    </li>
                    <li className="line" data-status="empty">
                        
                    </li>
                    <li className="line navigation" data-status="empty">
                        <a href="#">
                            <span className="comment">//Portfolio Top Page</span><br />
                            <span className="highlight">TOP</span><br />
                            <span className="normal">,</span>
                        </a>
                    </li>
                    <li className="line navigation" data-status="empty">
                        <a href="#">
                            <span className="comment">//A few facts about me</span><br />
                            <span className="highlight">ABOUT_ME</span><br />
                            <span className="normal">,</span>
                        </a>
                    </li>
                    <li className="line navigation" data-status="empty">
                        <a href="#">
                            <span className="comment">//Preview of some of my projects</span><br />
                            <span className="highlight">PROJECTS</span><br />
                            <span className="normal">,</span>
                        </a>
                    </li>
                    <li className="line navigation" data-status="empty">
                        <a href="#">
                            <span className="comment">//Preview of some of my skills</span><br />
                            <span className="highlight">SKILLS</span><br />
                            <span className="normal">,</span>
                        </a>
                    </li>
                    <li className="line navigation" data-status="empty">
                        <a href="#">
                            <span className="comment">//my contact details</span><br />
                            <span className="highlight">CONTACT_ME</span><br />
                            <span className="normal">,</span>
                        </a>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="normal">&#125;</span>
                    </li>
                    <li className="line" data-status="empty">/////////////////////////////</li>
                    <li className="line" data-status="empty">
                        <span className="keyword">const</span>
                        <span className="normal"> gui = new dat.GUI() </span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="keyword">const</span>
                        <span className="normal"> canvas = document.querySelector('canvas.webgl') </span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="newline"> </span>
                    </li>
                    <li className="line" data-status="empty">
                        <span className="newline"> </span>
                    </li>
                </ol>
            </pre>
            <div className="terminal__footer">
                <p>INSERT Footer name</p>
            </div>
        </div>
    )
}
export default TerminalComponent;