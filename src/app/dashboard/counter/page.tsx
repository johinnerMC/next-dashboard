import { CartCounter } from "@/shopping-cart"

export const metadata = {
    title: "Shoppinf-cart",
    description: "contador click"
}
export default function CounterPage() {

    return (
        <div className="flex items-center flex-col justify-center w-full h-full">
            <span>Productos en state</span>

            <CartCounter />
        </div>
    )
}
