import Typography from "@/components/text/Typography";
import { IoLocationSharp } from "react-icons/io5";


const AccoutCartSidebar = () => {

    return (
        <>
            <Typography className="flex flex-col gap-1">
                <h2 className="font-bold">
                    Shipping Address
                </h2>

                <p>
                    <IoLocationSharp size={30} className="text-primary" />
                </p>
            </Typography>


        </>
    )
}

export default AccoutCartSidebar