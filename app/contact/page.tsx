


export default async function Page() {
    return (
    <>
    <div className="flex flex-col gap-6 max-w-viewport justify-center p-4 lg:px-96 px-layout-lg mx-auto">
        <div>
            <h2 className="text-2xl pb-2">PPI Devon</h2>
            <p className="text-lg">Ask us anything at <a className="underline text-red-900 hover:no-underline hover:text-black" href="mailto:ppidevon@gmail.com">ppidevon@gmail.com</a></p>
        </div>

        <div>
            <h2 className="text-2xl">PPI UK</h2>
            <p className="text-lg">Email: <a className="underline text-red-900 hover:no-underline hover:text-black" href="mailto:eksternal@ppiuk.org" target="_blank">eksternal@ppiuk.org</a></p>
            <p className="text-lg">Website: <a className="underline text-red-900 hover:no-underline hover:text-black" href="https://ppiuk.org/" target="_blank">PPI UK</a></p>
        </div>

        <div>
            <h2 className="text-2xl">Indonesian Embassy London</h2>
            <p className="text-lg">Email: <a className="underline text-red-900 hover:no-underline hover:text-black" href="mailto:contact@indonesianembassy.org.uk" target="_blank">contact@indonesianembassy.org.uk</a></p>
            <p className="text-lg">Website: <a className="underline text-red-900 hover:no-underline hover:text-black" href="https://kemlu.go.id/london" target="_blank">KBRI London</a></p>
            <p className="text-lg">Location: <a className="underline text-red-900 hover:no-underline hover:text-black" href="https://maps.app.goo.gl/cDQnQAAaVGkVU9iW8" target="_blank">Kedutaan Besar Republik Indonesia London, 30 Great Peter Street, London SW1P 2BU, United Kingdom</a></p>
        </div>
    </div>
    </>
    )

}