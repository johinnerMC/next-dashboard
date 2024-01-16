'use client'

import { IoBagCheckSharp } from "react-icons/io5"
import { SimpleWidget } from ".."
import { useAppSelector } from "@/store"

export const WidgetsGrid = () => {

     const counter = useAppSelector(state => state.counter.count)
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget 
                icon = {<IoBagCheckSharp size={50} className="text-lime-900"/>}
                key={'counter'}
                title={counter.toString()}
                subTitle="Total productos"
                href="/dashboard/counter"
            />
        </div>
    )
}
