import AccountCartOrder from "./_components/AccountCartOrder"
import { AccountCartSelect } from "./_components/AccountCartSelect"
import AccoutCartSidebar from "./_components/AccountCartSidebar"
import { cartData } from "@/data"

const CartPage = () => {
  return (
    <>
      <title>
        User | Cart
      </title>

      <>
          <AccountCartSelect />

        <>
          {/* <aside className='bg-background p-4 rounded-md' >
            <AccoutCartSidebar />
          </aside>

          <aside className="bg-background p-4 rounded-md">
            <AccountCartOrder />
          </aside> */}
        </>

      </>

    </>
  )
}

export default CartPage