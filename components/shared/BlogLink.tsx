import Link from 'next/link'

export default function BlogLink() {
    return (
        <>
        <div className="flex flex-row justify-between m-5">
            <div className="text-2xl font-bold">
                INDUSTRY INNOVATION MEET (WEST ZONE)
                <div className="text-sm font-semibold">
                    Futuristic Technology for Aatamanirbhar Bharat
                </div>
            </div>
            <div className="">17/02/2024</div>
        </div>
        <hr />
        <div className="flex flex-row justify-between m-5">
            <div className="text-2xl font-bold">
                Online Payment Link for IETE Memberships
                <div className="text-sm font-semibold text-blue-400 visited:text-purple-700">
                    <a href='http://iete-elan.ac.in/elan/inetpaymt/onlinepay.jsp' target='_blank' rel='noopener norefferer'>
                        Click here
                    </a>
                </div>
            </div>
            <div className=""></div>
        </div>
        <hr />
        </>
    )
}

//ss