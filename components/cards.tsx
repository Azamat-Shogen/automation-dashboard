

export function CardItem({title, value}: {
    title: string,
    value: string
}){

    return (
        <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
            <div className="flex p-4">
              <h3 className="ml-2 text-sm font-medium">{title}</h3>
           </div>
            <p className={`truncate rounded-xl bg-white px-4 py-4 text-center text-sm`}>
                {value}
            </p>
        </div>
    )
}
