import AccountVerification from "@/components/auth/AccountVerification";



const page = async ({ params }) => {
    const { token } = await params;

    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <AccountVerification token={token} />
        </div>
    )
}



export default page;
