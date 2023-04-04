function TerminalComponent() {
    return(
        <div className="terminal">
            <div className="terminal__header">
                <p>main.ts</p>
            </div>
            <pre className="terminal__body">
                <ol>
                    <li className="line" data-status="empty">/////////</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">/</li>
                    <li className="line" data-status="empty">//////////</li>
                </ol>
            </pre>
            <div className="terminal__footer">
                <p>INSERT Footer name</p>
            </div>
        </div>
    )
}
export default TerminalComponent;