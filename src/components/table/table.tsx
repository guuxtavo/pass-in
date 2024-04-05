import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'> {

}

export function Table(props: TableProps) {
   return (
      <div className='border border-zinc-50/10 rounded-lg' >
         <table {...props} className='w-full ' />
      </div>
   )
}