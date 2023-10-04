export const NoNetwork = () => {

    return <div className='h-screen w-screen bg-[#395E66] text-white flex items-center justify-center text-2xl'>
        <p className="w-[70%]">
            You seem to be disconnected from the internet, please check your internet connection and try again
        </p>
    </div>
}

export const OtherError = () => {

    return <div className='h-screen w-screen bg-[#395E66] text-white flex items-center justify-center text-2xl'>
        <p className="w-[70%]">
            Oops our systems have encountered an error, please refresh the page
        </p>
    </div>
}