export function Header() {
    return (
        <header className="bg-amber-950 py-3">
            <nav className="mx-8 md:mx-auto md:w-[80%]">
                <button onClick={() => window.location.reload()}>
                    <h1 className="text-3xl inline pr-1">Neo Dailies</h1>
                </button>
                <span>, your dailies slightly faster</span>
            </nav>
        </header>
    )
}